import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL, isApiConfigured, getApiConfigError } from '../../config/api.js';
import { API_URL, isApiConfigured, getApiConfigError } from '../../config/api.js';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && localStorage.getItem('adminToken')) {
        navigate('/admin/dashboard');
      }
    } catch (err) {
      console.error('Auth check error:', err);
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Check if API is configured
      if (!isApiConfigured()) {
        setError(getApiConfigError());
        setLoading(false);
        return;
      }
      
      const response = await fetch(`${API_URL}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ 
          message: `Server error: ${response.status}` 
        }));
        throw new Error(errorData.message || `HTTP ${response.status}`);
      }

      const data = await response.json();

      if (data.success && data.token) {
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('admin', JSON.stringify(data.admin));
        navigate('/admin/dashboard', { replace: true });
      } else {
        setError(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
        const configError = getApiConfigError();
        if (configError) {
          setError(configError);
        } else {
          setError(`Cannot connect to backend server at ${API_URL}. Please verify the backend is running and accessible.`);
        }
      } else {
        setError(err.message || 'Login failed. Please check your credentials.');
      }
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem' }}>
      <div style={{ maxWidth: '28rem', width: '100%' }}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{ width: '4rem', height: '4rem', backgroundColor: '#0284c7', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>SVN</span>
            </div>
          </div>
          <h2 style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '1.875rem', fontWeight: '800', color: '#111827' }}>
            Admin Panel Login
          </h2>
          <p style={{ marginTop: '0.5rem', textAlign: 'center', fontSize: '0.875rem', color: '#4b5563' }}>
            Sign in to manage your website
          </p>
        </div>
        <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
          {error && (
            <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#991b1b', padding: '0.75rem 1rem', borderRadius: '0.375rem', marginBottom: '1.5rem' }}>
              {error}
            </div>
          )}
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem 0.75rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', fontSize: '0.875rem' }}
              placeholder="admin@svnglobal.com"
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="password" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem 0.75rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', fontSize: '0.875rem' }}
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              backgroundColor: loading ? '#94a3b8' : '#0284c7',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
        <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.75rem', color: '#6b7280' }}>
          Default: admin@svnglobal.com / admin123
        </div>
      </div>
    </div>
  );
};

export default Login;
