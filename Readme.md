# 🔗 Linkify

Linkify is a full-stack URL shortening app built with Node.js, Express, MongoDB, and EJS. It converts long URLs into short, shareable links with authentication and basic click analytics.

---

## 🌐 Deployed Application

**Live Demo:** [Your Deployed Link Here](https://your-deployed-url.com)

---

## ✨ Features
- 🔐 User Authentication (JWT)
- 🎯 URL Shortening
- 📊 Click Analytics
- 👤 User Dashboard
- 🎨 Modern UI
- 🔒 Protected Routes
- 📱 Mobile Responsive

## 🛠️ Tech Stack
- Node.js, Express.js
- MongoDB, Mongoose
- EJS
- JWT
- Custom CSS, Font Awesome
- NanoID/ShortID

## 📋 Prerequisites
- Node.js (v14+)
- MongoDB
- npm or yarn

## 🚀 Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/linkify.git
   cd linkify
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a local `.env` file (do not commit it). You can copy from `.env.example`.
   ```env
   MONGO_URI=mongodb://$$$$$$$$$$$$$$$$$$
   JWT_SECRET=your_jwt_secret_key_here
   PORT=8001
   ```
4. Start MongoDB:
   ```bash
   net start MongoDB # Windows
   sudo systemctl start mongod # Mac/Linux
   ```
5. Run the app:
   ```bash
   npm start
   ```
6. Open [http://localhost:8001](http://localhost:8001)

## 📁 Project Structure
```
2_1Short_Url/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── service/
├── views/
├── connect.js
├── index.js
├── .env.example
├── package.json
└── package-lock.json
```

## 🎯 Usage
- Create short URLs
- Register/Login
- Dashboard access

## 🔑 Environment Variables
| Variable | Description |
| --- | --- |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT tokens |
| `PORT` | Server port |

## 📊 API Endpoints
- `POST /url` - Create short URL
- `GET /:shortId` - Redirect
- `POST /user` - Register
- `POST /user/login` - Login
- `GET /` - Homepage
- `GET /signup` - Signup
- `GET /login` - Login

## 👨‍💻 Author
Built with ❤️ by Avinash © 2026

## 🙏 Acknowledgments
- Font Awesome
- MongoDB
- Express.js

## About
A full-stack URL Shortener web app for converting long URLs into short, shareable links with redirection and click tracking.
