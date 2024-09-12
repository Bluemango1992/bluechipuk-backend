// api/db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log('MongoDB is already connected');
    return mongoose.connection;
  }

  // Use environment variable to choose the URI
  const mongoUri = process.env.MONGODB_URI;

  try {
    const connection = await mongoose.connect(mongoUri);
    console.log(`Connected to MongoDB: ${connection.connection.host}`);
    return connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

export default connectToDatabase;