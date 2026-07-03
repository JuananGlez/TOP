const styleCss = document.createElement("style");
document.head.appendChild(styleCss);

styleCss.sheet.insertRule('#page { width: 100vw; height: 5vh }', 0);

styleCss.sheet.insertRule('.head { height: -webkit-fill-available }', 1);

styleCss.sheet.insertRule('button { display: flex; justify-self: anchor-center; height: -webkit-fill-available; align-items: center; padding: 0 3vw; font-size: 1vw}', 2);

styleCss.sheet.insertRule('#container { display: flex ; flex-wrap: wrap; width: 100vw; height: 95vh; max-width: 100vw; max-height: 95vh;}', 3);

styleCss.sheet.insertRule('#container div {outline: 1px solid salmon; }', 4);

styleCss.sheet.insertRule('#container div:hover {background-color: #3498db !important; }', 5);

let page = document.createElement("div");
page.id = "page";
document.body.append(page);

let divHead = document.createElement("div")
divHead.classList.add("head");
page.append(divHead);

let button = document.createElement("button");
button.textContent = "Change";
divHead.appendChild(button);

let squares = 0

button.addEventListener("click", () => {
    let squares = prompt("How many Squares?");
    if (squares > 100) {
        squares = 100
        alert("Can't add more than 100 squares")
    }
    resetGrid();
    createGrid(squares);
})

let container = document.createElement("div");
document.body.append(container)
container.id = "container"

function createGrid(x) {
    for (i = 0; i < x * x; i++) {
        let content = document.createElement("div");
        let colorSquareNumber = `0x${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
        content.style.backgroundColor = "#" + colorSquareNumber.slice(2);
        container.append(content);
        let brightness = 1

        content.addEventListener("click", () => {
            brightness = brightness - 0.1
            content.style.filter = "brightness(" + brightness + ")";
            // console.log(brightness)
        })
    }
    styleCss.sheet.insertRule('#container div {outline: 1px solid salmon;flex: 0 1 calc(100vw/' + x + '); height: calc(95vh/' + x + ')}', 4);
}

function resetGrid() {
    container.innerHTML = "";
    styleCss.sheet.deleteRule(4)
}