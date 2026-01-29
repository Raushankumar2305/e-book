from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime


from models.books import Book
from fastapi import Form



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

from auth import require_role   

router = APIRouter(prefix="/auth", tags=["Auth"])



# REGISTER (normal user only)

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



# LOGIN 

@router.post("/login")
def login(data: LoginSchema, db: Session = Depends(get_db)):

    print(" Login request received for:", data.email)

    user = db.query(User).filter(User.email == data.email).first()

    # Step 1  check user exists
    if not user:
        print(" User not found")
        raise HTTPException(status_code=401, detail="Invalid credentials")

    print(" User found in DB:", user.email)


    # Step 2  check password
    is_valid = verify_password(data.password, user.password)
    print(" Password match:", is_valid)

    if not is_valid:
        print(" Wrong password")
        raise HTTPException(status_code=401, detail="Invalid credentials")


    # Step 3  generate otp
    otp = generate_otp()
    expiry = otp_expiry_time()

    print(" Generated OTP:", otp)
    print(" Expiry:", expiry)


    # Step 4  save to DB
    user.otp = otp
    user.otp_expiry = expiry

    try:
        db.commit()
        print(" OTP saved successfully")
    except Exception as e:
        db.rollback()
        print(" DB Commit failed:", e)
        raise HTTPException(status_code=500, detail="Database error")


    return {
        "message": "OTP sent",
        "otp": otp   
    }




# OTP VERIFY 

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
        "role": user.role      
    })

    db.commit()

    return {
        "message": "OTP verified successfully",
        "access_token": token,
        "role": user.role,
        "user_id": user.id
    }


'''@router.post("/otp-verify")
def otp_verify(data: OTPVerify, db: Session = Depends(get_db)):

    user = db.query(User).filter(User.email == data.email).first()

    if not user or user.otp != data.otp:
        raise HTTPException(status_code=400, detail="Invalid OTP")

    if user.otp_expiry < datetime.utcnow():
        raise HTTPException(status_code=400, detail="OTP expired")

    user.is_verified = True
    user.otp = None
    user.otp_expiry = None

    # ✅ include role inside token
    token = create_token({
        "user_id": user.id,
        "role": user.role
    })

    db.commit()

    # ✅ return real role
    return {
        "message": "OTP verified successfully",
        "access_token": token,
        "role": user.role
    }'''




























# RESEND OTP

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

#admin related apis

#  create vendor/author

@router.post("/users", response_model=UserResponse)
def create_user(
    user: UserCreate,
    db: Session = Depends(get_db),
    admin=Depends(require_role(["admin"]))   
):

    if db.query(User).filter(User.email == user.email).first():
        raise HTTPException(400, "Email already exists")

    new_user = User(
        name=user.name,
        email=user.email,
        password=hash_password(user.password),
        role=user.role or "user",   
        is_verified=True
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


# #  ADMIN ONLY view all users
# @router.get("/users", response_model=list[UserResponse])
# def get_users(
#     db: Session = Depends(get_db),
#     admin=Depends(require_role(["admin"]))
# ):
#     return db.query(User).all()


@router.get("/users", response_model=list[UserResponse])
def get_users(
    db: Session = Depends(get_db),
    admin=Depends(require_role(["admin"]))
):
    print("\n  get all users")

    # Step 1 request ok
    print(" Request received")

    # Step 2  confirm admin 
    print(" Current user:", admin.email)
    print(" Role:", admin.role)

    try:
        # Step 3 show users
        users = db.query(User).all()

        print(" Users fetched from DB:", len(users))

        if not users:
            print(" No users found in database")

        # Step 4 printuser
        for u in users[:3]:
            print(" u.email ", u.email, "| role:", u.role)

        print(" Returning users list")

        return users

    except Exception as e:
        print(" Database error:", str(e))
        raise HTTPException(status_code=500, detail="Database error")




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





# vendor apis

@router.post("/vendor/add-author")
def vendor_add_author(
    name: str,
    email: str,
    password: str,
    db: Session = Depends(get_db),
    vendor=Depends(require_role(["vendor"]))
):
    if db.query(User).filter(User.email == email).first():
        raise HTTPException(400, "Email already exists")

    new_author = User(
        name=name,
        email=email,
        password=hash_password(password),
        role="author",
        is_verified=True
    )

    db.add(new_author)
    db.commit()

    return {"message": "Author created successfully"}


#  Vendor = add book 
@router.post("/vendor/add-book")
def vendor_add_book(
    title: str = Form(...),
    price: float = Form(...),
    quantity: int = Form(...),
    author_id: int = Form(...),
    db: Session = Depends(get_db),
    vendor=Depends(require_role(["vendor"]))
):

    author = db.query(User).filter(
        User.id == author_id,
        User.role == "author"
    ).first()

    if not author:
        raise HTTPException(404, "Invalid author")

    book = Book(
        title=title,
        author="",
        price=price,
        quantity=quantity,
        vendor_id=vendor.id,
        author_id=author_id
    )

    db.add(book)
    db.commit()

    return {"message": "Book added successfully"}
