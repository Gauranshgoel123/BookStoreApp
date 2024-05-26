import mongoose from "mongoose";
//first create schema for db accroding to the json data structure
const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String,
})
//now create model from schema
//Book is the name of collection created in mongodb compass
//mongo db adds s at the end of collection name by default
const Book = mongoose.model("Book",bookSchema);

export default Book;
