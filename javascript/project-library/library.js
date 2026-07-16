const myLibrary = [["01121661", "The Hobbit", "J.R.R. Tolkien", "310 pages", true], ["022135651", "Fellowship of the Ring", "J.R.R. Tolkien", "423 pages", false], ["123932812", "Silmarilion", "J.R.R. Tolkien", "365 pages", false]];
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
        myLibrary.splice(myLibrary.join(',').split(',').indexOf(idNumber) / 3, 1);
        card.remove();
    }
}

function createLibrary() {
    myLibrary.forEach(element => {
        var id = element[0];
        var h4content = element[1];
        var h5content = element[2];
        var h6content = element[3];
        var read = element[4];

        createCard(id, h4content, h5content, h6content, read);
    })
}

function newBook() {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    var id = crypto.randomUUID();
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var pages = document.getElementById('pages').value;
    var read = document.getElementById('read').checked;

    myLibrary.push([id, title, author, pages, read]);
    var libLength = myLibrary[myLibrary.length - 1];
    createCard(id, libLength[1], libLength[2], libLength[3], libLength[4]);
}

createLibrary();