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
const port = process.env.PORT || 4000;

// -------------------- CORS --------------------
const allowedOrigins = [
  "https://forever-steel.vercel.app",
  "https://forever-admin-kohl.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS policy violation"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "token"],
    credentials: true,
  })
);

// -------------------- MIDDLEWARE --------------------
app.use(express.json());

// -------------------- ROUTES (REGISTERED AFTER INIT) --------------------
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// -------------------- HEALTH CHECK --------------------
app.get("/", (req, res) => {
  res.send("API is Working");
});

// -------------------- INIT (IMPORTANT FIX) --------------------
const startServer = async () => {
  try {
    await connectDB();
    await connectCloudinary();

    console.log("DB & Cloudinary connected");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Server failed to start:", error);
  }
};

startServer();
