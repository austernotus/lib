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
    libContainer.replaceChildren();
    for (i=0; i<myLibrary.length; i++){
        createBookCard(myLibrary[i]);
    }
}

function createBookCard(book){
    const newCard = document.createElement("div");

    const titleParagraph = document.createElement("p");
    const authorParagraph = document.createElement("p");
    const pagesParagraph = document.createElement("p");
    const readParagraph = document.createElement("p");
    const readCheckbox = document.createElement("input");
    const deleteButton = document.createElement("button");

    newCard.id = myLibrary.indexOf(book)

    titleParagraph.textContent = `Title: ${book.title}`;
    authorParagraph.textContent = `Author: ${book.author}`;
    pagesParagraph.textContent = `Pages: ${book.pages}`;
    readParagraph.textContent = `Read? `;

    if(book.read ? readCheckbox.checked = true : readCheckbox.checked = false);
    
    readCheckbox.type = "checkbox";
    readCheckbox.name = "read";
    readParagraph.appendChild(readCheckbox);

    deleteButton.addEventListener("click", function() {
        deleteBook(deleteButton.parentElement);
    });
    deleteButton.textContent = "Delete";

    newCard.appendChild(titleParagraph);
    newCard.appendChild(authorParagraph);
    newCard.appendChild(pagesParagraph);
    newCard.appendChild(readParagraph);
    newCard.appendChild(deleteButton);

    libContainer.appendChild(newCard);

}

function deleteBook(bookCard){
    myLibrary.splice(bookCard.id, 1);
    displayBooks();
}