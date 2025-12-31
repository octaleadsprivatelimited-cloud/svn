import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

console.log('Testing MongoDB connection...');
console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'Set' : 'NOT SET');
console.log('');

if (!process.env.MONGODB_URI) {
  console.error('❌ MONGODB_URI not set in .env file');
  process.exit(1);
}

mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 10000,
})
  .then(() => {
    console.log('✅ MongoDB connection successful!');
    console.log('Host:', mongoose.connection.host);
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ MongoDB connection failed!');
    console.error('Error:', error.message);
    console.error('');
    console.error('Possible issues:');
    console.error('1. IP not whitelisted in MongoDB Atlas');
    console.error('2. Incorrect connection string');
    console.error('3. Network/firewall blocking connection');
    process.exit(1);
  });

