const myLibrary = [["01121661", "The Hobbit", "J.R.R. Tolkien"], ["022135651", "Fellowship of the Ring", "J.R.R. Tolkien"], ["123932812", "Sylmarilion", "J.R.R. Tolkien"]];
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

function createCard(id, h4content, h5content) {
    var h4 = document.createElement('h4');
    var h5 = document.createElement('h5');
    var minus = document.createElement('input');

    minus.classList.add('minus')
    minus.type = "image";
    minus.src = "images/trash-can-outline.svg";

    var card = document.createElement('div');
    card.classList.add('card');
    card.id = id;
    content.append(card);

    minus.onclick = function deleteBook() {
        var idNumber = document.getElementById(id).id;
        myLibrary.splice(myLibrary.join(',').split(',').indexOf(idNumber) / 3, 1);
        card.remove();
    }

    var cards = document.querySelectorAll('.card');
    cards[cards.length - 1].append(h4, h5, minus);
    h4.append(h4content);
    h5.append(h5content);
}

function createLibrary() {
    myLibrary.forEach(element => {
        var id = element[0];
        var h4content = element[1];
        var h5content = element[2];

        createCard(id, h4content, h5content);
    })
}

function newBook() {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var id = crypto.randomUUID();

    myLibrary.push([id, title, author]);
    var libLength = myLibrary[myLibrary.length - 1];
    createCard(id, libLength[1], libLength[2]);
}

createLibrary();