import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'


function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  //backend post request integration for login
  const onSubmit = async (data)=>{
    const userInfo={
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:4001/user/login",userInfo).then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Logged in Successfully!');
        //for automatical closing of modal once logged in
        document.getElementById("my_modal_3").close();
          //set timer for msg
        setTimeout(()=> {
          window.location.reload();
          //store user data from res in local storage
          localStorage.setItem("Users",JSON.stringify(res.data.user))
        },1000);
      }
    }).catch((err)=>{
      if(err.response){
        console.log(err)
        toast.error("Error: " + err.response.data.message);
        setTimeout(()=>{},2000);
      }
      
    })
  };

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={()=>document.getElementById("my_modal_3").close()}>
                ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
            <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input type="email"
                className='w-80 px-3 py-1 border rounded-md outline-none'
                placeholder='Enter your email id' 
                {...register("email", { required: true })}/>
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
                 <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-600 duration-200'>Login</button>
                 <p>Not Registered?
                    <Link to='/signup' className='underline text-blue-500 cursor-pointer'>Signup</Link>{" "}
                 </p>
            </div>
            </form>
            </div>
        </dialog>
    </div>
  )
}

export default Login
