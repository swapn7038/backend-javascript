import mongoose from "mongoose";
import DB_NAME from "../constants.js";


// db connection
const connectDB = async () => {
    try {
        console.log("mongo uri :: " + process.env.MONGODB_URI);
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    //    console.log(connectionInstance.Error.messages)
       console.log(`\n MongoDB Connected !! DB Host : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;