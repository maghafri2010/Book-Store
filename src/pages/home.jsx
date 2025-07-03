import Categories from "../components/home/categories";
import Header from "../components/home/header/header";
import SpringSale from "../components/home/springSale";
import SliderImage from "../components/home/sliderImage";
import Footer from "../components/home/footer";
import booksData from "../assets/listOfGenres";
import { useParams } from "react-router-dom";
import About from "../components/utility/about";

export const genresTitle = [
  "Fiction Team Choice 🔮🪐",
  "Non-Fiction Team Choice 🎖️",
  "Best of Manga Bundles 🇯🇵",
  "Best of the Bundles 📜"
];


export default function Home(){
  
  const { genreIndex } = useParams();
    return(
        <>
        <Header />
        <SpringSale />
        <Categories />

        <SliderImage books={booksData.fiction} title={genresTitle[0]} i={0} genreIndex={0}  />
        <SliderImage books={booksData.nonFiction} title={genresTitle[1]} i={1} genreIndex={1}  />
        <SliderImage books={booksData.manga} title={genresTitle[2]} i={2} genreIndex={2}  />
        <SliderImage books={booksData.frenchTitles} title={genresTitle[3]} i={3} genreIndex={3} />

        <About />
        <Footer />
        </>
    );
}