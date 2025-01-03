import React, { useState } from 'react';

const CalendarView = ({ selectedDate, onDateSelect, bookedSlots, onSlotSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Generate calendar days
  const generateCalendar = () => {
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    
    const daysInMonth = [];
    for (let i = 1; i <= endOfMonth.getDate(); i++) {
      const day = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      daysInMonth.push(day);
    }
    return daysInMonth;
  };

  // Check if the day has available slots
  const isDayAvailable = (day) => {
    return !bookedSlots.some(slot => new Date(slot.date).toDateString() === day.toDateString());
  };

  const handleDateClick = (date) => {
    onDateSelect(date);
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const daysInMonth = generateCalendar();
  
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePreviousMonth}>Previous</button>
        <h2>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      
      <div className="calendar-grid">
        {daysInMonth.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${selectedDate && selectedDate.getTime() === day.getTime() ? 'selected' : ''} 
                        ${isDayAvailable(day) ? 'available' : 'booked'}`}
            onClick={() => handleDateClick(day)}
          >
            {day.getDate()}
            {isDayAvailable(day) && (
              <div className="slot-selection">
                <button onClick={() => onSlotSelect(day, '10:00 AM')}>10:00 AM</button>
                <button onClick={() => onSlotSelect(day, '02:00 PM')}>02:00 PM</button>
                <button onClick={() => onSlotSelect(day, '04:00 PM')}>04:00 PM</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
