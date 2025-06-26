import React from "react";
import StoreConfig from "../components/store/storeConfig";
import { genres } from "../assets/listOfGenres";
import { useParams } from "react-router-dom";
import Header from "../components/home/header/header";
import Footer from "../components/home/footer";

export default function Store()
{
    const { genreIndex } = useParams();
    const genreList = genres[genreIndex] || [];

    return(
        <div>
            <Header/>
            <StoreConfig listOfBooks={genreList} genreIndex={genreIndex}/>
            <Footer/>
        </div>
    );
}