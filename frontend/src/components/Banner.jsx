import React from 'react'
import banner from './../../public/Banner.png'
function Banner() {

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-10 flex flex-col md:flex-row my-14'>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-6 md:mt-32'>
          <div className='space-y-6'>
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                et totam. Tempora amet atque expedita, quae corrupti totam sed
                pariatur corporis at veniam est voluptas animi!
            </p>
            {/* email */}
            <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          {/* chatpopup */}
          <div className="mt-3 chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="chat-bubble mt-5">Relax! We don't send unnecessary spams🤖</div>
        </div>
        </div>
        <div className='w-full md:w-1/2 order-1'>
          <img src={banner} className='w-95 h-95 md:ml-11'  alt="" />
        </div>
    </div>
    </>
  )
}

export default Banner
