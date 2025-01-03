import { title } from "process";

export type Book = {
  id: number;
  title: string;
  chapters: Chapter[];
  summary: string;
  coverImageUrl: string;
};
export type Chapter = {
  number: number;
  title: string;
  text: string;
};
export const getBooks = async (filters?: { title?: string }) => {
  const books = [
    {
      id: 1,
      title: "The Great Adventure",
      chapters: [
        {
          number: 1,
          title: "Chapter 1: The Beginning",
          text: "This chapter introduces the main characters. The journey starts in a small village where a group of adventurers meets for the first time. They are unaware of the great challenges that lie ahead, but their destinies are already intertwined. They share their hopes and fears, and make plans for the journey. Little do they know, an ancient prophecy is about to unfold.",
        },
        {
          number: 2,
          title: "Chapter 2: The Quest",
          text: "The characters begin their journey. With the first rays of the sun, they set off into the dense forest. The path is rough, and their resolve is tested. Along the way, they face wild animals, and the elements begin to challenge them. They must rely on each other’s strengths as they come to realize the true meaning of their quest.",
        },
      ],
      summary: "A thrilling story of adventure and discovery.",
      coverImageUrl: "https://picsum.photos/200/300?random=1",
    },
    {
      id: 2,
      title: "Mystery of the Lost City",
      chapters: [
        {
          number: 1,
          title: "Chapter 1: The Discovery",
          text: "The search for the lost city begins. After years of research, the map to the lost city has been found. The main character, a passionate archaeologist, is determined to uncover the truth. She gathers a team of experts, and together they embark on an expedition deep into the jungle. The air is thick with mystery as they uncover ancient symbols leading to the long-lost city.",
        },
        {
          number: 2,
          title: "Chapter 2: The Journey",
          text: "They travel deep into unknown lands. The journey becomes increasingly perilous. They have to cross rivers, navigate dense forests, and climb steep mountains. With each passing day, they get closer to their destination, but also closer to danger. Strange occurrences make them question if they are truly ready for the challenges that lie ahead.",
        },
      ],
      summary: "An exciting mystery novel about an ancient lost city.",
      coverImageUrl: "https://picsum.photos/200/300?random=2",
    },
    {
      id: 3,
      title: "Exploring the Stars",
      chapters: [
        {
          number: 1,
          title: "Chapter 1: Into the Cosmos",
          text: "The first steps into space. Humanity has achieved the impossible: interstellar travel. The crew of the spaceship Odyssey embarks on a journey to explore the farthest reaches of the galaxy. As they leave Earth behind, they are filled with awe and wonder, but also with the weight of their mission to explore the unknown.",
        },
        {
          number: 2,
          title: "Chapter 2: Alien Encounters",
          text: "Meeting extraterrestrial beings. The crew encounters their first extraterrestrial species, a peaceful race of beings who have been watching humanity's progress for centuries. The exchange of knowledge is an unforgettable moment for the crew, but they must also face the reality of the dangers that lie in the vastness of space.",
        },
        {
          number: 3,
          title: "Chapter 3: A New Beginning",
          text: "As the crew ventures deeper into space, they come across a planet that seems perfect for human settlement. But as they begin their exploration, they realize that the planet is not as uninhabited as they thought. They must make a difficult choice: colonize the planet or return to Earth.",
        },
      ],
      summary: "A sci-fi adventure across the stars.",
      coverImageUrl: "https://picsum.photos/200/300?random=3",
    },
    {
      id: 4,
      title: "The Hidden Treasure",
      chapters: [
        {
          number: 1,
          title: "Chapter 1: The Map",
          text: "A mysterious map leads to hidden treasures. The story begins with a pirate’s map that has been passed down through generations. The protagonist, a young adventurer, inherits the map after the sudden death of a relative. She sets off on an adventure to uncover the truth behind the treasure, but soon discovers she is not the only one seeking it.",
        },
        {
          number: 2,
          title: "Chapter 2: The Journey Begins",
          text: "Following clues across treacherous lands. The young adventurer assembles a group of friends, each with unique skills, and together they journey across the globe in search of the treasure. Along the way, they face obstacles that test their loyalty and determination. Danger lurks at every turn, but the promise of riches drives them forward.",
        },
        {
          number: 3,
          title: "Chapter 3: The Treasure",
          text: "After many trials, the group reaches the hidden location of the treasure. But they are faced with a moral dilemma: should they take the treasure for themselves or leave it where it belongs? The decision will change their lives forever and reveal the true meaning of treasure.",
        },
      ],
      summary: "A classic treasure hunt adventure.",
      coverImageUrl: "https://picsum.photos/200/300?random=4",
    },
    {
      id: 5,
      title: "The Time Traveler’s Journey",
      chapters: [
        {
          number: 1,
          title: "Chapter 1: The Device",
          text: "The discovery of a time travel device. The protagonist, a scientist, accidentally stumbles upon a device that allows him to travel through time. He initially tests it for small trips, but soon finds himself caught in a race against time itself as he faces unexpected consequences of his actions.",
        },
        {
          number: 2,
          title: "Chapter 2: A Glimpse into the Past",
          text: "The protagonist travels back in time and experiences key moments of history. He becomes involved in world-changing events, and soon realizes that his actions in the past may have unintended consequences on the present.",
        },
        {
          number: 3,
          title: "Chapter 3: The Paradox",
          text: "As the protagonist attempts to fix the mistakes he's made, he realizes that his actions have created a time paradox. To fix everything, he must make an ultimate sacrifice, risking his own existence in order to save the timeline from collapsing.",
        },
      ],
      summary: "A thrilling time travel adventure through history.",
      coverImageUrl: "https://picsum.photos/200/300?random=5",
    },
  ];

  if (filters) {
    return books.filter(
      (book) =>
        filters.title &&
        book.title
          .toLocaleLowerCase()
          .includes(filters.title.toLocaleLowerCase())
    );
  }

  return books;
};
export const getBookById = async (id: string): Promise<Book | undefined> => {
  const books = await getBooks();
  return books.find((book) => book.id.toString() === id);
};

export const getTitles = async () => {
  const books = await getBooks();
  return books.map((book) => book.title);
};
