import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import movieRoutes from './routes/movieRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
app.use(cors({ origin: '*', methods: ['GET', 'POST'] }));
app.use(express.json());

app.use(movieRoutes);
app.use(authRoutes);

const port = process.env.PORT || 5000;

connectDB(process.env.MONGODB_URI);

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});