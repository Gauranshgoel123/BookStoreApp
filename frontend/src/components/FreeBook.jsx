import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import Cards from "./Cards";

function FreeBook() {
  
//use backend to fetch data using getAPI
const [book,setBook] = useState([]);
useEffect(()=>{
  const getBook = async () => {
    try {
      const res=await axios.get("http://localhost:4001/book");
      const filterData = res.data.filter((data)=>data.category === "Free");
      console.log(filterData);
      setBook(filterData);
    } catch (error) {
      console.log(error);
    }
  };
  getBook(); 
}, []);


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 500,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>
        <div>
            <Slider {...settings}>
              {book.map((item)=>(
                <Cards item={item} key={item.id}/>
              ))}   
            </Slider>
        </div>
    </div>
    </>
  )
}

export default FreeBook;
