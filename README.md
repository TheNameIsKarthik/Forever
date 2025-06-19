# Forever - E-commerce Platform 🛍️

[![Deployment](https://img.shields.io/badge/Deployment-Live-success)](https://forever-steel.vercel.app/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Latest-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-brightgreen)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-4.21.2-lightgrey)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-purple)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-ISC-yellow)](LICENSE)

## 🌟 Overview

Forever is a modern, full-stack e-commerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js). It provides a seamless shopping experience with features like user authentication, product management, shopping cart functionality, and secure payment processing.

🔗 [Visit Forever](https://forever-steel.vercel.app/)

## ✨ Features

- 🔐 Secure User Authentication
- 🛒 Shopping Cart Management
- 💳 Secure Payment Integration (Stripe & Razorpay)
- 📱 Responsive Design
- 🖼️ Image Upload with Cloudinary
- 👤 User Profile Management
- 🔍 Product Search and Filtering
- 📦 Order Tracking
- 👨‍💼 Admin Dashboard

## 🛠️ Tech Stack

### Frontend
- React.js 19.0.0
- React Router DOM
- Tailwind CSS
- Axios
- React Toastify
- Vite

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Bcrypt
- Cloudinary
- Multer
- Stripe & Razorpay Integration

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest Version)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/forever.git
cd forever
```

2. Install Frontend Dependencies
```bash
cd frontend
npm install
```

3. Install Backend Dependencies
```bash
cd ../backend
npm install
```

4. Set up Environment Variables
Create a `.env` file in the backend directory with the following variables:
```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret
```

5. Run the Development Servers

Frontend:
```bash
cd frontend
npm run dev
```

Backend:
```bash
cd backend
npm run server
```

## 📝 API Documentation

The API endpoints are organized around the following resources:

- `/api/auth` - Authentication routes
- `/api/products` - Product management
- `/api/orders` - Order processing
- `/api/users` - User management
- `/api/cart` - Shopping cart operations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 👥 Authors

- [Your Name](https://github.com/yourusername)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped this project grow
- Special thanks to the MERN stack community
- Icons provided by [shields.io](https://shields.io/) 