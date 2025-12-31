import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SVN</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">SVN Global</span>
              <span className="text-sm text-gray-600">Mica Covers</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              to="/test-reports"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Test Reports
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="btn-primary"
            >
              Request Quote
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/products"
              className="block text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/test-reports"
              className="block text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Test Reports
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="block btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Request Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

