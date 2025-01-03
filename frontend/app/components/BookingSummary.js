import React from 'react';

const BookingSummary = ({ bookingDetails }) => {
  if (!bookingDetails) {
    return <div className="text-center text-gray-500">No booking details available.</div>;
  }

  const { _id, name, contact, date, time, guests } = bookingDetails;

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this booking?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/bookings/${_id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert("Booking deleted successfully!");
        window.location.href = '/';
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "Failed to delete booking"}`);
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-green-600 mb-4">Booking Confirmed!</h2>
      <div className="text-lg">
        <p className="mb-2">
          <span className="font-bold">Name:</span> {name}
        </p>
        <p className="mb-2">
          <span className="font-bold">Contact:</span> {contact}
        </p>
        <p className="mb-2">
          <span className="font-bold">Date:</span> {date}
        </p>
        <p className="mb-2">
          <span className="font-bold">Time:</span> {time}
        </p>
        <p className="mb-2">
          <span className="font-bold">Guests:</span> {guests}
        </p>
      </div>
      <div className="mt-6 text-center space-x-4">
        <button
          onClick={() => window.location.href = '/'}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Back to Home
        </button>
        <button
          onClick={handleDelete}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Delete Booking
        </button>
      </div>
    </div>
  );
};

export default BookingSummary;
