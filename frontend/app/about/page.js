// app/about/page.js
export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto bg-gray-700 text-gray-900 p-8 rounded-lg shadow-xl">
                    <h2 className="text-4xl font-extrabold text-center text-green-400 mb-6">
                        About Us
                    </h2>
                    <p className="text-lg sm:text-xl leading-relaxed text-gray-200">
                        Welcome to our restaurant! We offer delicious meals in a cozy and comfortable
                        environment. Our mission is to provide a memorable dining experience to each guest.
                        Feel free to browse our menu and make a reservation online. We look forward to serving
                        you!
                    </p>
                </div>
            </div>
        </div>
    );
}
