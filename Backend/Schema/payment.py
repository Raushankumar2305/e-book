from pydantic import BaseModel
from datetime import datetime



class CreateOrderRequest(BaseModel):
    amount: int


class PaymentCreate(BaseModel):
    amount: int
    currency: str = "INR"



class PaymentVerify(BaseModel):
    razorpay_order_id: str
    razorpay_payment_id: str
    razorpay_signature: str
    amount: int



class PaymentResponse(BaseModel):
    id: int
    user_id: int
    razorpay_order_id: str
    razorpay_payment_id: str
    amount: int
    currency: str
    status: str
    created_at: datetime

    class Config:
        from_attributes = True
