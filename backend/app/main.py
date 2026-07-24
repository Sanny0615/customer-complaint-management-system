from fastapi import FastAPI

from app.database import Base
from app.database import engine

from app.routers.complaints import router as complaint_router

from fastapi.middleware.cors import CORSMiddleware

import app.models

from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="Customer Complaint Management API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)
app.include_router(complaint_router)

@app.get("/")
def home():

    return {
        "message": "Backend Running"
    }