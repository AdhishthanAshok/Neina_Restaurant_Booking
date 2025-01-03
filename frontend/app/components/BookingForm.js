"use client"; // Ensure this is the very first line

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    name: "",
    contact: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!formData.date || !formData.time || !formData.name || !formData.contact) {
      setError("All fields are required!");
      toast.error("All fields are required!");
      return;
    }

    setError(""); // Clear previous errors

    try {
      const response = await fetch("https://neina-restaurant-booking-backend.vercel.app/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          date: "",
          time: "",
          guests: 1,
          name: "",
          contact: "",
        }); // Reset the form
        toast.success("Booking Successful!");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to create booking.");
        toast.error(errorData.message || "Failed to create booking.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg shadow-md max-w-4xl mx-auto"
      >
        <h2 className="text-3xl text-gray-300 mb-6 text-center">Book a Table</h2>

        {error && <p className="text-red-400 text-center">{error}</p>}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Date Input */}
          <div>
            <label className="block text-gray-300">Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-700 bg-gray-800 text-white rounded px-4 py-2 mt-2"
            />
          </div>

          {/* Time Input */}
          <div>
            <label className="block text-gray-300">Time:</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full border border-gray-700 bg-gray-800 text-white rounded px-4 py-2 mt-2"
            />
          </div>

          {/* Number of Guests Input */}
          <div>
            <label className="block text-gray-300">Number of Guests:</label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              className="w-full border border-gray-700 bg-gray-800 text-white rounded px-4 py-2 mt-2"
            />
          </div>

          {/* Name Input */}
          <div>
            <label className="block text-gray-300">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-700 bg-gray-800 text-white rounded px-4 py-2 mt-2"
            />
          </div>

          {/* Contact Input */}
          <div>
            <label className="block text-gray-300">Contact:</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border border-gray-700 bg-gray-800 text-white rounded px-4 py-2 mt-2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded-lg mt-6 hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </>
  );
}
