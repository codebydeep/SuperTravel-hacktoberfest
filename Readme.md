# SuperTravel ✈️🌍

> **Your AI-powered travel companion.** Built with Gemma 4 during Hacktoberfest Hack Day!

SuperTravel solves the classic travel planning headache. Instead of spending hours scouring blogs, booking sites, and maps, users can instantly generate fully personalized, day-by-day travel itineraries tailored to their exact destination, budget, duration, and personal interests—all powered completely by AI.

---

## 🚀 Features

* **AI-Powered Itinerary Generation:** Seamlessly creates custom multi-day travel plans using **Gemma 4**.
* **Personalized Preferences:** Tailors recommendations based on your budget range, trip duration, and specific interests (e.g., adventure, food, history, relaxation).
* **Lightning-Fast Performance:** Uses **Redis** caching to optimize repeat or similar queries.
* **Modern UI/UX:** Clean, accessible, and beautiful interface built with **React**, **Vite**, and **Shadcn UI**.
* **Robust State Management:** Powered by **Zustand** for a smooth user experience.

---

## 🛠️ Tech Stack

### Frontend
* **React + Vite** – Fast development and optimized bundling
* **Tailwind CSS** – Styling
* **Shadcn UI** – Accessible component library
* **Zustand** – Lightweight state management
* **Axios** – API client requests

### Backend & AI
* **Node.js & Express** – RESTful backend API
* **MongoDB** – User data and itinerary storage
* **Redis** – Caching layer for lightning-quick AI response retrieval
* **Gemma 4** – Core AI engine driving intelligent travel recommendations

---

## 📁 Project Structure

```text
supertravel/
├── frontend/             # React + Vite application
│   ├── src/
│   │   ├── components/   # Shadcn UI & custom components
│   │   ├── store/        # Zustand state stores
│   │   └── services/     # Axios API integration
│   └── package.json
└── backend/              # Node.js + Express API
    ├── models/           # Mongoose schemas (MongoDB)
    ├── routes/           # API endpoints
    ├── services/         # Gemma 4 AI integration & Redis cache
    └── server.js