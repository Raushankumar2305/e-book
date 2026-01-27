import random
from datetime import datetime, timedelta
from jose import jwt

SECRET_KEY = "SECRET123"
ALGORITHM = "HS256"

def generate_otp():
    return str(random.randint(100000, 999999))

def otp_expiry_time():
    return datetime.utcnow() + timedelta(minutes=5)

def create_token(data: dict):
    expire = datetime.utcnow() + timedelta(hours=1)
    data.update({"exp": expire})
    return jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)
