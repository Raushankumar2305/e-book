from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime

from auth import hash_password, verify_password
from otp import generate_otp, otp_expiry_time, create_token

from database import get_db
from models.user import User
from Schema.user import (
    RegisterSchema,
    LoginSchema,
    OTPVerify,
    UserCreate,
    UserResponse,
)

from auth import require_role   # ⭐ NEW

router = APIRouter(prefix="/auth", tags=["Auth"])


# =====================================================
# REGISTER (normal user only)
# =====================================================
@router.post("/register")
def register_user(user: UserCreate, db: Session = Depends(get_db)):

    if db.query(User).filter(User.email == user.email).first():
        raise HTTPException(400, "Email already exists")

    new_user = User(
        name=user.name,
        email=user.email,
        password=hash_password(user.password),
        role="user",            
        is_verified=False
    )

    db.add(new_user)
    db.commit()

    return {"message": "User registered successfully"}


# =====================================================
# LOGIN (password → OTP)
# =====================================================
@router.post("/login")
def login(data: LoginSchema, db: Session = Depends(get_db)):

    user = db.query(User).filter(User.email == data.email).first()

    if not user or not verify_password(data.password, user.password):
        raise HTTPException(401, "Invalid credentials")

    otp = generate_otp()
    user.otp = otp
    user.otp_expiry = otp_expiry_time()

    db.commit()

    return {
        "message": "OTP sent",
        "otp": otp   # ⚠ remove in production
    }


# =====================================================
# OTP VERIFY (FINAL LOGIN)
# =====================================================
@router.post("/otp-verify")
def otp_verify(data: OTPVerify, db: Session = Depends(get_db)):

    user = db.query(User).filter(User.email == data.email).first()

    if not user or user.otp != data.otp:
        raise HTTPException(400, "Invalid OTP")

    if user.otp_expiry < datetime.utcnow():
        raise HTTPException(400, "OTP expired")

    user.is_verified = True
    user.otp = None
    user.otp_expiry = None

    token = create_token({
        "user_id": user.id,
        "role": user.role      # ⭐ include role
    })

    db.commit()

    return {
        "message": "OTP verified successfully",
        "access_token": token,
        "role": user.role,
        "user_id": user.id
    }


# =====================================================
# RESEND OTP
# =====================================================
@router.post("/resend-otp")
def resend_otp(data: OTPVerify, db: Session = Depends(get_db)):

    user = db.query(User).filter(User.email == data.email).first()

    if not user:
        raise HTTPException(404, "User not found")

    otp = generate_otp()
    user.otp = otp
    user.otp_expiry = otp_expiry_time()

    db.commit()

    return {
        "message": "OTP resent successfully",
        "otp": otp
    }


# =====================================================
# ADMIN ONLY USER MANAGEMENT
# =====================================================

# ⭐ Only ADMIN can create vendor/author
@router.post("/users", response_model=UserResponse)
def create_user(
    user: UserCreate,
    db: Session = Depends(get_db),
    admin=Depends(require_role(["admin"]))   # ⭐ PROTECTED
):

    if db.query(User).filter(User.email == user.email).first():
        raise HTTPException(400, "Email already exists")

    new_user = User(
        name=user.name,
        email=user.email,
        password=hash_password(user.password),
        role=user.role or "user",   # admin can set role
        is_verified=True
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


# ⭐ ADMIN ONLY view all users
@router.get("/users", response_model=list[UserResponse])
def get_users(
    db: Session = Depends(get_db),
    admin=Depends(require_role(["admin"]))
):
    return db.query(User).all()



@router.put("/users/{id}", response_model=UserResponse)
def update_user(
    id: int,
    user: UserCreate,
    db: Session = Depends(get_db),
    admin=Depends(require_role(["admin"]))
):

    db_user = db.query(User).filter(User.id == id).first()

    if not db_user:
        raise HTTPException(404, "User not found")

    db_user.name = user.name
    db_user.email = user.email
    db_user.role = user.role or db_user.role   

    if user.password:
        db_user.password = hash_password(user.password)

    db.commit()
    db.refresh(db_user)

    return db_user



@router.delete("/users/{id}")
def delete_user(
    id: int,
    db: Session = Depends(get_db),
    admin=Depends(require_role(["admin"]))
):

    db_user = db.query(User).filter(User.id == id).first()

    if not db_user:
        raise HTTPException(404, "User not found")

    db.delete(db_user)
    db.commit()

    return {"message": "User deleted successfully"}
