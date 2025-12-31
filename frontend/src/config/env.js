const getApiUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  
  if (envUrl && typeof envUrl === 'string' && envUrl.trim()) {
    const trimmed = envUrl.trim();
    if (trimmed.length > 0) {
      return trimmed;
    }
  }
  
  if (import.meta.env.DEV) {
    return 'http://localhost:3001';
  }
  
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '') {
      return 'http://localhost:3001';
    }
    
    if (hostname.includes('vercel.app') || hostname.includes('localhost')) {
      const protocol = window.location.protocol;
      const port = window.location.port ? `:${window.location.port}` : '';
      if (hostname.includes('localhost')) {
        return 'http://localhost:3001';
      }
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
    const isProd = import.meta.env.PROD;
    const isDev = import.meta.env.DEV;
    
    if (isProd) {
      return 'Backend API URL is not configured. Please set VITE_API_URL in Vercel environment variables and redeploy.';
    }
    return 'Backend API URL is not configured. Please set VITE_API_URL in your .env file.';
  }
  return null;
};

if (typeof window !== 'undefined') {
  const envValue = import.meta.env.VITE_API_URL;
  const resolvedUrl = API_URL;
  
  if (import.meta.env.DEV) {
    console.log('[API Config] Development mode');
    console.log('[API Config] VITE_API_URL from env:', envValue || '(not set)');
    console.log('[API Config] Resolved API_URL:', resolvedUrl);
  } else if (import.meta.env.PROD) {
    if (!resolvedUrl) {
      console.error('[API Config] Production mode - VITE_API_URL is not set!');
      console.error('[API Config] Please set VITE_API_URL in Vercel → Settings → Environment Variables');
    } else {
      console.log('[API Config] Production mode - API URL configured');
    }
  }
}
