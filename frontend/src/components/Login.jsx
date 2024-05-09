import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)


  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
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
