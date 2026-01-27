from sqlalchemy import Column, ForeignKey, Integer, String, Float, DateTime
from sqlalchemy.sql import func
from database import Base

class Book(Base):
    __tablename__ = "books"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    author = Column(String, nullable=False)

    price = Column(Float, nullable=False)
    quantity = Column(Integer, nullable=False)

    image = Column(String, nullable=True)
    pdf = Column(String, nullable=True)

    vendor_id = Column(Integer, ForeignKey("users.id"))
    author_id = Column(Integer, ForeignKey("users.id"))
   

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False
    )
