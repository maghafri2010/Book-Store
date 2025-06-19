import React from "react";

export default function Footer(){

    return (
        <div className="bg-[#B21E2E] text-white">
            <div className="border-b-1 borde-white p-24 text-center">
                <h1 className="text-8xl font-serif">We read books like air, filling the spaces inside us, making us whole again.</h1>
            </div>
            <div className="flex">
                <div className="border-r-1 border-white p-6">
                <p>Subscribe to our newsletter for weekly book excerpts, exclusive literary content, and special book-related offers.</p>
                <div className="p-4">
                    <input type="text" placeholder="  Email Address"  className="w-96 h-10 rounded bg-red-900"/>
                    <button className="rounded bg-red-950 h-10 w-28 cursor-pointer hover:opacity-80 transition-transform ease-in-out">Subscribe</button>
                </div>
                <p className="text-black">By signing uup, you agree to our <u><a href="">Privacy Policy.</a></u></p>
            </div>
            <div className="flex p-6 ">
                <ul className="p-5">
                    <li><b>BOOKSTORE</b></li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>F.A.Q</li>
                </ul>
                <ul className="p-5 w-36">
                    <li><b>Legal</b></li>
                    <li>Return Policy</li>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                </ul>
                <ul className="p-5">
                    <li><b>Socials</b></li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Whatssap</li>
                </ul>
                <ul className="p-5 ml-6">
                    <li className="mb-3"><b>Est. 2019 - 2025</b></li>
                    <li>Morocco's leading online bookstore, we bring you <br />On Demand, hand-graded books, delivered to your doorstep.</li>
                </ul>
            </div>
            </div>
        </div>
    );
}