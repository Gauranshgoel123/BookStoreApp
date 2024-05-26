import express from "express";
import { login, signup } from "../controller/user.controller.js";


const router=express.Router()

//define route
//we are using post request kyuki data db me bhej rahe hai
router.post("/signup",signup);
router.post("/login",login);


export default router;