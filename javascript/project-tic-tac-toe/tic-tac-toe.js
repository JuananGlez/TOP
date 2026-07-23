const gameBoard = {
    "b1": "",
    "b2": "",
    "b3": "",
    "b4": "",
    "b5": "",
    "b6": "",
    "b7": "",
    "b8": "",
    "b9": "",
};
const playerX = {

};
const player0 = {

};

(() => {
    document.getElementById('b1').innerHTML = gameBoard.b1;


})();

// let idButton = document.getElementById('b1').id

function clickPlay(mark) {
    // gameBoard.b1 = "X"
    gameBoard.$mark = "X";
    console.log(gameBoard)
}