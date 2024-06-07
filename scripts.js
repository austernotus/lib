const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () =>{
        this.isRead = this.read ? "read." : "not read yet.";
        return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.isRead}`
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", false)

function addBookToLibrary(){

}