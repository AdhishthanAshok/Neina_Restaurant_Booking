// app/layout.js
import './globals.css';  // Importing from the same directory (app)

export const metadata = {
  title: 'Restaurant Table Booking',
  description: 'Book a table at our restaurant',
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-100">
        <header>
          <nav className="bg-gradient-to-r  p-6 shadow-xl">
            <div className="container mx-auto flex justify-between items-center">
              {/* Logo/Brand Name */}
              <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">
                ResTauranT BooKinG
              </h1>

              {/* Navigation Links */}
              <ul className="flex space-x-8 text-lg font-medium">
                <li>
                  <a
                    href="/"
                    className="text-gray-100 hover:text-gray-300 transition-all duration-300"
                  >
                    Home
                  </a>
                </li>
               
                <li>
                  <a
                    href="/about"
                    className="text-gray-100 hover:text-gray-300 transition-all duration-300"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        {/* Main content section */}
        <main>{children}</main>
      </body>
    </html>
  );
}
