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

function getTotalReviewCount(poop) {
  const goodreads = poop.reviews?.goodreads.reviewsCount;
  const librarything = poop.reviews?.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;
}

/* ===== FUNCTIONAL ARRAY METHOD : MAP ===== 
calls the callback fn for each element of the array*/

const temp = [1, 2, 3, 4, 5].map((el) => el * 2);
temp;

const books = getBooks();
books;

const titles = books.map((book) => book.title);
titles;
const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewCount(book),
  };
});

/* ===== FUNCTIONAL ARRAY METHOD : FILTER ===== 
filter out certain elements in an array */

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

//includes always returns T/F
//this demos chaining on top of functional arrays
//becuase they always return arrays so you can chain these methods together
const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

/* ===== FUNCTIONAL ARRAY METHOD : REDUCE ===== 
goal: reduce entire array into one value
most powerful and versitile 
could have done all of the above with just reduce */

//here we're trying to reduce all the pages of all books to just one value
//acc == accumulator
//the last value can be anything: array, object, etc
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

/* ===== ARRAY METHOD : SORT ===== 
this is not functional so it will mutate original array */

const arr = [3, 7, 1, 9, 6];
arr;
//const sort = arr.sort((a, b) => a - b); //sort ascending
const sort = arr.slice().sort((a, b) => a - b); // this is how to get around mutating OG array
sort;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

/* ===== IMMUTABLE ARRAYS ===== 
 in react alot of operations need to be immutable so we need ways to mutatate underlying '
 data w/o affecting OG data structures
 in practice we would be abstraction this away into functions for these operations:
 function addBook()
 function deleteBook()*/

// 1) add a book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) delete a book object from array
// filter creates an array shorter than the original
// again this would be in its own fn and that fn would receive an id as a parameter
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) update a single book object while in the array
// map creates an array the same length
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);

booksAfterUpdate;
