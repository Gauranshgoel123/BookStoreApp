import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'


function Logout() {

    const [authUser,setAuthUser]=useAuth()
    const handleLogout= () => {
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users");
            toast.success('Logged out successful');
            setTimeout(()=> {
                window.location.reload();
            },2000);
            
        } catch (error) {
            toast.error("Error: " + error.message)
            setTimeout(()=>{},2000);
        }
    }

  return (
    <div>
        <button className="bg-orange-600 text-white text-lg rounded-md cursor-pointer hover:bg-orange-800 duration-500 btn"
        onClick={handleLogout} >
            Logout
        </button>
    </div>
  )
}

export default Logout
