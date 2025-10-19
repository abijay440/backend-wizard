# Backend Wizards — Stage 0 Task: Dynamic Profile Endpoint

## 🚀 Overview
This is a simple REST API that returns my profile info and a dynamic cat fact.

## 🧩 Endpoint
**GET** `/me`

**Example Response:**
```json
{
  "status": "success",
  "user": {
    "email": "abiodun@gmail.com",
    "name": "Abiodun Jegede",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T10:00:00.000Z",
  "fact": "Cats can rotate their ears 180 degrees."
}
