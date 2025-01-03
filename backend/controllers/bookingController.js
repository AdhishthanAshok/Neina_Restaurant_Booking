import Booking from "../models/Booking.js";

// Get all bookings from the database
export const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find(); // Fetch all bookings
        res.status(200).json(bookings); // Respond with the bookings
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch bookings" });
    }
};

// Create a new booking
export const createBooking = async (req, res) => { 
    const { name, date, time, guests, contact } = req.body; // Get the booking details from the request body

    // Check if all fields are provided
    if (!name || !date || !time || !guests || !contact) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Create a new booking
        const booking = new Booking({ name, date, time, guests, contact });
        await booking.save(); // Save the booking to the database
        res.status(201).json({ message: "Booking created successfully", booking });
    } catch (error) {
        res.status(500).json({ message: "Failed to create booking" });
    }
};


// Delete a booking
export const deleteBooking = async (req, res) => {
    const { id } = req.params; // Get the booking ID from the request parameters

    try {
        // Find the booking by ID and delete it
        const booking = await Booking.findByIdAndDelete(id);
        if (!booking) { // If the booking is not found
            return res.status(404).json({ message: "Booking not found" });
        }
        res.status(200).json({ message: "Booking deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete booking" }); // If there is an error, respond with an error message
    }
};
