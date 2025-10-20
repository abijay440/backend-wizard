# 🧙‍♂️ Backend Wizards — Stage 0  
## Task: Dynamic Profile Endpoint

## 🚀 Overview
This is a simple REST API built with Cloudflare Workers (TypeScript) that returns my profile information and a dynamic cat fact fetched from an external public API.

The project demonstrates how to:
- Create routes inside a Cloudflare Worker
- Make external HTTP requests
- Return structured JSON responses with timestamps

-----------------------------------

## 🧩 Endpoint

### GET /me

Description:
Returns a success response containing user details, the current timestamp, and a random cat fact.

Example Response:
{
  "status": "success",
  "user": {
    "email": "abijay440@gmail.com",
    "name": "Abiodun Jegede",
    "stack": "TypeScript / Cloudflare Workers"
  },
  "timestamp": "2025-10-20T10:00:00.000Z",
  "fact": "Cats can rotate their ears 180 degrees."
}

-----------------------------------

## ⚙️ How to Run Locally

1️⃣ Install Dependencies:
npm install

2️⃣ Start Development Server:
wrangler dev
→ Opens locally at: http://localhost:8787/

3️⃣ Deploy Globally:
wrangler deploy
→ Your deployed worker will be live at:
https://backend-wizard.<your-cloudflare-subdomain>.workers.dev

-----------------------------------

## 🧠 Notes
- Uses the Fetch API to call https://catfact.ninja/fact
- Includes try/catch for safe error handling
- No database or persistent storage is used
- Timestamps are dynamically generated for each request

-----------------------------------

## 👨‍💻 Author
Abiodun Jegede  
Full-Stack Developer | Abisofts Inc  
📧 abijay440@gmail.com
