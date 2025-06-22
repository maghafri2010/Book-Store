import React from "react";

export default function Reset({onSwitch})
{
    return (
        <div className="flex flex-col  justify-center items-center m-24">
            <h1 className="text-4xl font-bold font-serif">Reset Your Password</h1>
            <div className="m-8  ">
                <h1 className="text-2xl">We will send you an email to reset your password</h1>
                <div className="flex flex-col m-8 items-center">
                    <input className="border rounded w-[400px] h-12 mb-10" type="text" name="" id="" placeholder="  Email" />
                    <button className="hover:opacity-80 hover:bg-black hover:text-white transition-transform ease-in-out mb-3 w-28 h-9 cursor-pointer border rounded-2xl" type="submit">Submit</button>
                    <button 
                    onClick={() => onSwitch("login")}
                    className="text-gray-700 hover:opacity-80 cursor-pointer">
                        <u>Cancel</u></button>
                </div>
                
            </div>
            
        </div>
    );
}