import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();

// ---------------- CORS ----------------
const allowedOrigins = [
  "https://forever-steel.vercel.app",
  "https://forever-admin-kohl.vercel.app",
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS error"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "token"],
  credentials: true,
}));

app.use(express.json());

// ---------------- INIT ON START (SAFE CACHE) ----------------
let initialized = false;

const init = async () => {
  if (!initialized) {
    await connectDB();
    await connectCloudinary();
    initialized = true;
  }
};

// Only init when server starts (NOT per request)
init();

// ---------------- ROUTES ----------------
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API is Working");
});

export default app;
