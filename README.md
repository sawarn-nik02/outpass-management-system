# Outpass Management Platform

A React-based outpass management UI for students, built to mimic the IIT Kottayam gate pass portal.

> ⚠️ **This project has a backend dependency.**
> The backend is hosted on Render and **sleeps when inactive**.
> **Please open the backend link first and wait for it to wake up before using the app.**
>
> 👉 [Wake up the backend](https://flipkart-clone-i1eu.onrender.com)
>
> Wait until you see a response, then proceed to use the app.

---

## 🚀 Features

- Pre-filled student login with editable fields
- Dashboard with user card, punch status, and offence tracker
- Full-screen red timer screen showing time elapsed since punch-out
- Log and Settings modals
- Fully responsive — works on mobile and desktop
- Offline-ready build (no CDN dependencies)

## 📋 Tech Stack

- React 18
- Tailwind CSS
- React Router v5 (HashRouter for file:// support)
- Font Awesome (bundled locally)
- Kanit font (bundled locally)

## 📦 Installation

```bash
git clone https://github.com/sawarn-nik02/outpass-management-system.git
cd outpass-management-system
npm install
npm start
```

App runs at `http://localhost:3000`

## 📱 Running on Phone (Offline)

1. Build the project:
```bash
npm run build
```
2. Transfer the `build/` folder to your Android phone
3. Install **Simple HTTP Server** from Play Store
4. Point it to the `build/` folder and start on port `8080`
5. Open Chrome and go to `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── UserCard.jsx
│   ├── StatusCards.jsx
│   ├── ActionButtons.jsx
│   ├── TimerScreen.jsx
│   ├── LogModal.jsx
│   └── SettingsModal.jsx
├── pages/
│   ├── Login.jsx
│   └── Dashboard.jsx
├── App.jsx
├── index.js
└── index.css
```

## 👨‍💻 Author

[sawarn-nik02](https://github.com/sawarn-nik02)
