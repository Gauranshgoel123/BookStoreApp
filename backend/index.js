import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

import cors from "cors";

const app = express()

//use cors to remove cors error encountered while connecting frontend woth backend
app.use(cors());
//data sent will be parsed to json format to avoid "cannot destructure error"
app.use(express.json())

dotenv.config()

const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI

//connect to mongodb
try {
 mongoose.connect(URI,{
  useNewUrlParser: true,    //because we are connected via local
  useUnifiedTopology: true, //because we are connected via local
 });
 console.log("Connected to mongodb");
} catch (error) {
  console.log("Error: ",error);
}

//defining routes
app.use("/book",bookRoute)

app.use("/user",userRoute) //route for signup

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`)
})