# 🎌 React Anime Explorer

A modern **ReactJS** app to explore anime titles using the [Jikan API](https://docs.api.jikan.moe/).  
Built with a responsive UI, real-time search, and detailed anime views.

🔗 **Live Demo:** [https://anime-drab-sigma.vercel.app/]

---

## ✨ Features

- 🔍 **Typeahead Search** – Real-time search that fetches results as you type (no submit button).  
- 📄 **Anime Details** – View synopsis, score, genres, and more for each title.  
- 🎨 **Modern UI/UX** – Built with Material UI, responsive and user-friendly.  
- 🧩 **Clean Structure** – Modular components, reusable hooks, and simple state management.

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/) `^18.2.0`  
- [Axios](https://axios-http.com/) `^1.6.0`  
- [React Router](https://reactrouter.com/)  
- [Material UI](https://mui.com/) `^5.18.0`  
- [Jikan API](https://docs.api.jikan.moe/)  

**API Endpoints:**
- Search: `https://api.jikan.moe/v4/anime?q={query}`
- Details: `https://api.jikan.moe/v4/anime/{id}/full`

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/amanwebexp/anime.git
cd  anime
# Install dependencies
npm install

# Start the development server
npm start
