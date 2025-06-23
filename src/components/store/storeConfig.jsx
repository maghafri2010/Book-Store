import React from "react";

export default function StoreConfig({listOfBooks})
{


    return (
        <div>
            <h1 className="text-center text-4xl font-black my-10 "></h1>
            
            <div className="flex justify-center items-center">
                <h2 className="mr-200 text-gray-400 text-2xl">Results found: {listOfBooks.length}</h2>
                <p className="mr-4">Sort by</p>
                <input className="border" type="text" />
            </div>
            <div className="flex flex-wrap my-24 justify-center">

            {listOfBooks.map((book, i) => (
            <div className="flex flex-col border w-80 h-140 m-4 ">
                <img 
                className=" h-[450px]" 
                src={book.image} 
                alt={book.name} />
                <h2 className="text-gray-500 ml-4 mb-4">{book.author}</h2>
                <p className="font-bold border-b ml-4 mr-4">{book.name}</p>
                <p className="font-bold text-[19px] ml-4">{book.price}</p>
            </div>
            ))}
            
            </div>
        </div>
    );
}