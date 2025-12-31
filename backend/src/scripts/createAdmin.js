import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Admin from '../models/Admin.js';

dotenv.config();

const createDefaultAdmin = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.error('❌ MONGODB_URI is not set in .env file');
      console.error('Please set your MongoDB Atlas connection string in backend/.env');
      process.exit(1);
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log('✅ Connected to MongoDB');

    const adminExists = await Admin.findOne({ email: 'admin@svnglobal.com' });

    if (adminExists) {
      console.log('ℹ️  Admin user already exists');
      console.log('📧 Email: admin@svnglobal.com');
      console.log('🔑 Use your existing password to login');
      await mongoose.connection.close();
      process.exit(0);
    }

    const admin = await Admin.create({
      email: 'admin@svnglobal.com',
      password: 'admin123',
      role: 'admin',
      isActive: true,
    });

    console.log('');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ Default admin user created successfully!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📧 Email: admin@svnglobal.com');
    console.log('🔑 Password: admin123');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('⚠️  Please change the password after first login!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('');
    
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating admin user:', error.message);
    if (error.message.includes('ENOTFOUND') || error.message.includes('connection')) {
      console.error('');
      console.error('⚠️  MongoDB connection failed!');
      console.error('Please check:');
      console.error('1. Your MONGODB_URI in backend/.env is correct');
      console.error('2. Your MongoDB Atlas cluster is running');
      console.error('3. Your IP is whitelisted in MongoDB Atlas');
      console.error('');
    }
    process.exit(1);
  }
};

createDefaultAdmin();
