from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form
from sqlalchemy.orm import Session
from fastapi.responses import StreamingResponse
from io import BytesIO
import uuid
from pathlib import Path
import shutil

from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

from database import get_db
from models.books import Book
from Schema.books import BookResponse

router = APIRouter(prefix="/books", tags=["Books"])


BASE_DIR = Path(__file__).resolve().parent.parent
BOOKS_DIR = BASE_DIR / "public" / "uploads" / "books"
BOOKS_DIR.mkdir(parents=True, exist_ok=True)


@router.post("/", response_model=BookResponse)
def create_book(
    title: str = Form(...),
    author: str = Form(...),
    price: float = Form(...),
    quantity: int = Form(...),
    image: UploadFile = File(None),
    pdf: UploadFile = File(None),
    db: Session = Depends(get_db),
):
    book_uuid = str(uuid.uuid4())
    book_dir = BOOKS_DIR / book_uuid
    book_dir.mkdir(parents=True, exist_ok=True)

    image_path = None
    pdf_path = None

    
    if image:
        image_ext = image.filename.split(".")[-1]
        image_name = f"image.{image_ext}"
        image_file_path = book_dir / image_name

        with open(image_file_path, "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)

        image_path = f"uploads/books/{book_uuid}/{image_name}"


    if pdf:
        pdf_name = "book.pdf"
        pdf_file_path = book_dir / pdf_name

        with open(pdf_file_path, "wb") as buffer:
            shutil.copyfileobj(pdf.file, buffer)

        pdf_path = f"uploads/books/{book_uuid}/{pdf_name}"

    new_book = Book(
        title=title,
        author=author,
        price=price,
        quantity=quantity,
        image=image_path,
        pdf=pdf_path
    )

    db.add(new_book)
    db.commit()
    db.refresh(new_book)

    return new_book



@router.get("/", response_model=list[BookResponse])
def get_books(db: Session = Depends(get_db)):
    return db.query(Book).all()



@router.put("/{id}", response_model=BookResponse)
def update_book(
    id: int,
    title: str = Form(...),
    author: str = Form(...),
    price: float = Form(...),
    quantity: int = Form(...),
    image: UploadFile = File(None),
    pdf: UploadFile = File(None),
    db: Session = Depends(get_db),
):
    book = db.query(Book).filter(Book.id == id).first()

    if not book:
        raise HTTPException(status_code=404, detail="Book not found")

    book.title = title
    book.author = author
    book.price = price
    book.quantity = quantity

    # new added,  uuid folder from  image/pdf
    uuid_folder = None
    if book.image:
        uuid_folder = book.image.split("/")[2]
    elif book.pdf:
        uuid_folder = book.pdf.split("/")[2]

    if not uuid_folder:
        uuid_folder = str(uuid.uuid4())

    book_dir = BOOKS_DIR / uuid_folder
    book_dir.mkdir(parents=True, exist_ok=True)

    # new added get imge
    if image:
        image_ext = image.filename.split(".")[-1]
        image_name = f"image.{image_ext}"
        image_file_path = book_dir / image_name

        with open(image_file_path, "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)

        book.image = f"uploads/books/{uuid_folder}/{image_name}"

    # get new added  pdf
    if pdf:
        pdf_name = "book.pdf"
        pdf_file_path = book_dir / pdf_name

        with open(pdf_file_path, "wb") as buffer:
            shutil.copyfileobj(pdf.file, buffer)

        book.pdf = f"uploads/books/{uuid_folder}/{pdf_name}"

    db.commit()
    db.refresh(book)
    return book


@router.delete("/{id}")
def delete_book(id: int, db: Session = Depends(get_db)):
    book = db.query(Book).filter(Book.id == id).first()

    if not book:
        raise HTTPException(status_code=404, detail="book not found")

    
    folder = None
    if book.image:
        folder = BOOKS_DIR / book.image.split("/")[2]
    elif book.pdf:
        folder = BOOKS_DIR / book.pdf.split("/")[2]

    if folder and folder.exists():
        shutil.rmtree(folder)

    db.delete(book)
    db.commit()
    return {"message": "Book delted successfully"}


@router.get("/{id}/pdf-generate")
def generate_book_pdf(id: int, db: Session = Depends(get_db)):
    book = db.query(Book).filter(Book.id == id).first()

    if not book:
        raise HTTPException(status_code=404, detail="Book not found")

    buffer = BytesIO()
    pdf = canvas.Canvas(buffer, pagesize=A4)

    pdf.setFont("Helvetica-Bold", 22)
    pdf.drawString(180, 800, "Book Details")

    pdf.setFont("Helvetica", 14)
    pdf.drawString(100, 740, f"Book ID: {book.id}")
    pdf.drawString(100, 710, f"Title: {book.title}")
    pdf.drawString(100, 680, f"Author: {book.author}")
    pdf.drawString(100, 650, f"Price: Rs {book.price}")
    pdf.drawString(100, 620, f"Quantity: {book.quantity}")

    pdf.showPage()
    pdf.save()
    buffer.seek(0)

    return StreamingResponse(
        buffer,
        media_type="application/pdf",
        headers={"Content-Disposition": f"inline; filename=book_{book.id}.pdf"},
    )
