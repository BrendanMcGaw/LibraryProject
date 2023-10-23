const myBooks = [];
const buttonClick = document.getElementsByClassName("addBookButton");
const buttonId = document.getElementById("addBookButton");
const bookContainerSize = document.getElementById("bookContainerSize");
const bookImage = document.getElementById("bookImage");
const tableForm = document.getElementById("tableForm");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}

function hideSubmitButton() {
    bookContainerSize.classList.remove("hide-item");
    bookImage.classList.remove("hide-item");
    tableForm.classList.remove("hide-item");
    buttonId.classList.add("myClass");
}

