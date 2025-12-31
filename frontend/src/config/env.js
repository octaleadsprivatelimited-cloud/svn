const getApiUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  
  if (envUrl && typeof envUrl === 'string') {
    const trimmed = envUrl.trim();
    if (trimmed.length > 0 && trimmed !== 'undefined' && trimmed !== 'null') {
      return trimmed;
    }
  }
  
  if (import.meta.env.DEV || import.meta.env.MODE === 'development') {
    return 'http://localhost:3001';
  }
  
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:3001';
    }
  }
  
  return null;
};

export const API_URL = getApiUrl();

export const isApiConfigured = () => {
  const url = API_URL;
  return url !== null && url !== '' && url !== undefined;
};

export const getApiConfigError = () => {
  if (!isApiConfigured()) {
    const envValue = import.meta.env.VITE_API_URL;
    const mode = import.meta.env.MODE;
    const isProd = import.meta.env.PROD;
    
    if (isProd || mode === 'production') {
      return 'Backend API URL is not configured. Please set VITE_API_URL in Vercel environment variables and redeploy.';
    }
    return 'Backend API URL is not configured. Please set VITE_API_URL in your .env file.';
  }
  return null;
};

if (typeof window !== 'undefined') {
  const envValue = import.meta.env.VITE_API_URL;
  const resolvedUrl = API_URL;
  const mode = import.meta.env.MODE;
  const isProd = import.meta.env.PROD;
  const isDev = import.meta.env.DEV;
  
  console.group('[API Configuration]');
  console.log('Mode:', mode);
  console.log('Is Production:', isProd);
  console.log('Is Development:', isDev);
  console.log('VITE_API_URL from env:', envValue || '(not set or empty)');
  console.log('Resolved API_URL:', resolvedUrl || '(null - not configured)');
  console.log('Is Configured:', isApiConfigured());
  
  if (!resolvedUrl && (isProd || mode === 'production')) {
    console.error('❌ VITE_API_URL is missing in production!');
    console.error('Action required:');
    console.error('1. Go to Vercel → Your Project → Settings → Environment Variables');
    console.error('2. Add: VITE_API_URL = your-backend-url');
    console.error('3. Select ALL environments (Production, Preview, Development)');
    console.error('4. Save and REDEPLOY your application');
  }
  console.groupEnd();
}
