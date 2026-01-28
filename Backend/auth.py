from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from passlib.context import CryptContext
import jwt
from sqlalchemy.orm import Session

from database import get_db
from models.user import User


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"

security = HTTPBearer()



def hash_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


# current user
def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
):
    token = credentials.credentials

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = payload.get("user_id")

        user = db.query(User).filter(User.id == user_id).first()

        if not user:
            raise HTTPException(401, "User not found")

        return user

    except jwt.PyJWTError:
        raise HTTPException(401, "Invalid token")



def require_role(roles: list):
    def checker(current_user=Depends(get_current_user)):
        if current_user.role not in roles:
            raise HTTPException(403, "Not authorized")
        return current_user
    return checker
