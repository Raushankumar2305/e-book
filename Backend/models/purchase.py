from sqlalchemy import Column, Integer, ForeignKey, DateTime
from datetime import datetime
from database import Base

class Purchase(Base):
    __tablename__ = "purchases"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    book_id = Column(Integer, ForeignKey("books.id"))
    purchased_at = Column(DateTime, default=datetime.utcnow)
