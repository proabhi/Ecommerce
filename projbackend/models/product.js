const mongoose= require("mongoose");
const{ObjectId}=mongoose.Schema;

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:32
    },
    description:{
        type:String,
        trim:true,
        required:true,
        maxlength:1000
    },
    price:{
        type:Number,
        required:true,
        maxlength:32,
        trim:true
    },
    category:{
        type:ObjectId,
        refrence:"category",
        required:true

    },

    stock:{
        type:Number
    },

    sold:{
        type:Number,
        default:0
    },

    photo:{
        data:Buffer,
        contentType:String
    }


},{timestamp:true})






module.exports=mongoose.model("product",productSchema)