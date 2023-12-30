import { Router } from "express";
import connectDB from "./db/index.js";

import dotenv from "dotenv"

// loads env var
dotenv.config({
    path: "./.env"
})

// after con listening to server
connectDB()
.then(process.env.PORT || 8000, () => {
    console.log(`Server is running on ${process.env.PORT}`);
})
.catch((error) => {
    console.log("Error", error);
})
