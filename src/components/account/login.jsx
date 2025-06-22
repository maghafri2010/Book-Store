import React from "react";

export default function Login({onSwitch})
{
    return (
        <div className=" flex flex-col items-center justify-center  m-24">
            <h1 className="text-4xl font-bold font-serif">Login</h1>
            <div className="flex flex-col mt-10">
                <input className="m-4 border rounded w-[250px] h-10" type="text" placeholder="  Email"/>
                <input className="mx-4 border rounded w-[250px] h-10" type="password" placeholder="  Password" />
            </div>
          
            <button 
            onClick={() => onSwitch("reset")}
            className="hover:opacity-80 cursor-pointer mb-10">
                <u>Forgot your password?</u></button>
     
                
                <button 
                onClick={() => onSwitch("")}
                className=" mb-4 hover:opacity-80 hover:bg-black hover:text-white transition-transform ease-in-out w-32 h-9 cursor-pointer border rounded-2xl "
                >Sign in</button>
                <button 
                onClick={() => onSwitch("create")}
                className="hover:opacity-80 hover:bg-black hover:text-white transition-transform ease-in-out w-32 h-9 cursor-pointer border rounded-2xl "
                >Create Account</button>
        </div>
    );
}