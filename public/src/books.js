function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = [];
  let returned = [];
  let bookStatus = [];
  for (let item in books){
    let book = books[item];
    book.borrows.every(user => user.returned === true) 
    ? returned.push(book) : borrowed.push(book);
    }
  bookStatus.push(borrowed, returned);
  return bookStatus;
}

function getBorrowersForBook(book, accounts) {
  let borrowers = []
  for(let i = 0; i<book.borrows.length; i++){
    let status = book.borrows[i];
    for(let user in accounts){
      let account = accounts[user];
      if (status.id === account.id){ 
        account.returned = status.returned;
        borrowers.push(account);
        if (borrowers.length === 10){
          return borrowers
        }
      }
    }
  }
  return borrowers;
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
