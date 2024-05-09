import React from 'react'

function Cards({item}) {
  return (
    <>
    <div className='mt-4 p-3 '> 
    <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200 ">
  <figure><img src={item.image} alt="Books" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className="badge badge-outline cursor-pointer px-3 py-3 hover:bg-pink-500 hover:text-black">Buy now!</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
