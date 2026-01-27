from fastapi import APIRouter, HTTPException
import razorpay
import os
from dotenv import load_dotenv
import hmac
import hashlib
from fastapi import Depends
from sqlalchemy.orm import Session
from database import get_db
from models.payment import Payment







from Schema.payment import CreateOrderRequest, PaymentVerify  

load_dotenv()

router = APIRouter(prefix="/payment", tags=["Payment"])

KEY_ID = os.getenv("RAZORPAY_KEY_ID")
KEY_SECRET = os.getenv("RAZORPAY_KEY_SECRET")

if not KEY_ID or not KEY_SECRET:
    raise Exception("Razorpay keys not loaded from .env")

client = razorpay.Client(auth=(KEY_ID, KEY_SECRET))


@router.post("/create-order")
def create_order(data: CreateOrderRequest):

    if data.amount <= 0:
        raise HTTPException(status_code=400, detail="Invalid amount")

    order = client.order.create({
        "amount": data.amount * 100,
        "currency": "INR",
        "payment_capture": 1
    })

    return order


@router.post("/verify-payment")
def verify_payment(data: PaymentVerify, db: Session = Depends(get_db)):

    body = f"{data.razorpay_order_id}|{data.razorpay_payment_id}"

    expected_signature = hmac.new(
        bytes(KEY_SECRET, "utf-8"),
        bytes(body, "utf-8"),
        hashlib.sha256
    ).hexdigest()

    
    if expected_signature != data.razorpay_signature:
        raise HTTPException(status_code=400, detail="Invalid signature")

    
    payment = Payment(
        user_id=data.user_id,
        razorpay_order_id=data.razorpay_order_id,
        razorpay_payment_id=data.razorpay_payment_id,
        amount=data.amount,
        currency="INR",
        status="PAID"
    )

    db.add(payment)
    db.commit()
    db.refresh(payment)

    return {
        "status": "success",
        "message": "Payment saved successfully",
        "payment_db_id": payment.id
    }



@router.get("/history")
def payment_history(db: Session = Depends(get_db)):

    payments = db.query(Payment).order_by(Payment.created_at.desc()).all()

    return payments

@router.get("/history/user/{user_id}")
def payment_history_by_user(user_id: int, db: Session = Depends(get_db)):

    payments = (
        db.query(Payment)
        .filter(Payment.user_id == user_id)
        .order_by(Payment.created_at.desc())
        .all()
    )

    return payments