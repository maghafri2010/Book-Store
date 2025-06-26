const fiction = [
  {
    genre: "Fiction",
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 11,
    image: "https://covers.openlibrary.org/b/id/8226196-L.jpg",
    description: "A dazzling portrait of the Jazz Age, exploring love, wealth, and the American Dream in 1920s New York."
  },
  {
    genre: "Fiction",
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "A moving story of racial injustice and childhood innocence set in the Deep South."
  },
  {
    genre: "Fiction",
    name: "1984",
    author: "George Orwell",
    price: 9,
    image: "https://via.placeholder.com/150",
    description: "A chilling dystopian novel about surveillance, totalitarianism, and the loss of individuality."
  },
  {
    genre: "Fiction",
    name: "Pride and Prejudice",
    author: "Jane Austen",
    price: 8,
    image: "https://via.placeholder.com/150",
    description: "A witty and romantic classic that explores manners, marriage, and society in 19th-century England."
  },
  {
    genre: "Fiction",
    name: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 7,
    image: "https://via.placeholder.com/150",
    description: "A coming-of-age tale following Holden Caulfield's journey through alienation and rebellion."
  },
  {
    genre: "Fiction",
    name: "Beloved",
    author: "Toni Morrison",
    price: 13,
    image: "https://via.placeholder.com/150",
    description: "A haunting exploration of slavery's legacy and a mother's love, set after the American Civil War."
  },
  {
    genre: "Fiction",
    name: "The Kite Runner",
    author: "Khaled Hosseini",
    price: 11,
    image: "https://via.placeholder.com/150",
    description: "A powerful story of friendship, betrayal, and redemption set against the backdrop of Afghanistan's history."
  },
  {
    genre: "Fiction",
    name: "Life of Pi",
    author: "Yann Martel",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "A fantastical survival tale of a boy stranded at sea with a Bengal tiger."
  },
  {
    genre: "Fiction",
    name: "The Alchemist",
    author: "Paulo Coelho",
    price: 9,
    image: "https://via.placeholder.com/150",
    description: "A philosophical adventure about following your dreams and listening to your heart."
  },
  {
    genre: "Fiction",
    name: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    price: 11,
    image: "https://via.placeholder.com/150",
    description: "A moving tale of two Afghan women bound by hardship, hope, and friendship."
  },
  {
    genre: "Fiction",
    name: "The Book Thief",
    author: "Markus Zusak",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "A unique WWII story narrated by Death, about a girl's love for books in Nazi Germany."
  },
  {
    genre: "Fiction",
    name: "Little Fires Everywhere",
    author: "Celeste Ng",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "A gripping drama about family secrets, privilege, and the complexities of motherhood."
  },
  {
    genre: "Fiction",
    name: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: 12,
    image: "https://via.placeholder.com/150",
    description: "A lyrical mystery and coming-of-age story set in the marshes of North Carolina."
  },
  {
    genre: "Fiction",
    name: "Normal People",
    author: "Sally Rooney",
    price: 11,
    image: "https://via.placeholder.com/150",
    description: "An intimate exploration of love, friendship, and class between two Irish teenagers."
  },
  {
    genre: "Fiction",
    name: "The Midnight Library",
    author: "Matt Haig",
    price: 12,
    image: "https://via.placeholder.com/150",
    description: "A heartwarming novel about regrets, second chances, and the infinite possibilities of life."
  },
  {
    genre: "Fiction",
    name: "Shatter Me",
    author: "Tahereh Mafi",
    price: 8,
    image: "https://via.placeholder.com/150",
    description: "A dystopian romance about a girl whose touch is lethal, and her fight for freedom."
  },
  {
    genre: "Fiction",
    name: "The Night Circus",
    author: "Erin Morgenstern",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "A magical tale of rivalry and romance set in a mysterious, wandering circus."
  },
  {
    genre: "Fiction",
    name: "Circe",
    author: "Madeline Miller",
    price: 11,
    image: "https://via.placeholder.com/150",
    description: "A feminist retelling of the Greek myth, following the life of the enchantress Circe."
  },
  {
    genre: "Fiction",
    name: "The Song of Achilles",
    author: "Madeline Miller",
    price: 13,
    image: "https://via.placeholder.com/150",
    description: "A lyrical and romantic retelling of the Iliad, focusing on Achilles and Patroclus."
  },
  {
    genre: "Fiction",
    name: "It Ends with Us",
    author: "Colleen Hoover",
    price: 9,
    image: "https://via.placeholder.com/150",
    description: "A powerful contemporary romance about love, resilience, and difficult choices."
  },
  {
    genre: "Fiction",
    name: "Verity",
    author: "Colleen Hoover",
    price: 11,
    image: "https://via.placeholder.com/150",
    description: "A dark and twisty psychological thriller about a writer, a mysterious manuscript, and deadly secrets."
  }
];


const nonFiction = [
  {
    genre: "Non-Fiction",
    name: "Educated",
    author: "Tara Westover",
    price: 14,
    image: "https://via.placeholder.com/150",
    description: "A memoir about a woman who grows up in a strict and abusive household in rural Idaho but eventually escapes to learn about the wider world through education."
  },
  {
    genre: "Non-Fiction",
    name: "Becoming",
    author: "Michelle Obama",
    price: 17,
    image: "https://via.placeholder.com/150",
    description: "The inspiring memoir of the former First Lady of the United States, chronicling her life from childhood to the White House."
  },
  {
    genre: "Non-Fiction",
    name: "Atomic Habits",
    author: "James Clear",
    price: 12,
    image: "https://via.placeholder.com/150",
    description: "A practical guide to breaking bad habits and building good ones, showing how tiny changes can lead to remarkable results."
  },
  {
    genre: "Non-Fiction",
    name: "The Power of Now",
    author: "Eckhart Tolle",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "A spiritual classic that teaches the importance of living in the present moment and letting go of the past and future."
  },
  {
    genre: "Non-Fiction",
    name: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 13,
    image: "https://via.placeholder.com/150",
    description: "A counterintuitive approach to living a good life, focusing on embracing our limitations and accepting our flaws."
  },
  {
    genre: "Non-Fiction",
    name: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: 13,
    image: "https://via.placeholder.com/150",
    description: "A groundbreaking book that explores the two systems that drive the way we think: fast, intuitive thinking and slow, deliberate thinking."
  },
  {
    genre: "Non-Fiction",
    name: "Outliers",
    author: "Malcolm Gladwell",
    price: 12,
    image: "https://via.placeholder.com/150",
    description: "An exploration of what makes high-achievers different, examining the factors that contribute to success."
  },
  {
    genre: "Non-Fiction",
    name: "Grit",
    author: "Angela Duckworth",
    price: 11,
    image: "https://via.placeholder.com/150",
    description: "A look at the power of passion and perseverance in achieving long-term goals."
  },
  {
    genre: "Non-Fiction",
    name: "Born a Crime",
    author: "Trevor Noah",
    price: 12,
    image: "https://via.placeholder.com/150",
    description: "A memoir by comedian Trevor Noah about growing up in South Africa during apartheid."
  },
  {
    genre: "Non-Fiction",
    name: "Quiet",
    author: "Susan Cain",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "An insightful book about the power of introverts in a world that can't stop talking."
  },
  {
    genre: "Non-Fiction",
    name: "Can’t Hurt Me",
    author: "David Goggins",
    price: 14,
    image: "https://via.placeholder.com/150",
    description: "The story of David Goggins, who transformed himself from a depressed, overweight young man into a U.S. Armed Forces icon and one of the world's top endurance athletes."
  },
  {
    genre: "Non-Fiction",
    name: "Man’s Search for Meaning",
    author: "Viktor E. Frankl",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "A Holocaust survivor's lessons for spiritual survival and finding purpose in life."
  },
  {
    genre: "Non-Fiction",
    name: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    price: 15,
    image: "https://via.placeholder.com/150",
    description: "A pioneering book on trauma, showing how it reshapes both body and brain."
  },
  {
    genre: "Non-Fiction",
    name: "The 48 Laws of Power",
    author: "Robert Greene",
    price: 14,
    image: "https://via.placeholder.com/150",
    description: "A guide to understanding power dynamics and strategies for gaining, defending, and using power."
  },
  {
    genre: "Non-Fiction",
    name: "Why We Sleep",
    author: "Matthew Walker",
    price: 13,
    image: "https://via.placeholder.com/150",
    description: "A comprehensive exploration of the science of sleep and its vital importance to our health."
  },
  {
    genre: "Non-Fiction",
    name: "The Four Agreements",
    author: "Don Miguel Ruiz",
    price: 9,
    image: "https://via.placeholder.com/150",
    description: "A practical guide to personal freedom, based on ancient Toltec wisdom."
  },
  {
    genre: "Non-Fiction",
    name: "Think Like a Monk",
    author: "Jay Shetty",
    price: 12,
    image: "https://via.placeholder.com/150",
    description: "Jay Shetty shares timeless wisdom and practical steps to live a less anxious, more meaningful life."
  },
  {
    genre: "Non-Fiction",
    name: "Digital Minimalism",
    author: "Cal Newport",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "A guide to living better with less technology and regaining control over your digital life."
  },
  {
    genre: "Non-Fiction",
    name: "Deep Work",
    author: "Cal Newport",
    price: 11,
    image: "https://via.placeholder.com/150",
    description: "A book about the benefits of deep, focused work and how to achieve it in a distracted world."
  },
  {
    genre: "Non-Fiction",
    name: "How to Win Friends & Influence People",
    author: "Dale Carnegie",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "A timeless classic on communication and relationship-building skills for personal and professional success."
  },
  {
    genre: "Non-Fiction",
    name: "Daring Greatly",
    author: "Brené Brown",
    price: 11,
    image: "https://via.placeholder.com/150",
    description: "A book about the power of vulnerability and how it can transform the way we live, love, and lead."
  }
];


const manga = [
  {
    genre: "Manga",
    name: "Naruto, Vol. 1",
    author: "Masashi Kishimoto",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "Follow Naruto Uzumaki, a young ninja with dreams of becoming Hokage, as he begins his journey in the Hidden Leaf Village."
  },
  {
    genre: "Manga",
    name: "One Piece, Vol. 1",
    author: "Eiichiro Oda",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "Monkey D. Luffy sets sail to become the Pirate King and find the legendary treasure known as One Piece."
  },
  {
    genre: "Manga",
    name: "Attack on Titan, Vol. 1",
    author: "Hajime Isayama",
    price: 11,
    image: "https://via.placeholder.com/150",
    description: "Humanity fights for survival against giant man-eating Titans in a world surrounded by massive walls."
  },
  {
    genre: "Manga",
    name: "Death Note, Vol. 1",
    author: "Tsugumi Ohba & Takeshi Obata",
    price: 11,
    image: "https://via.placeholder.com/150",
    description: "A high school student discovers a notebook that allows him to kill anyone by writing their name in it."
  },
  {
    genre: "Manga",
    name: "Demon Slayer, Vol. 1",
    author: "Koyoharu Gotouge",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "Tanjiro Kamado becomes a demon slayer to save his sister and avenge his family."
  },
  {
    genre: "Manga",
    name: "Tokyo Ghoul, Vol. 1",
    author: "Sui Ishida",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "Ken Kaneki's life changes forever after a chance encounter with a flesh-eating ghoul."
  },
  {
    genre: "Manga",
    name: "Fullmetal Alchemist, Vol. 1",
    author: "Hiromu Arakawa",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "Brothers Edward and Alphonse Elric use alchemy in their quest to restore their bodies."
  },
  {
    genre: "Manga",
    name: "Bleach, Vol. 1",
    author: "Tite Kubo",
    price: 9,
    image: "https://via.placeholder.com/150",
    description: "Ichigo Kurosaki gains the powers of a Soul Reaper and battles evil spirits known as Hollows."
  },
  {
    genre: "Manga",
    name: "My Hero Academia, Vol. 1",
    author: "Kohei Horikoshi",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "Izuku Midoriya, born without superpowers, dreams of becoming a hero in a world full of them."
  },
  {
    genre: "Manga",
    name: "One Punch Man, Vol. 1",
    author: "ONE & Yusuke Murata",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "Saitama can defeat any enemy with a single punch, but struggles with boredom and finding a worthy opponent."
  },
  {
    genre: "Manga",
    name: "Chainsaw Man, Vol. 1",
    author: "Tatsuki Fujimoto",
    price: 11,
    image: "https://via.placeholder.com/150",
    description: "Denji, a young man with a chainsaw demon dog, becomes a devil hunter to pay off his debts."
  },
  {
    genre: "Manga",
    name: "Spy x Family, Vol. 1",
    author: "Tatsuya Endo",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "A spy, an assassin, and a telepath form a fake family for the sake of a secret mission."
  },
  {
    genre: "Manga",
    name: "Jujutsu Kaisen, Vol. 1",
    author: "Gege Akutami",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "Yuji Itadori joins a secret organization to fight curses after swallowing a powerful cursed object."
  },
  {
    genre: "Manga",
    name: "Dragon Ball, Vol. 1",
    author: "Akira Toriyama",
    price: 9,
    image: "https://via.placeholder.com/150",
    description: "Young Goku embarks on an adventure to collect the seven Dragon Balls and make his wish come true."
  },
  {
    genre: "Manga",
    name: "Dr. Stone, Vol. 1",
    author: "Riichiro Inagaki & Boichi",
    price: 11,
    image: "https://via.placeholder.com/150",
    description: "After humanity is petrified, Senku uses science to rebuild civilization from scratch."
  },
  {
    genre: "Manga",
    name: "The Promised Neverland, Vol. 1",
    author: "Kaiu Shirai & Posuka Demizu",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "Children at Grace Field House uncover a dark secret and plan a daring escape."
  },
  {
    genre: "Manga",
    name: "Blue Lock, Vol. 1",
    author: "Muneyuki Kaneshiro & Yusuke Nomura",
    price: 11,
    image: "https://via.placeholder.com/150",
    description: "Japan's best young soccer players compete in a ruthless program to create the ultimate striker."
  },
  {
    genre: "Manga",
    name: "Berserk, Vol. 1",
    author: "Kentaro Miura",
    price: 15,
    image: "https://via.placeholder.com/150",
    description: "Guts, a lone mercenary, battles demons and fate in a dark fantasy world."
  },
  {
    genre: "Manga",
    name: "Vagabond, Vol. 1",
    author: "Takehiko Inoue",
    price: 13,
    image: "https://via.placeholder.com/150",
    description: "A reimagining of the life of legendary swordsman Miyamoto Musashi."
  },
  {
    genre: "Manga",
    name: "Vinland Saga, Vol. 1",
    author: "Makoto Yukimura",
    price: 15,
    image: "https://via.placeholder.com/150",
    description: "Thorfinn seeks revenge and adventure in a Viking epic inspired by historical events."
  },
  {
    genre: "Manga",
    name: "Goodnight Punpun, Vol. 1",
    author: "Inio Asano",
    price: 14,
    image: "https://via.placeholder.com/150",
    description: "A surreal coming-of-age story following the life and struggles of Punpun Punyama."
  }
];

const frenchTitles = [
  {
    genre: "Littérature française",
    name: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry",
    price: 7,
    image: "https://via.placeholder.com/150",
    description: "A poetic tale about a young prince's journey, exploring themes of innocence, friendship, and human nature."
  },
  {
    genre: "Littérature française",
    name: "Les Misérables",
    author: "Victor Hugo",
    price: 12,
    image: "https://via.placeholder.com/150",
    description: "An epic story of redemption, justice, and love set against the backdrop of 19th-century France."
  },
  {
    genre: "Littérature française",
    name: "L'Étranger",
    author: "Albert Camus",
    price: 9,
    image: "https://via.placeholder.com/150",
    description: "A philosophical novel about alienation and the absurdity of life, told through the eyes of Meursault."
  },
  {
    genre: "Littérature française",
    name: "Germinal",
    author: "Émile Zola",
    price: 11,
    image: "https://via.placeholder.com/150",
    description: "A powerful depiction of a coal miners' strike in 19th-century France and the struggle for social justice."
  },
  {
    genre: "Littérature française",
    name: "Madame Bovary",
    author: "Gustave Flaubert",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "The tragic story of Emma Bovary, whose pursuit of passion and luxury leads to her downfall."
  },
  {
    genre: "Littérature française",
    name: "Les Fleurs du mal",
    author: "Charles Baudelaire",
    price: 8,
    image: "https://via.placeholder.com/150",
    description: "A landmark poetry collection exploring beauty, decadence, and the complexities of the human soul."
  },
  {
    genre: "Littérature française",
    name: "Candide",
    author: "Voltaire",
    price: 6,
    image: "https://via.placeholder.com/150",
    description: "A satirical adventure that critiques optimism and society through the misadventures of Candide."
  },
  {
    genre: "Littérature française",
    name: "Le Rouge et le Noir",
    author: "Stendhal",
    price: 9,
    image: "https://via.placeholder.com/150",
    description: "A psychological novel about ambition, love, and class struggle in post-Napoleonic France."
  },
  {
    genre: "Littérature française",
    name: "Les Trois Mousquetaires",
    author: "Alexandre Dumas",
    price: 13,
    image: "https://via.placeholder.com/150",
    description: "A swashbuckling tale of adventure, friendship, and intrigue in 17th-century France."
  },
  {
    genre: "Littérature française",
    name: "La Peste",
    author: "Albert Camus",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "A profound allegory about human resilience and solidarity during a plague in an Algerian town."
  },
  {
    genre: "Littérature française",
    name: "La Condition Humaine",
    author: "André Malraux",
    price: 12,
    image: "https://via.placeholder.com/150",
    description: "A gripping novel about revolution, fate, and existential struggle in 1920s Shanghai."
  },
  {
    genre: "Littérature française",
    name: "Les Mains Sales",
    author: "Jean-Paul Sartre",
    price: 9,
    image: "https://via.placeholder.com/150",
    description: "A political drama exploring themes of morality, ideology, and personal responsibility."
  },
  {
    genre: "Littérature française",
    name: "Notre-Dame de Paris",
    author: "Victor Hugo",
    price: 11,
    image: "https://via.placeholder.com/150",
    description: "A dramatic tale of love, fate, and tragedy centered around the iconic Parisian cathedral."
  },
  {
    genre: "Littérature française",
    name: "Bel-Ami",
    author: "Guy de Maupassant",
    price: 8,
    image: "https://via.placeholder.com/150",
    description: "The rise of an ambitious young man in Parisian society, using charm and manipulation to succeed."
  },
  {
    genre: "Littérature française",
    name: "La Princesse de Clèves",
    author: "Madame de La Fayette",
    price: 7,
    image: "https://via.placeholder.com/150",
    description: "A classic tale of love, duty, and honor at the royal court of 16th-century France."
  },
  {
    genre: "Littérature française",
    name: "La Chanson de Roland",
    author: "Anonyme",
    price: 6,
    image: "https://via.placeholder.com/150",
    description: "An epic medieval poem recounting the heroic deeds and tragic fate of Roland at Roncevaux."
  },
  {
    genre: "Littérature française",
    name: "Le Père Goriot",
    author: "Honoré de Balzac",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "A poignant exploration of family, ambition, and society in 19th-century Paris."
  },
  {
    genre: "Littérature française",
    name: "Les Liaisons dangereuses",
    author: "Pierre Choderlos de Laclos",
    price: 9,
    image: "https://via.placeholder.com/150",
    description: "A tale of seduction, manipulation, and betrayal among the French aristocracy."
  },
  {
    genre: "Littérature française",
    name: "L'Assommoir",
    author: "Émile Zola",
    price: 10,
    image: "https://via.placeholder.com/150",
    description: "A realistic portrayal of working-class life and the destructive effects of alcoholism in Paris."
  },
  {
    genre: "Littérature française",
    name: "Phèdre",
    author: "Jean Racine",
    price: 7,
    image: "https://via.placeholder.com/150",
    description: "A classical tragedy of forbidden love, guilt, and fate in ancient Greece."
  }
];


const bundles = [
  {
    genre: "Bundle",
    name: "Contemporary Fiction Starter Pack",
    author: "",
    price: "$39.99",
    image: "https://via.placeholder.com/150",
    description: "A curated bundle of modern fiction favorites to kickstart your reading journey."
  },
  {
    genre: "Bundle",
    name: "Popular Non-Fiction Reads",
    author: "",
    price: "$44.99",
    image: "https://via.placeholder.com/150",
    description: "A selection of bestselling non-fiction books covering self-help, memoir, and history."
  },
  {
    genre: "Bundle",
    name: "Manga Classics Collection",
    author: "",
    price: "39,90€",
    image: "https://via.placeholder.com/150",
    description: "A collection of iconic manga volumes perfect for both new and seasoned fans."
  },
  {
    genre: "Bundle",
    name: "French Literature Essentials",
    author: "",
    price: "35,00€",
    image: "https://via.placeholder.com/150",
    description: "Essential works from French literature, featuring timeless classics and beloved authors."
  },
  {
    genre: "Bundle",
    name: "Thrillers and Suspense Bundle",
    author: "",
    price: "$45.50",
    image: "https://via.placeholder.com/150",
    description: "A gripping set of thrillers and suspense novels to keep you on the edge of your seat."
  },
  {
    genre: "Bundle",
    name: "Science & Self-Improvement Pack",
    author: "",
    price: "$47.00",
    image: "https://via.placeholder.com/150",
    description: "A bundle of insightful books on science, psychology, and personal growth."
  },
  {
    genre: "Bundle",
    name: "Modern Manga Hits",
    author: "",
    price: "49,90€",
    image: "https://via.placeholder.com/150",
    description: "A set of the most popular and influential manga series of recent years."
  },
  {
    genre: "Bundle",
    name: "Classic French Literature Set",
    author: "",
    price: "40,00€",
    image: "https://via.placeholder.com/150",
    description: "A handpicked collection of classic French novels and stories for literature lovers."
  }
];

export const bestSellers = [
  // Fiction
  {
    genre: "Fiction",
    name: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: 16,
    image: "https://via.placeholder.com/150"
  },
  {
    genre: "Fiction",
    name: "The Night Circus",
    author: "Erin Morgenstern",
    price: 13,
    image: "https://via.placeholder.com/150"
  },
  {
    genre: "Fiction",
    name: "The Midnight Library",
    author: "Matt Haig",
    price: 14,
    image: "https://via.placeholder.com/150"
  },

  // Non-Fiction
  {
    genre: "Non-Fiction",
    name: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 18,
    image: "https://via.placeholder.com/150"
  },
  {
    genre: "Non-Fiction",
    name: "Atomic Habits",
    author: "James Clear",
    price: 16,
    image: "https://via.placeholder.com/150"
  },
  {
    genre: "Non-Fiction",
    name: "Educated",
    author: "Tara Westover",
    price: 15,
    image: "https://via.placeholder.com/150"
  },

  // Manga (French titles)
  {
    genre: "Manga",
    name: "L'Attaque des Titans, Tome 1",
    author: "Hajime Isayama",
    price: 11,
    image: "https://via.placeholder.com/150"
  },
  {
    genre: "Manga",
    name: "Demon Slayer : Kimetsu no Yaiba, Tome 1",
    author: "Koyoharu Gotouge",
    price: 10,
    image: "https://via.placeholder.com/150"
  },
  {
    genre: "Manga",
    name: "Naruto, Tome 1",
    author: "Masashi Kishimoto",
    price: 10,
    image: "https://via.placeholder.com/150"
  },

  // French Literature
  {
    genre: "French Literature",
    name: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry",
    price: 7,
    image: "https://via.placeholder.com/150"
  },
  {
    genre: "French Literature",
    name: "Les Misérables",
    author: "Victor Hugo",
    price: 12,
    image: "https://via.placeholder.com/150"
  },
  {
    genre: "French Literature",
    name: "L'Étranger",
    author: "Albert Camus",
    price: 10,
    image: "https://via.placeholder.com/150"
  },

  // More Fiction
  {
    genre: "Fiction",
    name: "The Song of Achilles",
    author: "Madeline Miller",
    price: 15,
    image: "https://via.placeholder.com/150"
  },
  {
    genre: "Fiction",
    name: "Normal People",
    author: "Sally Rooney",
    price: 13,
    image: "https://via.placeholder.com/150"
  },

  // More Non-Fiction
  {
    genre: "Non-Fiction",
    name: "Becoming",
    author: "Michelle Obama",
    price: 18,
    image: "https://via.placeholder.com/150"
  },
  {
    genre: "Non-Fiction",
    name: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    price: 17,
    image: "https://via.placeholder.com/150"
  },

  // More Manga
  {
    genre: "Manga",
    name: "One Piece, Tome 1",
    author: "Eiichiro Oda",
    price: 10,
    image: "https://via.placeholder.com/150"
  },
  {
    genre: "Manga",
    name: "Death Note, Tome 1",
    author: "Tsugumi Ohba & Takeshi Obata",
    price: 11,
    image: "https://via.placeholder.com/150"
  },
  {
    genre: "Manga",
    name: "My Hero Academia, Tome 1",
    author: "Kohei Horikoshi",
    price: 10,
    image: "https://via.placeholder.com/150"
  },

  // More French Lit
  {
    genre: "French Literature",
    name: "Germinal",
    author: "Émile Zola",
    price: 11,
    image: "https://via.placeholder.com/150"
  },
  {
    genre: "French Literature",
    name: "Madame Bovary",
    author: "Gustave Flaubert",
    price: 11,
    image: "https://via.placeholder.com/150"
  }
];

export const genres = [fiction, nonFiction, manga, frenchTitles, bundles, bestSellers ];