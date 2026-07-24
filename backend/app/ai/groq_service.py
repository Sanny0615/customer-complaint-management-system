import os
import json

from dotenv import load_dotenv
from groq import Groq

from app.ai.prompts import SYSTEM_PROMPT

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def extract_complaint_details(text):

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": SYSTEM_PROMPT
            },
            {
                "role": "user",
                "content": text
            }
        ],
        temperature=0
    )

    content = response.choices[0].message.content.strip()

    print("AI Response:")
    print(content)

    if content.startswith("```json"):
        content = content.replace("```json", "").replace("```", "").strip()

    elif content.startswith("```"):
        content = content.replace("```", "").strip()

    return json.loads(content)