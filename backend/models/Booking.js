import mongoose from "mongoose";
 
// Create a new mongoose schema
const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    guests: { type: Number, required: true },
    contact: { type: String, required: true },
});

export default mongoose.model("Booking", bookingSchema); // Export the mongoose model
