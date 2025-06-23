import React, {useEffect, useState} from "react";
import { rightArrow } from "../../../assets/images";
import { genres } from "../../../assets/listOfGenres";
import { Link } from "react-router-dom";



const menuItems= ['Best Sellers', 'Bundles', 'Non-fiction', 'Fiction', 'Manga', 'French Titles'];
const subMenus = [
        ['Best Seller 1', 'Best Seller 2'],
        ['Bundle 1', 'Bundle 2'],
        ['Non-fiction 1', 'Non-fiction 2'],
        ['Fiction 1', 'Fiction 2'],
        ['Manga 1', 'Manga 2'],
        ['French Title 1', 'French Title 2']
    ];

export default function Menu({bol}){


    const [index, setIndex] = useState(null);

    const handleBack= () => setIndex(null) ;
    
    
    return (
        
        <div 
            className={`bg-white mt-18 w-[300px] h-screen fixed left-0 z-50  transition-transform duration-300   
            ${bol ? "translate-x-0 " : "-translate-x-full"}`} 
        >
            
            {menuItems.map((item, i) => (
                    <div key={i}>             
                        <Link to={`/store/${i}`} 
                        className="flex text-[18px] my-4 pl-6 py-3 text-left w-full justify-between font-serif hover:bg-gray-300 cursor-pointer ease-in-out"
                        onClick={() => setIndex(i)}                    > 
                        {item} 
                        <img src={rightArrow} alt="rightArrow" className="w-8 h-7"/>
                        </Link>
                    </div>
                ))}
           
            
        </div>
    );
}