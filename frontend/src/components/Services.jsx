import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productAPI } from '../api/api';

const Services = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productAPI.getProducts(true);
        const allProducts = response.data || [];
        setProducts(allProducts.slice(0, 3));
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Hot Products
          </h2>
          <div className="text-center">
            <p className="text-gray-600">Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Hot Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
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
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {product.title}
                </h3>
                {product.specs && product.specs.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {product.specs.slice(0, 5).map((spec, index) => (
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
                    to="/products"
                    className="flex-1 btn-secondary text-center text-sm py-2"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>View All Products</span>
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
    </section>
  );
};

export default Services;
