import express from "express";
import { MONGOURI, PORT } from "./config.js";
import mongoose from "mongoose";

import bookRouter from './routes/bookRoute.js'
import cors from 'cors'

const app = express();

// Middleware for parsing request body
app.use(express.json());

app.use(cors())

//routes middleware
app.use('/api/books', bookRouter)



// Routing to get resources from server

//Middleware for handling CORS policy
// Option 1: Allow all origins with default of cors(*)
//option 2: Allow custom origins

// app.use(
//     cors({
//         origin: 'http://localhost:5173',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// )














mongoose
    .connect(MONGOURI)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening on port : ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
