import express from "express";
import cors from "cors";
import path from "path";
import "dotenv/config";
import authRouter from "./routes/authRoutes.js";
import connectDB from "./configs/mongodb.js";
import messageRouter from "./routes/messageRoutes.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// To parse incoming requests with JSON payload from req.body
app.use(express.json());
app.use(
  cors({
    cors: {
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
    },
  })
);

app.use(cookieParser());
// Database connection
connectDB();

// Routes
app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  console.log("Server Running on Port:", PORT);
});
