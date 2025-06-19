import PortaitOfTheArtist from './images/aPortrait.jpeg';
import HardTimes from './images/HardTimes.png';
import HeartofDarkness from './images/heartOfDarkness.png';
import book1 from './images/book1.png';

import {Sapiens, Educated, ThinkingFastAndSlow, HenriettaLacks, AtomicHabits } from "../assets/images";
import { DeathNote, Naruto, OnePiece, AttackOnTitan, MyHeroAcademia } from "../assets/images";
import { Walden, SecretGarden, AnneOfGreenGables, RoomWithAView, WindInTheWillows } from "../assets/images";


const fictionBooks = [{
    name: 'A Portrait Of The Artist As A Young Man',
    author: 'James Joyce',
    prix: 43.00,
    image: PortaitOfTheArtist,
},
{
    name: 'Hard Times',
    author: 'Charles Dickens',
    prix: 35.00,
    image: HardTimes,
},
{
    name: 'Heart Of Darkness',
    author: 'Joseph Conrad',
    prix: 32.00,
    image: HeartofDarkness,
},
{
    name: 'Heart Of Darkness',
    author: 'Joseph Conrad',
    prix: 32.00,
    image: book1,
},
{   name: 'Heart Of Darkness',
    author: 'Joseph Conrad',
    prix: 32.00,
    image: HeartofDarkness,
}
];
const nonFictionBooks = [
  {
    name: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    prix: 50.00,
    image: Sapiens,
  },
  {
    name: 'Educated',
    author: 'Tara Westover',
    prix: 45.00,
    image: Educated,
  },
  {
    name: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    prix: 48.00,
    image: ThinkingFastAndSlow,
  },
  {
    name: 'The Immortal Life of Henrietta Lacks',
    author: 'Rebecca Skloot',
    prix: 42.00,
    image: HenriettaLacks,
  },
  {
    name: 'Atomic Habits',
    author: 'James Clear',
    prix: 39.00,
    image: AtomicHabits,
  }
];


const mangaBooks = [
    {
        name: 'Death Note, Vol. 1',
        author: 'Tsugumi Ohba',
        prix: 29.00,
        image: DeathNote,
    },
    {
        name: 'Naruto, Vol. 1',
        author: 'Masashi Kishimoto',
        prix: 28.00,
        image: Naruto,
    },
    {
        name: 'One Piece, Vol. 1',
        author: 'Eiichiro Oda',
        prix: 30.00,
        image: OnePiece,
    },
    {
        name: 'Attack on Titan, Vol. 1',
        author: 'Hajime Isayama',
        prix: 31.00,
        image: AttackOnTitan,
    },
    {
        name: 'My Hero Academia, Vol. 1',
        author: 'Kohei Horikoshi',
        prix: 27.00,
        image: MyHeroAcademia,
    }
];

const springBooks = [
    {
        name: 'Walden',
        author: 'Henry David Thoreau',
        prix: 36.00,
        image: Walden,
    },
    {
        name: 'The Secret Garden',
        author: 'Frances Hodgson Burnett',
        prix: 34.00,
        image: SecretGarden,
    },
    {
        name: 'Anne of Green Gables',
        author: 'L. M. Montgomery',
        prix: 33.00,
        image: AnneOfGreenGables,
    },
    {
        name: 'A Room with a View',
        author: 'E. M. Forster',
        prix: 32.00,
        image: RoomWithAView,
    },
    {
        name: 'The Wind in the Willows',
        author: 'Kenneth Grahame',
        prix: 29.00,
        image: WindInTheWillows,
    }
];



export default {fictionBooks, nonFictionBooks, mangaBooks, springBooks};

