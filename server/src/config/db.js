import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/indo_japan';
    const conn = await mongoose.connect(mongoUri);
    console.log(`[MongoDB] Connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[MongoDB] Connection error: ${error.message}`);
    // Don't exit process in development if local MongoDB isn't running yet, allowing API mock / development
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
};
