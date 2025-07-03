import React from "react";
import { cashOn, freeShipping, onDemand, support } from "../../assets/images";

const about = [
{
    img: freeShipping  ,
    title: "Free Shipping"  ,
    text: "When you purchase a book bundle, The Shipping is on us! Enjoy free delivery."
},
{
    img: cashOn ,
    title: "Cash On delivery" ,
    text: "Payment is only processed upon receipt of your order and confirmation of its quality."
},
{
    img: onDemand ,
    title: "On-Demand"  ,
    text: "Let us know your desired title, and we will fulfill your request with our On-Demand Services."
},
{
    img: support ,
    title: "Support Center"  ,
    text: "We have a dedicated 24/7 team, available to address any inquiries you may have."
},
    
]

export default function About ()
{
    return (
        <>
        <div className="flex flex-col justify-center text-center mt-20">
            <h1 className="text-4xl mb-4">More about us 🏠</h1>
            <p>We're here to cater to your reading desires. Just let us know the book you want,<br /> and we'll make it available for you. Our goal is to ensure your complete satisfaction. <br /> We're not just an ordinary bookstore; we're like family for book lovers. ❤️</p>
        </div>
        <div className="flex m-20 justify-center">
            {about.map((div, i) =>
            <div className=" bg-gray-200 m-2 flex flex-col justify-center items-center text-center rounded-[10px] w-[350px] ">
                <img className="w-16 h-16 my-4" src={div.img}  />
                <h1 className="text-2xl mb-2">{div.title}</h1>
                <p className="mb-4">{div.text}</p>
            </div>
            )}
        </div>
        </>
    )
}