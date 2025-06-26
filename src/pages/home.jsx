import Categories from "../components/home/categories";
import Header from "../components/home/header/header";
import SpringSale from "../components/home/springSale";
import SliderImage from "../components/home/sliderImage";
import Footer from "../components/home/footer";
import booksData from "../assets/listBooks";

export const genresTitle = [
  "Fiction Team Choice 🔮🪐",
  "Non-Fiction Team Choice 🎖️",
  "Spring: A Treasury of Bestseller Timeless Classics 📜",
  "Best of Manga Bundles 🇯🇵"
];

export default function Home(){
    return(
        <>
        <Header />
        <SpringSale />
        <Categories />

        <SliderImage books={booksData.fictionBooks} title={genresTitle[0]} i={0} />
        <SliderImage books={booksData.nonFictionBooks} title={genresTitle[1]} i={1} />
        <SliderImage books={booksData.springBooks} title={genresTitle[2]} i={2}/>
        <SliderImage books={booksData.mangaBooks} title={genresTitle[3]} i={3}/>


        <Footer />
        </>
    );
}