import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

const seedAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/helpr_db');
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@helpr.com' });
    
    if (existingAdmin) {
      console.log('Admin user already exists:', existingAdmin.email);
      await mongoose.disconnect();
      return;
    }

    // Create admin user
    const adminUser = new User({
      email: 'admin@helpr.com',
      password: 'Admin123!', // In production, use a more secure password
      name: 'System Administrator',
      role: 'admin'
    });

    await adminUser.save();
    console.log('Admin user created successfully:');
    console.log('Email: admin@helpr.com');
    console.log('Password: Admin123!');
    console.log('Role: admin');
    console.log('\n⚠️  IMPORTANT: Change the password after first login!');

    // Create a test manager user
    const managerUser = new User({
      email: 'manager@helpr.com',
      password: 'Manager123!',
      name: 'Test Manager',
      role: 'manager'
    });

    await managerUser.save();
    console.log('\nManager user created: manager@helpr.com / Manager123!');

    // Create a test viewer user
    const viewerUser = new User({
      email: 'viewer@helpr.com',
      password: 'Viewer123!',
      name: 'Test Viewer',
      role: 'viewer'
    });

    await viewerUser.save();
    console.log('Viewer user created: viewer@helpr.com / Viewer123!');

    await mongoose.disconnect();
    console.log('\nSeed completed successfully!');
    
  } catch (error) {
    console.error('Error seeding admin user:', error);
    process.exit(1);
  }
};

// Run the seed function
seedAdmin();