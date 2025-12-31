import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SVN</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">SVN Global</span>
                <span className="text-sm text-gray-400">Mica Covers</span>
              </div>
            </Link>
            <p className="text-sm mb-4">
              Trusted Mica Covers Importer & Exporter. Delivering premium quality
              products to global markets with excellence and reliability.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-6 h-6 bg-primary-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-6 h-6 bg-primary-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>RoHS Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-6 h-6 bg-primary-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Global Standards</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-primary-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/test-reports"
                  className="hover:text-primary-400 transition-colors"
                >
                  Test Reports
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>• Mica Covers Import</li>
              <li>• Mica Covers Export</li>
              <li>• Custom Manufacturing</li>
              <li>• Quality Assurance</li>
              <li>• Global Shipping</li>
              <li>• Compliance Services</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 mt-1 text-primary-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="mailto:info@svnglobal.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  info@svnglobal.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 mt-1 text-primary-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href="tel:+15551234567"
                  className="hover:text-primary-400 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 mt-1 text-primary-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div>123 Global Trade Center</div>
                  <div>Business District, City, Country</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            © 2025 SVN Global. All Rights Reserved. | Developed by{' '}
            <a
              href="https://octaleads.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              Octaleads Private Limited
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

