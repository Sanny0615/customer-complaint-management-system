from pydantic import BaseModel


class ComplaintCreate(BaseModel):
    customer_name: str
    product_name: str
    batch_number: str
    complaint_description: str
    severity: str
    priority: str


class ComplaintResponse(ComplaintCreate):
    id: int

    class Config:
        from_attributes = True