from fastapi import FastAPI
from database import engine, Base

from routes.user_routes import router
from routes.books_routes import router as books_router
from routes.payment_routes import router as payment_router

from models.payment import Payment

from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pathlib import Path
# from routes.dashboard_routes import router as dashboard_router


from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

BASE_DIR = Path(__file__).resolve().parent

PUBLIC_DIR = BASE_DIR / "public"

if not PUBLIC_DIR.exists():
    os.makedirs(PUBLIC_DIR)


origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# create tables AFTER imports
Base.metadata.create_all(bind=engine)


app.mount("/public", StaticFiles(directory=PUBLIC_DIR), name="public")

app.include_router(router)
app.include_router(books_router)
app.include_router(payment_router)
# app.include_router(dashboard_router)

@app.get("/")
def read_root():
    return {"message": "FastAPI running"}
