# AI-Powered Customer Complaint Management System

An AI-powered full-stack web application developed to simplify customer complaint management. Users can submit complaints through a React interface, while the backend built with FastAPI stores complaint data and uses the Groq LLM to automatically extract structured information such as customer name, complaint category, priority, and summary.

This project was developed as part of an AI internship assignment to demonstrate full-stack development and AI integration.

---

## Features

- Submit customer complaints
- Store complaints in SQLite database
- View all complaints
- Update existing complaints
- Delete complaints
- AI-powered complaint information extraction
- RESTful API using FastAPI
- Interactive Swagger API documentation

---

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- Axios

### Backend
- FastAPI
- SQLAlchemy
- SQLite
- Pydantic
- Uvicorn

### AI Integration
- Groq API
- Llama 3.3 70B Versatile

---

## Project Structure

```
customer-complaint-management-system
│
├── backend
│   ├── app
│   │   ├── ai
│   │   ├── routers
│   │   ├── crud.py
│   │   ├── database.py
│   │   ├── main.py
│   │   ├── models.py
│   │   └── schemas.py
│   │
│   ├── requirements.txt
│   └── .env
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/Sanny0615/customer-complaint-management-system.git
```

---

### Backend

```bash
cd backend

python -m venv .venv

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs at

```
http://127.0.0.1:8000
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```
GROQ_API_KEY=your_groq_api_key_here
```

---

## AI Workflow

1. User enters a complaint.
2. Complaint is sent to the FastAPI backend.
3. FastAPI calls the Groq LLM.
4. The LLM extracts:
   - Customer Name
   - Complaint Category
   - Priority
   - Complaint Summary
5. Structured information is returned and displayed in the frontend.

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /complaints | Create a complaint |
| GET | /complaints | Get all complaints |
| PUT | /complaints/{id} | Update complaint |
| DELETE | /complaints/{id} | Delete complaint |
| POST | /complaints/extract | AI complaint analysis |

---

## Future Improvements

- JWT Authentication
- PostgreSQL Support
- Email Notifications
- Complaint Status Tracking
- Admin Dashboard
- Analytics and Reports

---

## Developer

**Dulam Sunny**

GitHub:
https://github.com/Sanny0615

LinkedIn:
https://www.linkedin.com/in/sunny-goud-8a4329372/