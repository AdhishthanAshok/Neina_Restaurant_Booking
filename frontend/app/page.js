// app/page.js
import Link from 'next/link';
import BookingForm from "./components/BookingForm"; // Import the BookingForm component


export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white min-h-screen flex flex-col items-center justify-center p-6 sm:p-16 font-sans">
      <main className="flex flex-col sm:flex-row sm:gap-12 sm:justify-between items-center sm:items-start w-full max-w-7xl mx-auto">
        
        {/* Left Section: Heading and Description */}
        <div className="sm:w-1/2 w-full text-center sm:text-left mb-8 sm:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 pb-4 sm:pb-6">
            Welcome to Our Restaurant Booking System
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-80 max-w-lg mx-auto sm:mx-0">
            Book a table, manage your bookings, and enjoy your time at our restaurant in a sleek and immersive atmosphere!
          </p>
          <div className="mt-10 flex justify-center sm:justify-start">
              <Link
                href="/booking-summary"
                className="bg-gradient-to-r from-green-500 to-indigo-500 text-white rounded-full px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-indigo-600 hover:shadow-2xl"
              >
                Go to Booking Summary
              </Link>
            </div>
        </div>

        {/* Right Section: Booking Form and Button */}
        <div className="sm:w-1/2 w-full">
          <div className="flex flex-col gap-8">
            {/* Booking Form */}
            <div className="mb-8">
              <BookingForm /> {/* Add the BookingForm component here */}
            </div>

            
            
          </div>
        </div>
      </main>
    </div>
  );
}
