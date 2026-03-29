# Virtual AI Travel Buddy

A complete web application to get travel recommendations for Jharkhand using Google Gemini AI, built with modern web technologies.

## Tech Stack
- Frontend: React JS, Vite, Vanilla CSS
- Backend: Node.js, Express.js
- Database/AI: MongoDB, Puppeteer, `@google/genai` API

## **Important Prerequisites**
You must install **Node.js** (which includes `npm`) to run this project locally.
Download it from: [https://nodejs.org](https://nodejs.org)

## 🚀 Setup & Run Instructions

**Step 1: Get API Keys**
You can get a free Gemini API key from [Google AI Studio](https://aistudio.google.com/).
Place it in `backend/.env`:
`GEMINI_API_KEY=your_key_here`

**Step 2: Start the Backend server**
1. Open a terminal in the `backend` folder.
2. Run `npm install` to download dependencies (Express, Puppeteer, GenAI, Mongoose).
3. Run `npm run dev`. This will start the API on `http://localhost:5000`.

**Step 3: Start the Frontend server**
1. Open a second terminal block in the `frontend` folder.
2. Run `npm install` to download React dependencies.
3. Run `npm run dev`. This will start Vite dynamically on a port (usually `http://localhost:5173`).

**Step 4: Use the App**
Open the Vite local server link in your browser and start chatting! 
(e.g., "What are the best waterfalls to visit in Jharkhand?")

*Note: If no MongoDB is connected, the backend will gracefully ignore saving chat history and will still respond via Gemini AI.*
