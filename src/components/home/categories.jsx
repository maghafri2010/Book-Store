import React from "react";
import { categories } from "../../assets/images";
import { Link } from "react-router-dom";


export default function Categories(){
    return (
        <div className="flex justify-center items-center  text-center text-1xl m-4   ">
        {categories.map((cat, index) => (
          <div key={index} className="text-center w-38 m-12  ">
            <img src={cat.icon} alt={cat.label} className="mb-4" />
            <Link to={`/store/${index}`}  className="text-[18px] hover:underline">{cat.label} →</Link>
          </div>
        ))}
      </div>
    );
};