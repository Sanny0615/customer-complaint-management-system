from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app import crud
from app import schemas

from app.ai.groq_service import extract_complaint_details
from fastapi import HTTPException

router = APIRouter(
    prefix="/complaints",
    tags=["Complaints"]
)


@router.post("/")
def create_complaint(
    complaint: schemas.ComplaintCreate,
    db: Session = Depends(get_db)
):
    return crud.create_complaint(db, complaint)


@router.get("/")
def get_all_complaints(
    db: Session = Depends(get_db)
):
    return crud.get_all_complaints(db)

@router.post("/extract")
def extract_complaint(data: dict):
    try:
        complaint_text = data.get("complaint_text", "")

        result = extract_complaint_details(complaint_text)

        return {
            "success": True,
            "data": result
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))