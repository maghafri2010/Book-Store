import {React, useState} from "react";
import background1 from "../../assets/listBackgrounds";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { leftArrow, rightArrow } from "../../assets/images"; 
/*
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default function SpringSale() {
  return (
    <Slider {...settings}>
      {background1.map((bg, i) => (
        <div
          key={i}
          className="relative w-full h-72 flex items-center justify-center"
          style={{
            backgroundImage: `url(${bg.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "600px"
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
            <h1 className="text-6xl font-bold mb-7 text-white">{bg.name} ☀️🐝</h1>
            <p className="text-3xl mb-8 text-white">{bg.description}</p>
            <button className="text-3xl bg-white p-4 rounded-2xl hover:translate-y-2 ease-in-out duration-500">
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
}
*/


export default function SpringSale(array){

  const [index,setIndex] = useState(0);

  const goToNext = () => {
    setIndex((prevIndex) => prevIndex !== background1.length - 1 ? prevIndex + 1 : 0 );
  };
  const goToPrev = () => {
    setIndex((prevIndex) => prevIndex !== 0 ? prevIndex - 1 : background1.length - 1);
  };

  const bg = background1[index];
  return (
    <div className="overflow-hidden relative">
    <div
    
    className=" h-150 flex flex-col justify-center items-center transition-transform ease-in-out duration-500 "
    style={{backgroundImage: `url(${bg.img})`, transform: `translateX(-${index * 100} % )`}}
    >
     
     <div key={index} className="">
      <h1 className="text-white mb-15 text-6xl font-bold"         
      style={{ WebkitTextStroke: "2px black" }}
      >{bg.name}
      </h1>
      <p className="text-white text- text-2xl max-w-xl font-bold text-[18px] "          
      >{bg.description}</p>
      </div>
      <button className="bg-white border-2  border-black px-5 py-2 rounded-2xl cursor-pointer hover:opacity-80 transition duration-700 ease-in-out hover:translate-y-2 hover:bg-black hover:text-white hover:border-white "     
      >Shop Now</button>
      
    
    </div>
  
      <div className="flex items-center justify-center mt-2 border-b-1 border-gray-400">
        <button className="h-8 w-8 cursor-pointer transition ease-in-out hover:opacity-80" onClick={goToPrev}> <img src={leftArrow}  /></button>
        {background1.map((_, i) => (

        <span onClick={() => setIndex(i)} className={`border-1 p-1 m-1 borderblack rounded-2xl cursor-pointer hover:opacity-90 transition ease-in-out hover:bg-gray-400 ${index === i ? "bg-black" : "bg-amber-100" }`}></span>
      ))}

        <button className="h-8 w-8 cursor-pointer transition ease-in-out hover:opacity-80" onClick={goToNext}><img src={rightArrow} alt="" /></button>

      </div>
      </div>

  )
}