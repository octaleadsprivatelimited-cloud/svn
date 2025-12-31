import { useState, useEffect } from 'react';
import { contactAPI, productAPI } from '../../api/api';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [stats, setStats] = useState({
    contacts: 0,
    products: 0,
    loading: true,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [contactsRes, productsRes] = await Promise.all([
          contactAPI.getContacts(),
          productAPI.getProducts(),
        ]);
        setStats({
          contacts: contactsRes.count || 0,
          products: productsRes.count || 0,
          loading: false,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
        setStats({ ...stats, loading: false });
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-600 mt-1">Welcome to the admin panel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Contacts</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {stats.loading ? '...' : stats.contacts}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📧</span>
            </div>
          </div>
          <Link
            to="/admin/contacts"
            className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-4 inline-block"
          >
            View all →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Products</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {stats.loading ? '...' : stats.products}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📦</span>
            </div>
          </div>
          <Link
            to="/admin/products"
            className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-4 inline-block"
          >
            Manage products →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Quick Actions</p>
              <p className="text-sm text-gray-500 mt-2">Manage your content</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <Link
              to="/admin/products"
              className="block text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              + Add Product
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to="/admin/contacts"
            className="p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
          >
            <h4 className="font-medium text-gray-900">View Contacts</h4>
            <p className="text-sm text-gray-600 mt-1">Manage all contact form submissions</p>
          </Link>
          <Link
            to="/admin/products"
            className="p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
          >
            <h4 className="font-medium text-gray-900">Manage Products</h4>
            <p className="text-sm text-gray-600 mt-1">Add, edit, or delete products</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

