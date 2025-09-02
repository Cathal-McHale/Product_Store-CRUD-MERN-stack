import express from 'express';
import dotenv from 'dotenv';
import path from "path";
import { connectDB } from './config/db.js';
import Product from "./models/product.model.js";
import mongoose from 'mongoose';
import productRoutes from './routes/product.route.js';

dotenv.config();
const PORT = process.env.PORT = 5000;
const app = express();

const __dirname = path.resolve();
app.use(express.json());//accept JSON data in body
app.use("/api/products", productRoutes);

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get(/^\/.*$/, (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });

}

app.listen(5000, () => {
    connectDB();
  console.log('Server is running on at http://localhost:' + PORT);
});