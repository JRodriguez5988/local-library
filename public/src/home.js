function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let filtered = books.filter(book => book.borrows[0].returned === false);
  return filtered.length;
}

function getMostCommonGenres(books) {
  const genres = books.map((book) => ({name: book.genre, count: 0}));
  books.forEach(book => {
    let name = book.genre;
    let found = genres.find(genre => genre.name === name);
    found.count++
  })
  genres.sort((genreA, genreB) => genreA.count > genreB.count ? -1 : 1);
  let [first, second, third, fourth, fifth] = genres;
  return [first, second, third, fourth, fifth];
}

function getMostPopularBooks(books) {
  const booksA = [];
  books.forEach(book => {
    let name = book.title;
    let count = book.borrows.length;
    booksA.push({name, count})
  })
  booksA.sort((bookA, bookB) => bookA.count > bookB.count ? -1 : 1);
  const popBooks = [];
  booksA.forEach(book => {
    if (popBooks.length < 5){
      popBooks.push(book);
    }
  })
  return popBooks
}

function getMostPopularAuthors(books, authors) {
  const auth = [];
  authors.forEach(author => {
    let firstName = author.name.first;
    let lastName = author.name.last;
    let name = `${firstName} ${lastName}`;
    let count = 0;
    books.forEach(book => {
      if (book.authorId === author.id) {
        count += book.borrows.length
      }
    })
    auth.push({name, count});
  })
  auth.sort((authorA, authorB) => authorA.count > authorB.count ? -1 : 1);
  const [first, second, third, fourth, fifth] = auth;
  return [first, second, third, fourth, fifth];
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
