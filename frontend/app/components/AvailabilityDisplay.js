"use-client";

import React, { useState, useEffect } from 'react';

const AvailabilityDisplay = ({ selectedDate }) => {
  const [availability, setAvailability] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch available slots for the selected date or date range
  useEffect(() => {
    const fetchAvailability = async () => {
      setLoading(true);
      try {
        const formattedDate = selectedDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
        const response = await fetch(`https://neina-restaurant-booking-backend.vercel.app/api/availability?date=${formattedDate}`);
        const data = await response.json();
        setAvailability(data.availableSlots); // Assuming the response contains the available slots
      } catch (err) {
        console.error('Error fetching availability:', err);
      } finally {
        setLoading(false);
      }
    };

    if (selectedDate) {
      fetchAvailability(); // Only fetch when selectedDate is set
    }
  }, [selectedDate]);

  // Display availability information
  return (
    <div className="availability-display">
      <h2>Available Slots for {selectedDate.toDateString()}</h2>
      {loading ? (
        <p>Loading availability...</p>
      ) : (
        <ul className="availability-list">
          {availability.length > 0 ? (
            availability.map((slot, index) => (
              <li key={index} className="availability-item">
                <strong>{slot.time}</strong>: {slot.isAvailable ? 'Available' : 'Not Available'}
              </li>
            ))
          ) : (
            <p>No availability for this date.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default AvailabilityDisplay;
