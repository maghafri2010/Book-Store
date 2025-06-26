import React from "react";
import Header from "../../home/header/header";
import Footer from "../../home/footer";
import { useParams } from "react-router-dom";
import { genres } from "../../../assets/listOfGenres";
import BookConfig from "./bookConfig";

export default function Book()
{
    const { genreIndex, bookIndex } = useParams();
    const book = genres[genreIndex]?.[bookIndex];
    return (
        <div>
            <Header/>
            <BookConfig book={book} />
            <Footer/>
        </div>
    );
}