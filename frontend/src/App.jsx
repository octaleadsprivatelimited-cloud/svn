import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import TestReports from './pages/TestReports';
import Contact from './pages/Contact';
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import AdminContacts from './pages/admin/Contacts';
import AdminProducts from './pages/admin/Products';

const isAuthenticated = () => {
  try {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('adminToken');
    }
    return false;
  } catch (error) {
    return false;
  }
};

const PrivateRoute = ({ children }) => {
  if (isAuthenticated()) {
    return children;
  }
  return <Navigate to="/admin/login" replace />;
};

const LoginRoute = () => {
  if (isAuthenticated()) {
    return <Navigate to="/admin/dashboard" replace />;
  }
  return <AdminLogin />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<LoginRoute />} />
        <Route
          path="/admin/*"
          element={
            <PrivateRoute>
              <AdminLayout>
                <Routes>
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="contacts" element={<AdminContacts />} />
                  <Route path="products" element={<AdminProducts />} />
                  <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
                </Routes>
              </AdminLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/*"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/test-reports" element={<TestReports />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
