import React from "react";

export default function Search({bol, onClose}) {

    return (
        <div
        className={`bg-white w-full h-24 fixed top-0 left-0 z-50  transition-transform duration-300   
        ${bol ? "translate-y-0 " : "-translate-y-full"}`}
        >
            <div className="flex justify-center items-center mt-10">
                <input className="w-[550px] h-10 border rounded pl-3 " type="text" placeholder="  Search" 
                />
                <button className="ml-3 cursor-pointer text-white text-2xl" onClick={onClose}>  ✖️ </button>
            </div>

        </div>
    );
}