from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from database import get_db
from models.purchase import Purchase
from models.books import Book
from auth import require_role

router = APIRouter(prefix="/purchase", tags=["Purchase"])


# =====================================================
# BUY BOOK
# =====================================================
@router.post("/{book_id}")
def purchase_book(
    book_id: int,
    request: Request,
    db: Session = Depends(get_db),
    current_user=Depends(require_role(["user"]))
):
    print("\n===== PURCHASE BOOK =====")

    token = request.headers.get("authorization")
    print("Authorization header:", token)
    print("Decoded user:", current_user.id, current_user.role)

    # prevent duplicate purchase
    existing = db.query(Purchase).filter_by(
        user_id=current_user.id,
        book_id=book_id
    ).first()

    if existing:
        raise HTTPException(400, "Already purchased")

    purchase = Purchase(
        user_id=current_user.id,
        book_id=book_id
    )

    db.add(purchase)
    db.commit()

    print("Purchase saved to DB")

    return {
        "message": "Book purchased successfully",
        "user_id": current_user.id,
        "book_id": book_id
    }


# =====================================================
# MY PURCHASED BOOKS
# =====================================================
@router.get("/my-books")
def my_books(
    request: Request,
    db: Session = Depends(get_db),
    current_user=Depends(require_role(["user"]))
):
    print("\n===== MY BOOKS =====")

    token = request.headers.get("authorization")
    print("Authorization header:", token)
    print("Decoded user:", current_user.id, current_user.role)

    books = (
        db.query(Book)
        .join(Purchase, Purchase.book_id == Book.id)
        .filter(Purchase.user_id == current_user.id)
        .all()
    )

    print("Books found:", len(books))

    return {
        "user_id": current_user.id,
        "books": books
    }
