import React from "react";

export default function CreateAccount()
{
    return (

        <div className=" m-24 flex flex-col items-center justify-center">

            <h1 className="text-4xl font-bold font-serif">Create Account</h1>
            <div className="flex flex-col mt-10">
                <input className=" border rounded w-[260px] h-10 m-4" type="text" placeholder="  First Name" />
                <input className=" border rounded w-[260px] h-10 m-4" type="text" placeholder="  Last Name"/>
                <input className=" border rounded w-[260px] h-10 m-4" type="text" placeholder="  Email"/>
                <input className=" border rounded w-[260px] h-10 m-4" type="password" placeholder="  Password" />
            </div>
            <button className="hover:opacity-80 hover:bg-black hover:text-white transition-transform ease-in-out w-28 h-9 cursor-pointer border rounded ">Create</button>
        </div>
    );
}