from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.sql import func
from database import Base


class Payment(Base):
    __tablename__ = "payments"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer, ForeignKey("users.id"))

    razorpay_order_id = Column(String, nullable=False)
    razorpay_payment_id = Column(String, nullable=False)

    amount = Column(Integer, nullable=False)   
    currency = Column(String, default="INR")

    status = Column(String, default="CREATED")   # it will go create , paid and faile

    created_at = Column(DateTime(timezone=True), server_default=func.now())

