const myBooks = [];
const buttonClick = document.getElementsByClassName("addBookButton");
const buttonId = document.getElementById("addBookButton");
const button = document.querySelector(button);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}

buttonClick[1].addEventListener(onclick, alertMe());

function alertMe() {
    alert("Hello World!");
}

