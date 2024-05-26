import Book from "../model/book.model.js";

//database se data fetch ya send karne me time lagega isiliye async and await use kiya hai
//200 success 500 internal server error
export const getBook=async(req,res)=>{
    try {
        const book= await Book.find()
        res.status(200).json(book)
    } catch (error) {
        console.log("Error: ",error)
        res.status(500).json(error)
    }
}