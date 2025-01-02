import Booking from "../models/Booking.js";

// Get all bookings
export const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch bookings" });
    }
};

// Create a new booking
export const createBooking = async (req, res) => {
    const { name, date, time, guests, contact } = req.body;

    if (!name || !date || !time || !guests || !contact) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const booking = new Booking({ name, date, time, guests, contact });
        await booking.save();
        res.status(201).json({ message: "Booking created successfully", booking });
    } catch (error) {
        res.status(500).json({ message: "Failed to create booking" });
    }
};

// Delete a booking
export const deleteBooking = async (req, res) => {
    const { id } = req.params;

    try {
        const booking = await Booking.findByIdAndDelete(id);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        res.status(200).json({ message: "Booking deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete booking" });
    }
};
