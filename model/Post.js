import mongoose from "mongoose";


const Post = mongoose.Schema({
    title:{type:String, require:true},
    description:{type:String, require:true},
    status:{type:String, require:true},
    price:{type:Number, require:true},
    createdAt:{type:Date, default:Date.now},
})


export default mongoose.model("Post", Post)