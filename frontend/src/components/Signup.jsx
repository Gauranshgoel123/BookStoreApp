import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginimage from './../../public/signupbg.jpg';
import Login from './Login';
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from 'react-hot-toast';

function Signup() {

const location=useLocation()
const from=location.state?.from?.pathname || "/"
const navigate=useNavigate()

  const backgroundStyle = {
    backgroundImage: `url(${loginimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensure the background covers the entire screen height
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

//backend post request integration for signup
  const onSubmit = async (data)=>{
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:4001/user/signup",userInfo).then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Signup successful');
        navigate(from,{replace:true});
        
      }
      //store user data from res in local storage
      localStorage.setItem("Users",JSON.stringify(res.data.user))
    }).catch((err)=>{
      if(err.response){
        console.log(err)
        toast.error("Error: " + err.response.data.message);
      }
      
    })
  };

  return (
    <>
    <div style={backgroundStyle}>
      <div className='flex items-center justify-center h-full'>
        <div  className="modal-box bg-blue-950 mt-32 p-12 ml-4 border">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to= "/"className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
        
          <h3 className="font-bold text-lg">SignUp</h3>

          {/* Name */}
          <div className='mt-4 space-y-2'>
            <span>Name</span>
            <br />
            <input type="text"
              className='w-80 px-3 py-1 border rounded-md outline-none'
              placeholder='Enter your full name'
              {...register("fullname", { required: true })}/>
              <br />
              {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
          </div>

          {/* Email */}
          <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br />
            <input type="email"
              className='w-80 px-3 py-1 border rounded-md outline-none'
              placeholder='Enter your email id'
              {...register("email", { required: true })} />
              <br />
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          {/* Password */}
          <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br />
            <input type="password"
              className='w-80 px-3 py-1 border rounded-md outline-none'
              placeholder='Enter your password'
              {...register("password", { required: true })}/>
                <br />
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          {/* Button */}
          <div className='flex justify-around mt-4 '>
            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-600 duration-200'>SignUp</button>
            <p className="text-xl">
                  Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
          </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Signup;
