class Patron {
    constructor(name, email)
    {
        this.name = name;
        this.email = email;
        this.currentBook = null;
        this.balance = 0; //initialize fine balance to zero
    }
  
  
    checkOut(book){
        this.currentBook = book;
        book.out = true;
        book.patron = this;
    }
    
    returnBook(book) {
        this.currentBook = null;
        book.out = false;
        book.patron = null;
    }
  
  
  
  
  
}
