const myLibrary = [];
const libContainer = document.getElementById("library-container");

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
const theBobbit = new Book("The Bobbit", "J.R.R. Tolkien", "295", false)
myLibrary.push(theHobbit)
myLibrary.push(theBobbit)


function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks(){
    for (const book of myLibrary){
        console.log(book.info());
    }
}