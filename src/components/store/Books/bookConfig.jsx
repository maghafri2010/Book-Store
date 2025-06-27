import React, { useState } from "react";
import { cashOn, freeShipping, onDemand, support } from "../../../assets/images";
import Categories from "../../home/categories";
import { genresTitle } from "../../../pages/home";
import SliderImage from "../../home/sliderImage";
import booksData from "../../../assets/listBooks";
const about = [
{
    img: freeShipping  ,
    title: "Free Shipping"  ,
    text: "When you purchase a book bundle, The Shipping is on us! Enjoy free delivery."
},
{
    img: cashOn ,
    title: "Cash On delivery" ,
    text: "Payment is only processed upon receipt of your order and confirmation of its quality."
},
{
    img: onDemand ,
    title: "On-Demand"  ,
    text: "Let us know your desired title, and we will fulfill your request with our On-Demand Services."
},
{
    img: support ,
    title: "Support Center"  ,
    text: "We have a dedicated 24/7 team, available to address any inquiries you may have."
},
    
]

export default function BookConfig({book})
{
    
    const [item, setItem] = useState(0);

    const addItem = () => {
        if (item < 99)
            setItem(prev => prev + 1);
        
    }
    const removeItem = () => {
        if (item > 0)
            setItem(prev => prev - 1);   
    }

    const addToCart = () => {
        
    }
        
    
    
    return (
        <>
        <div className="flex justify-center mt-32">
            <div className="mr-56 w-128 h-150 flex justify-center ">
                <img src={book.image} alt={book.name} />
            </div>
            <div className="">
                <h2 className=" text-gray-500 ">{book.author}</h2>
                <h1 className="text-5xl font-bold w-[400px] mb-14  ">{book.name}</h1>
                <h2 className="text-2xl">Free Shipping</h2>
                <p className="font-bold text-2xl mt-2 mb-10"><s>${+book.price + 7},00</s>  ${book.price},99 </p>
                <div className="flex justify-between items-center w-[300px]">
                    <button className="cursor-pointer hover:opacity-80 transition-all ease-in-out duration-300 p-2 text-2xl" onClick={addItem}>➕ </button>
                    <p>{item}</p>
                    <button className="cursor-pointer hover:opacity-80 transition-all ease-in-out duration-300 p-2 text-2xl" onClick={removeItem}>➖ </button>
                </div>
                <button 
                className="border cursor-pointer hover:text-black hover:bg-white bg-black text-white transition-all ease-in-out duration-700 rounded w-[300px] py-2 mb-4"
                >Add to cart
                </button>
                <p className=" text-wrap w-[350px]">{book.description}</p>
            </div>

        </div>
        <div className="flex flex-col justify-center text-center mt-20">
            <h1 className="text-4xl mb-4">More about us 🏠</h1>
            <p>We're here to cater to your reading desires. Just let us know the book you want,<br /> and we'll make it available for you. Our goal is to ensure your complete satisfaction. <br /> We're not just an ordinary bookstore; we're like family for book lovers. ❤️</p>
        </div>
        <div className="flex m-20 justify-center">
            {about.map((div, i) =>
            <div className=" bg-gray-200 m-2 flex flex-col justify-center items-center text-center rounded-[10px] w-[350px] ">
                <img className="w-16 h-16 my-4" src={div.img}  />
                <h1 className="text-2xl mb-2">{div.title}</h1>
                <p className="mb-4">{div.text}</p>
            </div>
            )}
        </div>
        <Categories />
        <SliderImage books={booksData.fictionBooks} title={genresTitle[0]} i={0} />
        <SliderImage books={booksData.nonFictionBooks} title={genresTitle[1]} i={1} />
        <SliderImage books={booksData.springBooks} title={genresTitle[2]} i={2}/>
        <SliderImage books={booksData.mangaBooks} title={genresTitle[3]} i={3}/>

        </>
    );
}