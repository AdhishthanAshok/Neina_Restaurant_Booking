import express from "express";
import { getBookings, createBooking, deleteBooking } from "../controllers/bookingController.js";

const router = express.Router(); // Create a new router

router.get("/", getBookings); // Handle GET requests to /bookings
router.post("/", createBooking); // Handle POST requests to /bookings
router.delete("/:id", deleteBooking); // Handle DELETE requests to /bookings/:id

export default router;
