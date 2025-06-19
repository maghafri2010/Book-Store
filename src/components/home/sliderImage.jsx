import React, {use, useState} from "react";
import booksData from "../../assets/listBooks";
import { rightArrow, leftArrow, sale } from "../../assets/images";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
};





const genresTitle = ['Fiction Team Choice 🔮🪐', 'Non-Fiction Team Choice 🎖️', 'Spring: A Treasury of Bestseller Timeless Classics 📜', 'Best of Manga Bundles 🇯🇵' ];

export default function SliderImage({books = booksData.fictionBooks, title}) {
   
    return( 
        <div className="flex flex-col mt-12">
            <h1 className="text-center text-4xl">{title}</h1>


            <Slider {...settings} className="w-full max-x-6-xl mt-12">
                {books.map((book, i) => (
                    <div 
                    key={i} 
                    className=" flex flex-col items-center justify-center h-72 hover:underline cursor-pointer "
                    > 
                    <img 
                    className="w-48 h-52 object-cover mb-2 hover:opacity-90 cursor-pointer ease-in-out duration-500" 
                    src={book.image} 
                    alt={book.name} 
                    />
                    <img className="w-8" src={sale} alt="" />
                    <p className="">{book.name} <br /> By: {book.author} <br />  {book.prix}.00$</p>
                    
                    </div>
                ))}
        </Slider>
        <button className="mt-12 border border-gray-400 w-[10%] h-10 rounded-2xl mx-auto hover:text-white hover:bg-black ease-in-out duration-700 cursor-pointer mb-12 ">View All</button>
        </div>
    );
}

