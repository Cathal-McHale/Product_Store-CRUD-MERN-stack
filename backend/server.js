import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from "./models/product.model.js";
dotenv.config();

const app = express();

app.use(express.json());//accept JSON data in body
app.post('/api/products', async (req, res) => {
    const product = req.body;//user sends data

    if(!product.name||!product.price||!product.image||!product.description){
        return res.status(400).json({message: "Please fill all the fields"});
    }

    const newProduct = new Product(product);

    try{
        await newProduct.save();
        res.status(201).json(newProduct);
    }catch(error){
        res.status(500).json({message: "Server error"});
    }
});

app.delete('/api/products/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

app.put('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const product = await Product.findByIdAndUpdate(id, updates, { new: true });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

//console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    connectDB();
  console.log('Server is running on at http://localhost:5000');
});