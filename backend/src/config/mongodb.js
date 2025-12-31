import mongoose from 'mongoose';

let cachedConnection = null;

export const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    console.error('MongoDB connection error: MONGODB_URI environment variable is not set');
    throw new Error('MONGODB_URI is required');
  }

  if (cachedConnection && mongoose.connection.readyState === 1) {
    console.log('Using existing MongoDB connection');
    return cachedConnection;
  }

  try {
    console.log('🔄 Connecting to MongoDB...');
    const options = {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 10000,
    };

    const conn = await mongoose.connect(process.env.MONGODB_URI, options);

    cachedConnection = conn;
    
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
      cachedConnection = null;
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('MongoDB disconnected');
      cachedConnection = null;
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    console.error('');
    console.error('Troubleshooting:');
    console.error('1. Check your MONGODB_URI in backend/.env');
    console.error('2. Verify MongoDB Atlas cluster is running');
    console.error('3. Ensure your IP is whitelisted in MongoDB Atlas Network Access');
    console.error('4. Check if your password has special characters (should be URL encoded)');
    console.error('');
    cachedConnection = null;
    throw error;
  }
};
