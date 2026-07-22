const myLibrary = [
    { id: "01121661", title: "The Hobbit", author: "J.R.R. Tolkien", pages: "310 pages", read: true },
    { id: "022135651", title: "Fellowship of the Ring", author: "J.R.R. Tolkien", pages: "423 pages", read: false },
    { id: "123932812", title: "Silmarilion", author: "J.R.R. Tolkien", pages: "365 pages", read: false }];
const content = document.querySelector('.content');
const addBook = document.querySelector('.addbook');

let isShow = false;
function showNewBook() {
    if (isShow) {
        addBook.style.display = "none";
        isShow = false;
    } else {
        addBook.style.display = "grid";
        isShow = true;
    }
}

function createCard(id, h4content, h5content, h6content, read) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.id = id;
    content.append(card);

    var h4 = document.createElement('h4');
    var h5 = document.createElement('h5');
    var h6 = document.createElement('h6');
    var div = document.createElement('div');

    var minus = document.createElement('input');
    minus.type = "image";
    minus.src = "images/trash-can-outline.svg";

    var readCheck = document.createElement('input')
    readCheck.classList.add('readCheck')
    readCheck.type = "checkbox"

    div.classList.add('minus')
    div.append(readCheck, minus);

    var cards = document.querySelectorAll('.card');
    cards[cards.length - 1].append(h4, h5, h6, div);
    h4.append(h4content);
    h5.append(h5content);
    h6.append(h6content);
    readCheck.checked = read;

    minus.onclick = function deleteBook() {
        var idNumber = document.getElementById(id).id;
        myLibrary.splice(myLibrary.join(',').split(',').indexOf(idNumber) / 5, 1);
        card.remove();
    }
}

function createLibrary() {
    myLibrary.forEach(element => {
        createCard(element.id, element.title, element.author, element.pages, element.read);
    })
}

function newBook() {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    let book = {
        id: crypto.randomUUID(),
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        pages: document.getElementById('pages').value,
        read: document.getElementById('read').checked,
    }
    myLibrary.push(book);
    createCard(book.id, book.title, book.author, book.pages, book.read);
}
createLibrary();