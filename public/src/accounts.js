function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last < accountB.name.last ? -1 : 1);
}

function extractBorrowsIds(books){
  let ids = []
  for (let i = 0; i<books.length; i++){
    let book = books[i];
    for ( let j = 0; j<book.borrows.length; j++){
      let user = book.borrows[j];
      ids.push(user.id)
    }
  }
  return ids
}

function getTotalNumberOfBorrows(account, books) {
  let ids = extractBorrowsIds(books);
  return ids.reduce((total, id) => {
    if (id === account.id) {
      total++
    }
    return total;
  }, 0)
}

function getBooksPossessedByAccount(account, books, authors) {
  let borrowed = [];
  for (let i = 0; i<books.length; i++){
    let book = books[i];
    for (let j = 0; j<book.borrows.length; j++){
      let user = book.borrows[j];
      if (user.id === account.id && user.returned === false){
        book.author = authors.find(author => author.id === book.authorId);
        borrowed.push(book)
      }
    }  
  }
  return borrowed
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
