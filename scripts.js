const myLibrary = [];
const libContainer = document.getElementById("library-container");
const dialog = document.querySelector("dialog");
const newBookButton = document.querySelector("dialog + button");
const cancelButton = document.getElementById("cancel");
const confirmBook = document.getElementById("add-book");

newBookButton.addEventListener("click", () => {
  dialog.showModal();
});

cancelButton.addEventListener("click", () => {
  dialog.close();
});

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

document.getElementById("bookForm").onsubmit = () => {
    event.preventDefault()

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    if (!title || !author || !pages) {
        alert("Please fill in all required fields.");
        return;
    }

    addBookToLibrary(title,author,pages,read);
    dialog.close();
    displayBooks();
}

function displayBooks(){
    for (const book of myLibrary){
        console.log(book.info());
    }
}