const Gameboard = {
    gameBoard: ["", "", "", "", "", "", "", "", ""],
    players: [],
    turn: [0, 1]
}
let start = document.querySelector('#start');
let reset = document.querySelector('#reset');

const Game = (() => {
    let createPlayer = (name, mark) => {
        return {
            name,
            mark
        }
    }

    let startGame = () => {
        Gameboard.players = [
            createPlayer(document.querySelector('#PlayerX').value, 'X'),
            createPlayer(document.querySelector('#PlayerO').value, 'O')
        ];
        Gameboard.gameBoard.forEach((element, index) => {
            let button = document.createElement('button')
            button.id = index
            document.querySelector('.gameBoard').append(button)
        })
        if (window.getComputedStyle(start).display == 'grid') {
            start.style.display = 'none';
            reset.style.display = 'grid';
        }
    };

    let resetGame = () => {
        if (start.style.display == "none") {
            start.style.display = 'grid'
            reset.style.display = 'none';
        }
        document.querySelector('.gameBoard').replaceChildren();
    };

    return { startGame, resetGame };

})();

(() => { })();
