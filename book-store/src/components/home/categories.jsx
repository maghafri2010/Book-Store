import React from "react";
import { categories } from "../../assets/images";

export default function Categories(){
    return (
        <div className="flex justify-center items-center  text-center text-1xl m-4   ">
        {categories.map((cat, index) => (
          <div key={index} className="text-center w-38 m-12  ">
            <img src={cat.icon} alt={cat.label} className="mb-4" />
            <a href="" className="text-[18px] hover:underline">{cat.label} →</a>
          </div>
        ))}
      </div>
    );
};