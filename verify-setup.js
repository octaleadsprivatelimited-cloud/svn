/**
 * Verification Script
 * Run this in your browser console after deploying to verify VITE_API_URL is set correctly
 */

console.log('🔍 Verifying VITE_API_URL Configuration...');
console.log('');

const envValue = import.meta.env.VITE_API_URL;
const mode = import.meta.env.MODE;
const isProd = import.meta.env.PROD;
const isDev = import.meta.env.DEV;

console.log('Environment Check:');
console.log('  Mode:', mode);
console.log('  Is Production:', isProd);
console.log('  Is Development:', isDev);
console.log('');

console.log('VITE_API_URL Check:');
console.log('  Value from env:', envValue || '(❌ NOT SET)');
console.log('  Type:', typeof envValue);
console.log('  Length:', envValue ? envValue.length : 0);
console.log('');

if (envValue) {
  console.log('✅ VITE_API_URL is set!');
  console.log('  URL:', envValue);
  console.log('');
  
  // Test if backend is accessible
  console.log('Testing backend connection...');
  fetch(`${envValue.replace(/\/+$/, '')}/api/health`)
    .then(response => response.json())
    .then(data => {
      console.log('✅ Backend is accessible!');
      console.log('  Response:', data);
    })
    .catch(error => {
      console.error('❌ Backend is not accessible');
      console.error('  Error:', error.message);
      console.error('  Make sure your backend is deployed and running');
    });
} else {
  console.error('❌ VITE_API_URL is NOT set!');
  console.error('');
  console.error('Action Required:');
  console.error('1. Go to Vercel → Your Project → Settings → Environment Variables');
  console.error('2. Add: VITE_API_URL = https://svn-ten.vercel.app');
  console.error('3. Select ALL environments');
  console.error('4. Save and REDEPLOY');
}

