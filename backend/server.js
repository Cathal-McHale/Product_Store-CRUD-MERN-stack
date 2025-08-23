import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from "./models/product.model.js";
import mongoose from 'mongoose';
import productRoutes from './routes/product.route.js';

dotenv.config();
const PORT = process.env.PORT = 5000;
const app = express();

app.use(express.json());//accept JSON data in body
app.use("/api/products", productRoutes);

app.listen(5000, () => {
    connectDB();
  console.log('Server is running on at' + PORT);
});