import React from "react";
import { Bundles } from "../../../assets/images";
import { Link } from "react-router-dom";



export default function ShopBar({bol})
{

    return (
    <div
        className={`bg-white w-[300px] mt-17 h-full fixed right-0 z-50  transition-transform duration-300   
        ${bol ? "translate-x-0 " : "translate-x-full"}`}
        >
            <div className="flex flex-col justify-center items-center mt-10 mb-40">
                <h1 className="text-2xl mb-4">Your cart is empty</h1>
                <Link to={`/store/${0}`} 
                className="border rounded-2xl text-center p-3 bg-black text-white mb-4 w-48 h-14 cursor-pointer duration-900 hover:opacity-80 transition-transform"
                >Continue Shopping</Link>
                <h1 className="text-[18px] mb-10">Have an account?</h1>
                <p><Link to="/account"><u>Log in</u></Link> to check out faster</p>
            </div>
            <div className="hover:opacity-80 hover:translate-x-2 transition-transform ease-in-out duration-700 cursor-pointer">
                <img className=" ml-10 h-64 mb-10" src={Bundles} alt="bundles" />
                <Link to={`/store/${5}`} className=" ml-6 mt-10 text-[16px]" href="">Best Sellers --{'>'}</Link>
            </div>
                
        </div>
    );
}