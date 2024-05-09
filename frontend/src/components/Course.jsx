import React from 'react'
import Cards from './Cards';
import list from '../../public/list.json'
import {Link} from 'react-router-dom'

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-16 px-10 '>
        <div className="mt-16 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl mt-20">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! ❤️</span>
          </h1>
          <p className="mt-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to={"/"}><button className='bg-pink-500 text-white px-4 py-2 mt-6 rounded-lg hover:bg-pink-700 duration-300 cursor-pointer' >
            Back
          </button>
          </Link>
          
        </div>
        

    </div>
    <div className=" m-3 md:ml-12 mt-4 grid grid-cols-1 md:grid-cols-3">
            {list.map((item) => (
            <Cards item={item} key={item.id}/>
            ))}
        </div>
    </>
  );
}

export default Course
