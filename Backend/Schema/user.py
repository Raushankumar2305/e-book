from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from pydantic import ConfigDict


class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str = Field(..., min_length=8, max_length=72)


class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    is_verified: bool
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


class RegisterSchema(BaseModel):
    
    email: EmailStr
    password: str

class LoginSchema(BaseModel):
    email: EmailStr
    password: str


class OTPVerify(BaseModel):
    email: EmailStr
    otp: str
    
class ResendOTP(BaseModel):
    email: EmailStr

class AddAuthorSchema(BaseModel):
    name: str
    email: str
    password: str