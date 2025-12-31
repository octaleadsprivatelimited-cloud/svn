import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

console.log('🔍 Verifying MongoDB Atlas Connection...');
console.log('');

const connectionString = process.env.MONGODB_URI;

if (!connectionString) {
  console.error('❌ MONGODB_URI not set');
  process.exit(1);
}

// Extract details from connection string
const match = connectionString.match(/mongodb\+srv:\/\/([^:]+):([^@]+)@([^/]+)\/([^?]+)/);
if (match) {
  console.log('Connection String Details:');
  console.log(`  Username: ${match[1]}`);
  console.log(`  Password: ${match[2]} (URL-encoded)`);
  console.log(`  Host: ${match[3]}`);
  console.log(`  Database: ${match[4]}`);
  console.log('');
}

console.log('Attempting connection with extended timeout...');
console.log('');

mongoose.connect(connectionString, {
  serverSelectionTimeoutMS: 30000,
  connectTimeoutMS: 30000,
  socketTimeoutMS: 45000,
})
  .then(() => {
    console.log('✅✅✅ SUCCESS! MongoDB Atlas connection established! ✅✅✅');
    console.log('');
    console.log('Connection Info:');
    console.log(`  Host: ${mongoose.connection.host}`);
    console.log(`  Database: ${mongoose.connection.name}`);
    console.log(`  Ready State: ${mongoose.connection.readyState}`);
    console.log('');
    
    // Test a simple operation
    return mongoose.connection.db.admin().ping();
  })
  .then(() => {
    console.log('✅ Database ping successful!');
    console.log('');
    console.log('Your MongoDB Atlas connection is working correctly!');
    mongoose.connection.close();
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Connection failed!');
    console.error('');
    console.error('Error Type:', error.name);
    console.error('Error Message:', error.message);
    console.error('');
    
    if (error.message.includes('authentication failed') || error.message.includes('bad auth')) {
      console.error('🔐 AUTHENTICATION ERROR');
      console.error('');
      console.error('Possible issues:');
      console.error('  1. ❌ IP Address not whitelisted');
      console.error('     → Go to MongoDB Atlas → Network Access');
      console.error('     → Click "Add IP Address"');
      console.error('     → Add your current IP or use 0.0.0.0/0 (for development)');
      console.error('');
      console.error('  2. ❌ Incorrect username or password');
      console.error('     → Verify in MongoDB Atlas → Database Access');
      console.error('     → Check username: svnglobal');
      console.error('     → Verify password: Svnglobal@2025');
      console.error('');
      console.error('  3. ❌ Database user doesn\'t exist or has wrong permissions');
      console.error('     → Check MongoDB Atlas → Database Access');
      console.error('     → Ensure user has "Atlas admin" or "Read and write" permissions');
    } else if (error.message.includes('ENOTFOUND') || error.message.includes('getaddrinfo')) {
      console.error('🌐 NETWORK ERROR');
      console.error('   → Check your internet connection');
      console.error('   → Verify DNS resolution');
    } else {
      console.error('❓ UNKNOWN ERROR');
      console.error('   → Check MongoDB Atlas dashboard');
      console.error('   → Review error details above');
    }
    
    console.error('');
    console.error('📝 Next Steps:');
    console.error('   1. Verify IP whitelist in MongoDB Atlas');
    console.error('   2. Double-check username and password');
    console.error('   3. Ensure database user has proper permissions');
    console.error('');
    
    process.exit(1);
  });

