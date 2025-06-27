const fiction = [
  {
    genre: "Fiction",
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 11,
    image: "https://covers.openlibrary.org/b/olid/OL46773254M-L.jpg",
    description: "A dazzling portrait of the Jazz Age, exploring love, wealth, and the American Dream in 1920s New York."
  },
  {
    genre: "Fiction",
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 10,
    image: "https://covers.openlibrary.org/b/olid/OL899317M-L.jpg",
    description: "A moving story of racial injustice and childhood innocence set in the Deep South."
  },
  {
    genre: "Fiction",
    name: "1984",
    author: "George Orwell",
    price: 9,
    image: "https://covers.openlibrary.org/b/olid/OL7353617M-L.jpg",
    description: "A chilling dystopian novel about surveillance, totalitarianism, and the loss of individuality."
  },
  {
    genre: "Fiction",
    name: "Pride and Prejudice",
    author: "Jane Austen",
    price: 8,
    image: "https://covers.openlibrary.org/b/olid/OL25420438M-L.jpg",
    description: "A witty and romantic classic that explores manners, marriage, and society in 19th-century England."
  },
  {
    genre: "Fiction",
    name: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 7,
    image: "https://covers.openlibrary.org/b/olid/OL16164303M-L.jpg",
    description: "A coming-of-age tale following Holden Caulfield's journey through alienation and rebellion."
  },
  {
    genre: "Fiction",
    name: "Beloved",
    author: "Toni Morrison",
    price: 13,
    image: "https://covers.openlibrary.org/b/olid/OL365892M-L.jpg",
    description: "A haunting exploration of slavery's legacy and a mother's love, set after the American Civil War."
  },
  {
    genre: "Fiction",
    name: "The Kite Runner",
    author: "Khaled Hosseini",
    price: 11,
    image: "https://covers.openlibrary.org/b/olid/OL25436022M-L.jpg",
    description: "A powerful story of friendship, betrayal, and redemption set against the backdrop of Afghanistan's history."
  },
  {
    genre: "Fiction",
    name: "Life of Pi",
    author: "Yann Martel",
    price: 10,
    image: "https://covers.openlibrary.org/b/olid/OL22105596M-L.jpg",
    description: "A fantastical survival tale of a boy stranded at sea with a Bengal tiger."
  },
  {
    genre: "Fiction",
    name: "The Alchemist",
    author: "Paulo Coelho",
    price: 9,
    image: "https://covers.openlibrary.org/b/olid/OL25473046M-L.jpg",
    description: "A philosophical adventure about following your dreams and listening to your heart."
  },
  {
    genre: "Fiction",
    name: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    price: 11,
    image: "https://covers.openlibrary.org/b/olid/OL25438911M-L.jpg",
    description: "A moving tale of two Afghan women bound by hardship, hope, and friendship."
  },
  {
    genre: "Fiction",
    name: "The Book Thief",
    author: "Markus Zusak",
    price: 10,
    image: "https://covers.openlibrary.org/b/olid/OL25449189M-L.jpg",
    description: "A unique WWII story narrated by Death, about a girl's love for books in Nazi Germany."
  },
  {
    genre: "Fiction",
    name: "Little Fires Everywhere",
    author: "Celeste Ng",
    price: 10,
    image: "https://covers.openlibrary.org/b/olid/OL25489347M-L.jpg",
    description: "A gripping drama about family secrets, privilege, and the complexities of motherhood."
  },
  {
    genre: "Fiction",
    name: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: 12,
    image: "https://covers.openlibrary.org/b/olid/OL27152419M-L.jpg",
    description: "A lyrical mystery and coming-of-age story set in the marshes of North Carolina."
  },
  {
    genre: "Fiction",
    name: "Normal People",
    author: "Sally Rooney",
    price: 11,
    image: "https://covers.openlibrary.org/b/olid/OL25489412M-L.jpg",
    description: "An intimate exploration of love, friendship, and class between two Irish teenagers."
  },
  {
    genre: "Fiction",
    name: "The Midnight Library",
    author: "Matt Haig",
    price: 12,
    image: "https://covers.openlibrary.org/b/olid/OL25492317M-L.jpg",
    description: "A heartwarming novel about regrets, second chances, and the infinite possibilities of life."
  },
  {
    genre: "Fiction",
    name: "Shatter Me",
    author: "Tahereh Mafi",
    price: 8,
    image: "https://covers.openlibrary.org/b/olid/OL25490312M-L.jpg",
    description: "A dystopian romance about a girl whose touch is lethal, and her fight for freedom."
  },
  {
    genre: "Fiction",
    name: "The Night Circus",
    author: "Erin Morgenstern",
    price: 10,
    image: "https://covers.openlibrary.org/b/olid/OL25451234M-L.jpg",
    description: "A magical tale of rivalry and romance set in a mysterious, wandering circus."
  },
  {
    genre: "Fiction",
    name: "Circe",
    author: "Madeline Miller",
    price: 11,
    image: "https://covers.openlibrary.org/b/olid/OL25450278M-L.jpg",
    description: "A feminist retelling of the Greek myth, following the life of the enchantress Circe."
  },
  {
    genre: "Fiction",
    name: "The Song of Achilles",
    author: "Madeline Miller",
    price: 13,
    image: "https://covers.openlibrary.org/b/olid/OL25450312M-L.jpg",
    description: "A lyrical and romantic retelling of the Iliad, focusing on Achilles and Patroclus."
  },
  {
    genre: "Fiction",
    name: "It Ends with Us",
    author: "Colleen Hoover",
    price: 9,
    image: "https://covers.openlibrary.org/b/olid/OL25491345M-L.jpg",
    description: "A powerful contemporary romance about love, resilience, and difficult choices."
  },
  {
    genre: "Fiction",
    name: "Verity",
    author: "Colleen Hoover",
    price: 11,
    image: "https://covers.openlibrary.org/b/olid/OL25491367M-L.jpg",
    description: "A dark and twisty psychological thriller about a writer, a mysterious manuscript, and deadly secrets."
  }
];



const nonFiction = [
  {
    genre: "Non-fiction",
    name: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 18,
    image: "https://covers.openlibrary.org/b/id/8374671-L.jpg",
    description: "An exploration of the history and impact of Homo sapiens on the world."
  },
  {
    genre: "Non-fiction",
    name: "Educated",
    author: "Tara Westover",
    price: 16,
    image: "https://covers.openlibrary.org/b/id/8369259-L.jpg",
    description: "A memoir about a woman who grew up in a strict family and pursued education to escape."
  },
  {
    genre: "Non-fiction",
    name: "Becoming",
    author: "Michelle Obama",
    price: 20,
    image: "https://covers.openlibrary.org/b/id/9276516-L.jpg",
    description: "The former First Lady's inspiring memoir on life, family, and public service."
  },
  {
    genre: "Non-fiction",
    name: "The Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    price: 14,
    image: "https://covers.openlibrary.org/b/id/8234156-L.jpg",
    description: "The story of the woman behind the famous HeLa cells and their impact on science."
  },
  {
    genre: "Non-fiction",
    name: "Born a Crime",
    author: "Trevor Noah",
    price: 15,
    image: "https://covers.openlibrary.org/b/id/8269616-L.jpg",
    description: "A memoir about growing up in apartheid South Africa by the comedian and TV host."
  },
  {
    genre: "Non-fiction",
    name: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: 17,
    image: "https://covers.openlibrary.org/b/id/8104239-L.jpg",
    description: "A landmark book exploring the two systems that drive the way we think."
  },
  {
    genre: "Non-fiction",
    name: "Quiet: The Power of Introverts in a World That Can't Stop Talking",
    author: "Susan Cain",
    price: 16,
    image: "https://covers.openlibrary.org/b/id/8315104-L.jpg",
    description: "A compelling case for the value and strengths of introverted people."
  },
  {
    genre: "Non-fiction",
    name: "The Wright Brothers",
    author: "David McCullough",
    price: 14,
    image: "https://covers.openlibrary.org/b/id/8081076-L.jpg",
    description: "The dramatic story of the brothers who taught the world to fly."
  },
  {
    genre: "Non-fiction",
    name: "The Glass Castle",
    author: "Jeannette Walls",
    price: 15,
    image: "https://covers.openlibrary.org/b/id/8205671-L.jpg",
    description: "A memoir about a difficult yet inspiring upbringing in a dysfunctional family."
  },
  {
    genre: "Non-fiction",
    name: "The Power of Habit",
    author: "Charles Duhigg",
    price: 16,
    image: "https://covers.openlibrary.org/b/id/7805522-L.jpg",
    description: "An exploration of how habits form and how we can change them for good."
  },
  {
    genre: "Non-fiction",
    name: "Freakonomics",
    author: "Steven D. Levitt & Stephen J. Dubner",
    price: 13,
    image: "https://covers.openlibrary.org/b/id/8314373-L.jpg",
    description: "A quirky and fascinating look at the hidden side of economics."
  },
  {
    genre: "Non-fiction",
    name: "Outliers: The Story of Success",
    author: "Malcolm Gladwell",
    price: 15,
    image: "https://covers.openlibrary.org/b/id/8670639-L.jpg",
    description: "Analyzes what makes high-achievers different and the factors behind success."
  },
  {
    genre: "Non-fiction",
    name: "Steve Jobs",
    author: "Walter Isaacson",
    price: 19,
    image: "https://covers.openlibrary.org/b/id/8231826-L.jpg",
    description: "The definitive biography of the Apple co-founder and visionary leader."
  },
  {
    genre: "Non-fiction",
    name: "Man’s Search for Meaning",
    author: "Viktor E. Frankl",
    price: 14,
    image: "https://covers.openlibrary.org/b/id/7884861-L.jpg",
    description: "A memoir and psychological exploration of life in Nazi concentration camps."
  },
  {
    genre: "Non-fiction",
    name: "Bad Blood: Secrets and Lies in a Silicon Valley Startup",
    author: "John Carreyrou",
    price: 16,
    image: "https://covers.openlibrary.org/b/id/9339414-L.jpg",
    description: "The shocking story of the Theranos scandal and corporate fraud."
  }
];



const manga = [
  {
    genre: "Manga",
    name: "Naruto",
    author: "Masashi Kishimoto",
    price: 9,
    image: "https://covers.openlibrary.org/b/id/10512815-L.jpg",
    description: "A young ninja strives to become the strongest leader in his village while overcoming many challenges."
  },
  {
    genre: "Manga",
    name: "One Piece",
    author: "Eiichiro Oda",
    price: 10,
    image: "https://covers.openlibrary.org/b/id/10515738-L.jpg",
    description: "Monkey D. Luffy and his pirate crew search for the ultimate treasure known as 'One Piece'."
  },
  {
    genre: "Manga",
    name: "Attack on Titan",
    author: "Hajime Isayama",
    price: 11,
    image: "https://covers.openlibrary.org/b/id/10507099-L.jpg",
    description: "Humanity battles giant humanoid Titans threatening their existence behind enormous walls."
  },
  {
    genre: "Manga",
    name: "Death Note",
    author: "Tsugumi Ohba",
    price: 8,
    image: "https://covers.openlibrary.org/b/id/10496252-L.jpg",
    description: "A high school student discovers a supernatural notebook that kills anyone whose name is written in it."
  },
  {
    genre: "Manga",
    name: "Fullmetal Alchemist",
    author: "Hiromu Arakawa",
    price: 10,
    image: "https://covers.openlibrary.org/b/id/10500303-L.jpg",
    description: "Two brothers use alchemy in their quest to restore their bodies after a failed ritual."
  },
  {
    genre: "Manga",
    name: "My Hero Academia",
    author: "Kohei Horikoshi",
    price: 9,
    image: "https://covers.openlibrary.org/b/id/10511504-L.jpg",
    description: "In a world where superpowers are common, a powerless boy strives to become a hero."
  },
  {
    genre: "Manga",
    name: "Tokyo Ghoul",
    author: "Sui Ishida",
    price: 9,
    image: "https://covers.openlibrary.org/b/id/10511733-L.jpg",
    description: "A college student becomes a half-ghoul after a deadly encounter, struggling to live between two worlds."
  },
  {
    genre: "Manga",
    name: "Dragon Ball",
    author: "Akira Toriyama",
    price: 8,
    image: "https://covers.openlibrary.org/b/id/10505318-L.jpg",
    description: "The adventures of Goku from childhood through adulthood as he trains in martial arts and explores the world."
  },
  {
    genre: "Manga",
    name: "Bleach",
    author: "Tite Kubo",
    price: 9,
    image: "https://covers.openlibrary.org/b/id/10510848-L.jpg",
    description: "A teenager gains the powers of a Soul Reaper and must defend humans from evil spirits."
  },
  {
    genre: "Manga",
    name: "One Punch Man",
    author: "ONE",
    price: 8,
    image: "https://covers.openlibrary.org/b/id/10510499-L.jpg",
    description: "A hero who can defeat any opponent with a single punch struggles to find a worthy challenger."
  },
  {
    genre: "Manga",
    name: "Demon Slayer",
    author: "Koyoharu Gotouge",
    price: 10,
    image: "https://covers.openlibrary.org/b/id/10506102-L.jpg",
    description: "A boy becomes a demon slayer to avenge his family and save his demon-turned sister."
  },
  {
    genre: "Manga",
    name: "Tokyo Revengers",
    author: "Ken Wakui",
    price: 9,
    image: "https://covers.openlibrary.org/b/id/10512654-L.jpg",
    description: "A man travels back in time to save his friends and change the course of his life."
  },
  {
    genre: "Manga",
    name: "Black Clover",
    author: "Yūki Tabata",
    price: 9,
    image: "https://covers.openlibrary.org/b/id/10510805-L.jpg",
    description: "Two orphans aim to become the Wizard King in a world of magic and adventure."
  },
  {
    genre: "Manga",
    name: "Fairy Tail",
    author: "Hiro Mashima",
    price: 9,
    image: "https://covers.openlibrary.org/b/id/10510984-L.jpg",
    description: "A guild of powerful wizards embark on quests and form strong bonds of friendship."
  },
  {
    genre: "Manga",
    name: "Hunter x Hunter",
    author: "Yoshihiro Togashi",
    price: 10,
    image: "https://covers.openlibrary.org/b/id/10512494-L.jpg",
    description: "A young boy becomes a Hunter to find his father and faces numerous challenges."
  }
];



const frenchTitles = [
  {
    genre: "Littérature française",
    name: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry",
    price: 7,
    image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    description: "A poetic tale about a young prince's journey, exploring themes of innocence, friendship, and human nature."
  },
  {
    genre: "Littérature française",
    name: "Les Misérables",
    author: "Victor Hugo",
    price: 12,
    image: "https://covers.openlibrary.org/b/id/8315116-L.jpg",
    description: "An epic story of redemption, justice, and love set against the backdrop of 19th-century France."
  },
  {
    genre: "Littérature française",
    name: "L'Étranger",
    author: "Albert Camus",
    price: 9,
    image: "https://covers.openlibrary.org/b/id/8231999-L.jpg",
    description: "A philosophical novel about alienation and the absurdity of life, told through the eyes of Meursault."
  },
  {
    genre: "Littérature française",
    name: "Germinal",
    author: "Émile Zola",
    price: 11,
    image: "https://covers.openlibrary.org/b/id/8234614-L.jpg",
    description: "A powerful depiction of a coal miners' strike in 19th-century France and the struggle for social justice."
  },
  {
    genre: "Littérature française",
    name: "Madame Bovary",
    author: "Gustave Flaubert",
    price: 10,
    image: "https://covers.openlibrary.org/b/id/8231831-L.jpg",
    description: "The tragic story of Emma Bovary, whose pursuit of passion and luxury leads to her downfall."
  },
  {
    genre: "Littérature française",
    name: "Les Fleurs du mal",
    author: "Charles Baudelaire",
    price: 8,
    image: "https://covers.openlibrary.org/b/id/8315214-L.jpg",
    description: "A landmark poetry collection exploring beauty, decadence, and the complexities of the human soul."
  },
  {
    genre: "Littérature française",
    name: "Candide",
    author: "Voltaire",
    price: 6,
    image: "https://covers.openlibrary.org/b/id/8231914-L.jpg",
    description: "A satirical adventure that critiques optimism and society through the misadventures of Candide."
  },
  {
    genre: "Littérature française",
    name: "Le Rouge et le Noir",
    author: "Stendhal",
    price: 9,
    image: "https://covers.openlibrary.org/b/id/8232163-L.jpg",
    description: "A psychological novel about ambition, love, and class struggle in post-Napoleonic France."
  },
  {
    genre: "Littérature française",
    name: "Les Trois Mousquetaires",
    author: "Alexandre Dumas",
    price: 13,
    image: "https://covers.openlibrary.org/b/id/8235075-L.jpg",
    description: "A swashbuckling tale of adventure, friendship, and intrigue in 17th-century France."
  },
  {
    genre: "Littérature française",
    name: "La Peste",
    author: "Albert Camus",
    price: 10,
    image: "https://covers.openlibrary.org/b/id/8232071-L.jpg",
    description: "A profound allegory about human resilience and solidarity during a plague in an Algerian town."
  },
  {
    genre: "Littérature française",
    name: "La Condition Humaine",
    author: "André Malraux",
    price: 12,
    image: "https://covers.openlibrary.org/b/id/8234582-L.jpg",
    description: "A gripping novel about revolution, fate, and existential struggle in 1920s Shanghai."
  },
  {
    genre: "Littérature française",
    name: "Les Mains Sales",
    author: "Jean-Paul Sartre",
    price: 9,
    image: "https://covers.openlibrary.org/b/id/8232190-L.jpg",
    description: "A political drama exploring themes of morality, ideology, and personal responsibility."
  },
  {
    genre: "Littérature française",
    name: "Notre-Dame de Paris",
    author: "Victor Hugo",
    price: 11,
    image: "https://covers.openlibrary.org/b/id/8231918-L.jpg",
    description: "A dramatic tale of love, fate, and tragedy centered around the iconic Parisian cathedral."
  },
  {
    genre: "Littérature française",
    name: "Bel-Ami",
    author: "Guy de Maupassant",
    price: 8,
    image: "https://covers.openlibrary.org/b/id/8231961-L.jpg",
    description: "The rise of an ambitious young man in Parisian society, using charm and manipulation to succeed."
  },
  {
    genre: "Littérature française",
    name: "La Princesse de Clèves",
    author: "Madame de La Fayette",
    price: 7,
    image: "https://covers.openlibrary.org/b/id/8232124-L.jpg",
    description: "A classic tale of love, duty, and honor at the royal court of 16th-century France."
  }
];




const bundles = [
  {
    name: "Shonen Jump Starter Pack",
    genre: "Manga Bundle",
    includedTitles: ["Naruto", "One Piece", "My Hero Academia", "Bleach"],
    price: 35,
    image: "https://covers.openlibrary.org/b/id/10512815-L.jpg",
    description: "A perfect starter bundle featuring top Shonen Jump series for action and adventure lovers."
  },
  {
    name: "Dark Fantasy Collection",
    genre: "Manga Bundle",
    includedTitles: ["Attack on Titan", "Tokyo Ghoul", "Demon Slayer"],
    price: 28,
    image: "https://covers.openlibrary.org/b/id/10507099-L.jpg",
    description: "Dive into dark fantasy worlds with these gripping tales of survival and supernatural battles."
  },
  {
    name: "Classic Manga Hits",
    genre: "Manga Bundle",
    includedTitles: ["Dragon Ball", "Death Note", "Fullmetal Alchemist"],
    price: 30,
    image: "https://covers.openlibrary.org/b/id/10505318-L.jpg",
    description: "Enjoy some of the most iconic manga series that shaped the genre worldwide."
  },
  {
    name: "Heroic Adventures Pack",
    genre: "Manga Bundle",
    includedTitles: ["One Punch Man", "Black Clover", "Hunter x Hunter"],
    price: 27,
    image: "https://covers.openlibrary.org/b/id/10510499-L.jpg",
    description: "Follow the journeys of powerful heroes in action-packed adventures filled with thrills."
  },
  {
    name: "Romance & Drama Set",
    genre: "Manga Bundle",
    includedTitles: ["Tokyo Revengers", "Fairy Tail", "Naruto"],
    price: 25,
    image: "https://covers.openlibrary.org/b/id/10512654-L.jpg",
    description: "Experience heartfelt stories with romance, friendship, and emotional drama."
  }
];


const bestSellers = [
  {
    genre: "Manga",
    name: "Demon Slayer: Kimetsu no Yaiba",
    author: "Koyoharu Gotouge",
    price: 12,
    image: "https://covers.openlibrary.org/b/id/10511222-L.jpg",
    description: "A breathtaking story of a boy fighting demons to save his sister and protect humanity."
  },
  {
    genre: "Littérature française",
    name: "Les Misérables",
    author: "Victor Hugo",
    price: 12,
    image: "https://covers.openlibrary.org/b/id/8281991-L.jpg",
    description: "An epic story of redemption, justice, and love set against 19th-century France."
  },
  {
    genre: "Science Fiction",
    name: "Dune",
    author: "Frank Herbert",
    price: 15,
    image: "https://covers.openlibrary.org/b/id/8104731-L.jpg",
    description: "A science fiction masterpiece exploring politics, religion, and ecology on a desert planet."
  },
  {
    genre: "Fantasy",
    name: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    price: 14,
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    description: "The magical journey of a young wizard discovering his destiny."
  },
  {
    genre: "Non-fiction",
    name: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 18,
    image: "https://covers.openlibrary.org/b/id/8374671-L.jpg",
    description: "An exploration of the history and impact of Homo sapiens on the world."
  },
  {
    genre: "Mystery",
    name: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    price: 13,
    image: "https://covers.openlibrary.org/b/id/8231993-L.jpg",
    description: "A gripping thriller involving murder, family secrets, and corporate intrigue."
  },
  {
    genre: "Romance",
    name: "Pride and Prejudice",
    author: "Jane Austen",
    price: 10,
    image: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
    description: "A classic romance about manners, marriage, and misunderstandings."
  }
];


export const genres = [fiction, nonFiction, manga, frenchTitles, bundles, bestSellers ];