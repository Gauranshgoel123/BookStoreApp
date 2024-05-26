import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"

//database se data fetch ya send karne me time lagega isiliye async and await use kiya hai
export const signup = async (req,res)=>{
    try {
        const {fullname,email,password} = req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists"})
        }

        //first hash the user's password before sending it to the database
        //10 short value gives pass much more secure value
        const hashpassword= await bcryptjs.hash(password,10)

        const createdUsers=new User({
            fullname:fullname,
            email:email,
            password:hashpassword
        });

        await createdUsers.save()
        res.status(201).json({message:"User created successfully",user:
        {
            _id:createdUsers._id,
            fullname:createdUsers.fullname,
            email:createdUsers.email
        }
    })

    } catch (error) {
        console.log("Error"+error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}

//for login
export const login = async (req,res)=>{
    try {
        //password is body se jo ara hai
        //user.password is jo db me stored hai
        //isiliye we compare both the password from body and database to validate login credentials
        const {email,password}=req.body;
        //find user from the db and store in user variable
        const user = await User.findOne({email});
        const isMatch= await bcryptjs.compare(password,user.password);
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid username or password"});
        }else{
            res.status(200).json({message:"Login Successful",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("Error:" + error.message)
        res.status(500).json({message:"Internal Server error"})   
    }
}