/**
 * API Configuration
 * 
 * This file centralizes API URL configuration.
 * In production, VITE_API_URL must be set in Vercel environment variables.
 */

const getApiUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  
  // If VITE_API_URL is set, use it (production or custom dev setup)
  if (envUrl) {
    return envUrl;
  }
  
  // Only use localhost in development when running locally
  const isLocalDev = 
    import.meta.env.DEV || 
    window.location.hostname === 'localhost' || 
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname === '';
  
  if (isLocalDev) {
    return 'http://localhost:3001';
  }
  
  // In production, if VITE_API_URL is not set, this is a configuration error
  console.error(
    '❌ VITE_API_URL is not set!\n' +
    'Please configure it in Vercel:\n' +
    '1. Go to your Vercel project → Settings → Environment Variables\n' +
    '2. Add: VITE_API_URL = your-backend-url\n' +
    '3. Redeploy your application'
  );
  
  // Return empty string to trigger error in API calls
  return '';
};

export const API_URL = getApiUrl();

// Export a function to check if API is configured
export const isApiConfigured = () => {
  return !!API_URL;
};

// Export error message for UI
export const getApiConfigError = () => {
  if (!API_URL) {
    return 'Backend API URL is not configured. Please set VITE_API_URL in Vercel environment variables.';
  }
  return null;
};

