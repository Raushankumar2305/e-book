from pydantic import BaseModel
from datetime import datetime
from typing import Optional


# for creat and update
class BookCreate(BaseModel):
    title: str
    author: str
    price: float
    quantity: int



class BookResponse(BookCreate):
    id: int
    image: Optional[str] = None
    pdf: Optional[str] = None   
    created_at: datetime

    class Config:
        from_attributes = True
