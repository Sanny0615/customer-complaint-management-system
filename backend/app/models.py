from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text

from app.database import Base


class Complaint(Base):

    __tablename__ = "complaints"

    id = Column(Integer, primary_key=True, index=True)

    customer_name = Column(String)

    product_name = Column(String)

    batch_number = Column(String)

    complaint_description = Column(Text)

    severity = Column(String)

    priority = Column(String)