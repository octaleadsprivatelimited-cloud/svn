import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { connectDB } from './config/mongodb.js';
import Admin from './models/Admin.js';

const requiredEnvVars = ['MONGODB_URI', 'JWT_SECRET'];

const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('❌ Missing required environment variables:', missingVars.join(', '));
  console.error('Please ensure all required environment variables are set in .env file');
  process.exit(1);
}

const createDefaultAdminIfNeeded = async () => {
  try {
    const adminExists = await Admin.findOne({ email: 'admin@svnglobal.com' });
    
    if (!adminExists) {
      const admin = await Admin.create({
        email: 'admin@svnglobal.com',
        password: 'admin123',
        role: 'admin',
        isActive: true,
      });
      console.log('');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('✅ Default admin user created automatically!');
      console.log('📧 Email: admin@svnglobal.com');
      console.log('🔑 Password: admin123');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('⚠️  Please change the password after first login!');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('');
    } else {
      console.log('ℹ️  Admin user already exists');
    }
  } catch (error) {
    console.error('⚠️  Error checking/creating default admin:', error.message);
    console.error('You can create an admin manually using: npm run create-admin');
  }
};

const PORT = process.env.PORT || 3001;

console.log('');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('🚀 Starting SVN Global Backend Server');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`📍 Port: ${PORT}`);
console.log(`🔗 MongoDB URI: ${process.env.MONGODB_URI ? '✅ Set' : '❌ NOT SET'}`);
console.log(`🔐 JWT Secret: ${process.env.JWT_SECRET ? '✅ Set' : '❌ NOT SET'}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');

connectDB()
  .then(async () => {
    await createDefaultAdminIfNeeded();
    
    const server = app.listen(PORT, '0.0.0.0', () => {
      console.log('');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log(`✅✅✅ SERVER RUNNING ON PORT ${PORT} ✅✅✅`);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log(`🌐 API Base: http://localhost:${PORT}/api`);
      console.log(`🏥 Health: http://localhost:${PORT}/api/health`);
      console.log(`🔐 Admin Login: http://localhost:${PORT}/api/admin/login`);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('');
      console.log('✅ Server is ready to accept requests!');
      console.log('');
    });

    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        console.error(`❌ Port ${PORT} is already in use!`);
        console.error('Please stop the process using this port or change PORT in .env');
      } else {
        console.error('❌ Server error:', error.message);
      }
      process.exit(1);
    });
  })
  .catch((error) => {
    console.error('');
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.error('❌ FAILED TO START SERVER');
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.error('Error:', error.message);
    console.error('');
    if (error.message.includes('MONGODB') || error.message.includes('connection')) {
      console.error('MongoDB Connection Issue Detected!');
      console.error('');
      console.error('Please check:');
      console.error('1. ✅ Your MONGODB_URI in backend/.env is correct');
      console.error('2. ✅ MongoDB service is running (check with: Get-Service MongoDB)');
      console.error('3. ✅ MongoDB is accessible on localhost:27017');
      console.error('');
      console.error('Test connection with: node test-connection.js');
      console.error('');
    }
    process.exit(1);
  });
