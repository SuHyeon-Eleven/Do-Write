const mongoose = require("mongoose");

const {Schema} = mongoose;
const postsSchema = new Schema({
    postId:{
        type: Number,
        unique: true,
        required: true,
    },
    postAuthor:{
        type: String,
        required: true,
    },
    postTitle:{
        type: String,
        required: true,
    },
    postContent: {
        type:String
    },
    postPassword: {
        type: Number,
        required: true
    },
    postDate: {
        type : String
    }
})

module.exports = mongoose.model("posts", postsSchema);