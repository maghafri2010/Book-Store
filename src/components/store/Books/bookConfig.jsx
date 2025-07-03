import React, { useState } from "react";
import { cashOn, freeShipping, onDemand, support } from "../../../assets/images";
import Categories from "../../home/categories";
import { genresTitle } from "../../../pages/home";
import SliderImage from "../../home/sliderImage";
import booksData from "../../../assets/listOfGenres";
import About from "../../utility/about";

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
        
        <About />

        <Categories />
        <SliderImage books={booksData.fiction} title={genresTitle[0]} i={0} genreIndex={0} />
        <SliderImage books={booksData.nonFiction} title={genresTitle[1]} i={1} genreIndex={1} />
        <SliderImage books={booksData.manga} title={genresTitle[2]} i={2} genreIndex={2}/>
        <SliderImage books={booksData.frenchTitles} title={genresTitle[3]} i={3} genreIndex={3}/>

        </>
    );
}