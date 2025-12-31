import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

console.log('🔍 Testing MongoDB Atlas Connection...');
console.log('');

const connectionString = process.env.MONGODB_URI;

if (!connectionString) {
  console.error('❌ MONGODB_URI not set in .env file');
  process.exit(1);
}

// Extract username from connection string for display (without password)
const match = connectionString.match(/mongodb\+srv:\/\/([^:]+):/);
const username = match ? match[1] : 'unknown';

console.log('Connection Details:');
console.log(`  Username: ${username}`);
console.log(`  Host: svnglobal.5vlys7w.mongodb.net`);
console.log(`  Database: svn-global`);
console.log('');

console.log('Attempting connection...');
console.log('');

mongoose.connect(connectionString, {
  serverSelectionTimeoutMS: 15000,
  connectTimeoutMS: 15000,
})
  .then(() => {
    console.log('✅✅✅ MongoDB Atlas connection successful! ✅✅✅');
    console.log('');
    console.log('Connection Info:');
    console.log(`  Host: ${mongoose.connection.host}`);
    console.log(`  Database: ${mongoose.connection.name}`);
    console.log(`  Ready State: ${mongoose.connection.readyState}`);
    console.log('');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ MongoDB Atlas connection failed!');
    console.error('');
    console.error('Error Details:');
    console.error(`  Type: ${error.name}`);
    console.error(`  Message: ${error.message}`);
    console.error('');
    
    if (error.message.includes('authentication failed') || error.message.includes('bad auth')) {
      console.error('🔐 Authentication Error - Possible causes:');
      console.error('  1. Incorrect username or password');
      console.error('  2. Password needs URL encoding (special characters)');
      console.error('  3. Database user does not exist');
      console.error('');
      console.error('💡 Solution:');
      console.error('  - Verify the password in MongoDB Atlas');
      console.error('  - Check if special characters (@, <, >, etc.) are properly URL-encoded');
      console.error('  - Ensure the database user exists and has proper permissions');
    } else if (error.message.includes('ENOTFOUND') || error.message.includes('getaddrinfo')) {
      console.error('🌐 Network Error - Possible causes:');
      console.error('  1. No internet connection');
      console.error('  2. DNS resolution failed');
      console.error('  3. Firewall blocking connection');
    } else if (error.message.includes('IP') || error.message.includes('whitelist')) {
      console.error('🚫 IP Whitelist Error:');
      console.error('  Your IP address is not whitelisted in MongoDB Atlas');
      console.error('');
      console.error('💡 Solution:');
      console.error('  1. Go to MongoDB Atlas Dashboard');
      console.error('  2. Navigate to Network Access');
      console.error('  3. Click "Add IP Address"');
      console.error('  4. Add your current IP or use "Allow Access from Anywhere" (0.0.0.0/0)');
    } else {
      console.error('❓ Unknown Error:');
      console.error('  Check MongoDB Atlas dashboard for more details');
    }
    
    console.error('');
    process.exit(1);
  });

