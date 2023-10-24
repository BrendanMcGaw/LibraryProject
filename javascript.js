const myBooks = [];
const buttonClick = document.getElementsByClassName("addBookButton");
const buttonId = document.getElementById("addBookButton");
const bookContainerSize = document.getElementById("bookContainerSize");
const bookImage = document.getElementById("bookImage");
const tableForm = document.getElementById("tableForm");

// Constructor to create new book objects, pushes new object to store in myBooks array.
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    myBooks.push(this);
}

// Function that creates the new object, prompting the user for the data.
function addBookToLibrary() {
    title = prompt("Book Title?")
    author = prompt("Authors name?")
    pages = prompt("How many pages?")
    read = prompt("Is the book read?")
    const book = new Book(title, author, pages, read);
}

// Creates a new object called book1, parsing the arguments to the constructor from the prompts.
// const book1 = new Book(prompt(), prompt(), prompt(), prompt());

// Hides the submit button and reveals the books and form.
function hideSubmitButton() {
    bookContainerSize.classList.remove("hide-item");
    bookImage.classList.remove("hide-item");
    tableForm.classList.remove("hide-item");
    buttonId.classList.add("myClass");
}

