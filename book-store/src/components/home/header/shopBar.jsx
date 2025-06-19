import React from "react";



export default function ShopBar({bol})
{

    return (
    <div
        className={`bg-white w-[300px] mt-17 h-full fixed right-0 z-50  transition-transform duration-300   
        ${bol ? "translate-x-0 " : "translate-x-full"}`}
        >
            <div className="flex justify-center items-center mt-10">
                <h1></h1>
                <button>Continue Shopping</button>
                <h1>Have an account?</h1>
                <p><a href=""><u>Log in</u></a> to check out faster</p>
                <a href="">Bundles of the month</a>
            </div>

        </div>
    );
}