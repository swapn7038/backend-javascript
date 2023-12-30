// video schema

import mongoose, {Schema, mongoose} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

// schema creation
const videoSchema = new Schema({
    videoFile: {
        type: String, // cloudinary url
        required: true
    },

    thumbnail: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }, 

    duration:{
        type: Number,
        required: true
    },

    views:{
        type: Number,
        default: 0
    },

    isPublish: {
       type: Boolean ,
       default: true
    },

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
    
}, {
    timestamps: true
});


videoSchema.plugin(mongooseAggregatePaginate)


// model creation
const video = mongoose.model("Video", Video);

// exporting model
module.exports = video;

// https://kb.objectrocket.com/mongo-db/a-nodejs-mongoose-schema-example-1204