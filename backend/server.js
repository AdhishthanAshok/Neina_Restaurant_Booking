import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookingRoutes from "./routes/bookingRoutes.js";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/api/bookings", bookingRoutes);

// Root route handler (to prevent 404 on root)
app.get('/', (req, res) => {
  res.send("Welcome to the Restaurant Booking API!");
});

// MongoDB Connection (updated for MongoDB Driver 4.0+)
mongoose
  .connect(process.env.MONGO_URI)  // No need for `useNewUrlParser` or `useUnifiedTopology`
  .then(() => {
    console.log("MongoDB connected");

    // Start the server after successful DB connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });