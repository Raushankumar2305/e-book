from fastapi import Depends, HTTPException, Request
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from passlib.context import CryptContext
import jwt
from sqlalchemy.orm import Session

from database import get_db
from models.user import User


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"


security = HTTPBearer(auto_error=False)


def hash_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


def get_current_user(
    request: Request,
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
):
    print("\n========== AUTH DEBUG ==========")

    auth_header = request.headers.get("authorization")
    print("HEADER:", auth_header)

    if not credentials:
        print(" No credentials")
        raise HTTPException(401, "Token missing")

    token = credentials.credentials
    print("TOKEN:", token)

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        print("PAYLOAD:", payload)

        user_id = payload.get("user_id")

        user = db.query(User).filter(User.id == user_id).first()

        if not user:
            print(" User not found in DB")
            raise HTTPException(401, "User not found")

        print(" AUTH SUCCESS:", user.email)
        return user

    except jwt.ExpiredSignatureError:
        print(" Token expired")
        raise HTTPException(401, "Token expired")

    except Exception as e:
        print(" Token error:", str(e))
        raise HTTPException(401, "Invalid token")


def require_role(roles: list):
    def checker(current_user=Depends(get_current_user)):
        print("ROLE CHECK:", current_user.role)

        if current_user.role not in roles:
            print(" Role not allowed")
            raise HTTPException(403, "Not authorized")

        return current_user
    return checker
