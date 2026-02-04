from pydantic import BaseModel
from datetime import datetime


# ==============================
# Base Schema
# ==============================
class PurchaseBase(BaseModel):
    user_id: int
    book_id: int


# ==============================
# Create Purchase (request body)
# ==============================
class PurchaseCreate(BaseModel):
    book_id: int
    # user_id comes from token (backend), so not required from frontend


# ==============================
# Purchase Response
# ==============================
class PurchaseResponse(BaseModel):
    id: int
    user_id: int
    book_id: int
    purchased_at: datetime

    class Config:
        from_attributes = True   
