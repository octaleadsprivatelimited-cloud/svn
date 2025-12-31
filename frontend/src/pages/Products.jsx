import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productAPI } from '../api/api';

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productAPI.getProducts(true);
        setAllProducts(response.data || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-primary-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Comprehensive range of premium quality mica products for various
            industries
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-8">
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              SVN Global offers a wide range of mica products manufactured to
              international standards. All our products undergo rigorous quality
              checks to ensure they meet the highest industry standards.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading products...</p>
            </div>
          ) : allProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No products available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProducts.map((product) => (
                <div
                  key={product._id || product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {product.title}
                    </h3>
                    {product.description && (
                      <p className="text-gray-600 text-sm mb-4">
                        {product.description}
                      </p>
                    )}
                    {product.specs && product.specs.length > 0 && (
                      <ul className="space-y-2 mb-6">
                        {product.specs.map((spec, index) => (
                          <li key={index} className="text-sm text-gray-600">
                            {spec}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex space-x-4">
                      <Link
                        to="/contact"
                        className="flex-1 btn-primary text-center text-sm py-2"
                      >
                        Enquiry Now
                      </Link>
                      <Link
                        to="/test-reports"
                        className="flex-1 btn-secondary text-center text-sm py-2"
                      >
                        Test Reports
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-primary-50 rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Custom Manufacturing Available
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer custom manufacturing services to meet your specific
                requirements. Our expert team can work with you to develop
                products tailored to your needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">
                  Custom Sizes
                </h3>
                <p className="text-sm text-gray-600">
                  Products manufactured to your exact specifications
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">
                  Quality Assurance
                </h3>
                <p className="text-sm text-gray-600">
                  ISO certified processes ensuring consistent quality
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">
                  Fast Turnaround
                </h3>
                <p className="text-sm text-gray-600">
                  Efficient production processes for timely delivery
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Request Custom Quote</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need More Information?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us for detailed product specifications, pricing, and
            availability
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Contact Us</span>
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
