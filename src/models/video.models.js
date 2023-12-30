// video schema

import mongoose, {Schema, mongo} from "mongoose";

// schema creation
const Video = new Schema({
    title:{
        type:String,
        require:true,
    }, 

    descriotion:{
        type:String,
        required:true,
    }
});

// model creation
const video = mongoose.model("Vide", Video);

// exporting model
module.exports = video;

// https://kb.objectrocket.com/mongo-db/a-nodejs-mongoose-schema-example-1204