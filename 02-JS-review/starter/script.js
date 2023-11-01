const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
/* 
===== DESCRUTURING OBJECTS AND ARRAYS =====
getting data out of an object or array
*/

const books = getBooks();
//books;

const book = getBook(3);
book;
//const title = book.title;

//INSTEAD OF DOING THIS
//const bookTitle = getBook(2).title; //const bookAuthor = getBook(2).author;
//console.log(bookTitle, bookAuthor);

/* ===== DO THIS: destructuring only works when the var is the same name as object property ===== */
const { title, author, pages, publicationDate, hasMovieAdaptation, genres } =
  book;
title;
genres;

//primaryGenre = genres[0];
//secondaryGenre = genres[1];

/* ===== destructuring can be done with arrays as well just need [] ====== */

const [primaryGenre, secondaryGenre] = genres;
console.log(primaryGenre, secondaryGenre);

/* 
===== REST OPERATOR =====
The rest parameter syntax allows a function to accept an indefinite number of 
arguments as an array, providing a way to represent variadic functions in JavaScript
*/
const [primary, secondary, ...other] = genres;
other;

/* 
===== SPREAD OPERATOR =====
The spread operator gives you access to the insides of an iterable object. 
*/

/* const newGenres = [...genres, "epic fantasy"];
   OR */
const newGenres = ["epic fantasy", ...genres];
newGenres;

//updatedBook = { book, moviePublicationDate: "2001-09-12" }; // will append another object property rather than add to existing object
updatedBook = {
  ...book,
  //adding a new object property
  moviePublicationDate: "2001-09-12",
  //updating the object property
  pages: "1210",
};
updatedBook;

/* 
==== ARROW FUNCTIONS ====
OLD WAY 
function getYear(year) {
  return year.split("-")[0];
} 
*/

const getYear = (str) => str.split("-")[0]; // only have to have the return statement & fn blocks if multiple lines are stated

/*
===== TEMPLATE LITERALS =====
Allows creation of strings that contain JS expressions
Strings use "" ''
Literals use ``
*/

const summary = `${title} was a ${pages}-long book, and was written by ${author}
and published in ${getYear(publicationDate)}. 
The book ${hasMovieAdaptation ? "has" : "has not"} been adapted to a movie.`;

summary;
// note: i had an error where I couldn't access the pages property and it was because
// i didn't include take it out of the books object in the descructured variables that I declared above

// ==== TERNARY OPERATOR ====
pageRange = pages > 1000 ? "over 1000" : "less than 1000";

// ===== SHORT CIRCUITING & LOGICAL OPERATORS =====

console.log(true && "GBFLOP");
console.log(false && "GBFLOP");
console.log(hasMovieAdaptation && "GBFLOP");

//falsy: 0, '', null, undefinded
console.log("GBMGORF" && "GBFLOP");
console.log(0 && "GBFLOP");

console.log(true || "GBFLOP");
console.log(false || "GBFLOP");

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

//console.log(book.reviews.librarything.reviewsCount);
//const countWrong = book.reviews.librarything.reviewsCount || "NO DATA";
//countWrong;

/* ===== NULLISH COALESING =====
will only return the second value when the first value is null or undefined
*/
//const count = book.reviews.librarything.reviewsCount ?? "no data";

/* ===== OPTIONAL CHAINING =====
 adding a ? to evalute if a property is present
 becuase of the optional chainging, JS will no longer try to read
 reviewsCount out of the undefined property librarything
*/

function getTotalReviewCount(poop) {
  const goodreads = poop.reviews?.goodreads.reviewsCount;
  const librarything = poop.reviews?.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));

/* ===== FUNCTIONAL ARRAY METHODS =====
Array: map, filter, reduce 
Called functional because they don't alter the source array
*/
