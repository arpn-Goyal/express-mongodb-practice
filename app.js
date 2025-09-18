import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

// MongoDB connection
mongoose.connect(process.env.Mongo_URI)
.then(() => console.log('✅ MongoDB Connected...'))
.catch((err) => console.log(`❌ DB Connection Error: ${err}`));


app.get('/', (req, res) => {
    res.send('Server this side');
})

const Port = process.env.PORT || 4000;
app.listen(process.env.PORT, () => {
    console.log(`Servering is running on http://localhost:${Port}`)
})

