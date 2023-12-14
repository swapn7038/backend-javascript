// const mongoose = require("mongoose");
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";

import {DB_NAME} from "./constants.js"

const app = express();

dotenv.config();

;( async() => {
   try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    
    app.on("error", (error) => {
        console.log("Error", error);
        throw error
    });

    app.listen(process.env.PORT, ( ) => {
        console.log(`App is listening on port number ${process.env.PORT}`);
    });

   } catch (error) {
    console.error("Error:", error);
    // throw err
   }
} )()


/*
mongoose.connect(`${process.env.MONGODB_URI}`)
.then(() => {
    console.log('Connected to db');
    // console.log(`mongo uri is ${MONGODB_URI}`);
}) 
.catch((error) => {
    console.log(`Something is wrong: ${error}`);
})

*/