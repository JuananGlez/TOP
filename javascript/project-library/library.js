const myLibrary = [["01", "The Hobbit", "J.R.R. Tolkien"], ["02", "Fellowship of the Ring", "J.R.R. Tolkien"]];
const content = document.querySelector(".content");
const addBook = document.querySelector('.addbook');

function Book(id, tittle, author) {
    this.name = title;
    this.author = author;
}

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

function newBook() {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    myLibrary.push([crypto.randomUUID(), title, author]);
    updateLibrary();
}

function updateLibrary() {
    let h4 = document.createElement('h4');
    let h5 = document.createElement('h5');
    var card = document.createElement('div');
    card.classList.add('card');
    document.querySelector('.content').append(card);
    var cards = document.querySelectorAll('.card')
    cards[cards.length - 1].append(h4, h5);
    h4.append(myLibrary[myLibrary.length - 1][1]);
    h5.append(myLibrary[myLibrary.length - 1][2]);
}
function createLibrary() {
    myLibrary.forEach(element => {
        let h4 = document.createElement('h4');
        let h5 = document.createElement('h5');
        var card = document.createElement('div');
        card.classList.add('card');
        document.querySelector('.content').append(card);
        var cards = document.querySelectorAll('.card')
        cards[cards.length - 1].append(h4, h5);
        h4.append(element[1]);
        h5.append(element[2]);
    });
}

createLibrary();
// console.log(Book.length());

// document.addEventListener('click', ".plus");