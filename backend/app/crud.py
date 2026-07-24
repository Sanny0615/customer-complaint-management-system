from sqlalchemy.orm import Session

from app import models
from app import schemas


def create_complaint(db: Session, complaint: schemas.ComplaintCreate):

    db_complaint = models.Complaint(
        customer_name=complaint.customer_name,
        product_name=complaint.product_name,
        batch_number=complaint.batch_number,
        complaint_description=complaint.complaint_description,
        severity=complaint.severity,
        priority=complaint.priority
    )

    db.add(db_complaint)
    db.commit()
    db.refresh(db_complaint)

    return db_complaint

def get_all_complaints(db: Session):
    return db.query(models.Complaint).all()