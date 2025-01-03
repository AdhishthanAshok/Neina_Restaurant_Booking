"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookingSummary() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/bookings");
                setBookings(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch booking details.");
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this booking?");
        if (!confirmDelete) return;

        try {
            const response = await axios.delete(`http://localhost:5000/api/bookings/${id}`);
            if (response.status === 200) {
                setBookings(bookings.filter((booking) => booking._id !== id)); // Update state
                toast.success("Booking deleted successfully!");
            } else {
                toast.error("Failed to delete booking. Please try again.");
            }
        } catch (error) {
            console.error("Error deleting booking:", error);
            toast.error("An error occurred while deleting the booking.");
        }
    };

    if (loading) {
        return <p className="text-center mt-8 text-white">Loading booking details...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500 mt-8">{error}</p>;
    }

    return (
        <div className="min-h-screen p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
            <ToastContainer />
            <h2 className="text-3xl font-bold text-center text-white mb-8">Booking Summary</h2>
            {bookings.length === 0 ? (
                <p className="text-center text-white">No bookings available.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {bookings.map((booking, index) => (
                        <div
                            key={index}
                            className="border bg-gray-600 border-gray-300 p-6 rounded-xl shadow-lg text-gray-300 hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
                        >
                            <h3 className="text-2xl font-semibold text-green-400 mb-4">
                                Booking {index + 1}
                            </h3>
                            <div className="grid gap-4 text-gray-200">
                                <div className="flex items-center">
                                    <strong className="w-24 font-medium">Name :</strong>
                                    <span>{booking.name}</span>
                                </div>
                                <div className="flex items-center">
                                    <strong className="w-24 font-medium">Date :</strong>
                                    <span>{booking.date}</span>
                                </div>
                                <div className="flex items-center">
                                    <strong className="w-24 font-medium">Time :</strong>
                                    <span>{booking.time}</span>
                                </div>
                                <div className="flex items-center">
                                    <strong className="w-24 font-medium">Guests :</strong>
                                    <span>{booking.guests}</span>
                                </div>
                                <div className="flex items-center">
                                    <strong className="w-24 font-medium">Contact :</strong>
                                    <span>{booking.contact}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => handleDelete(booking._id)}
                                className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                            >
                                Delete Booking
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
