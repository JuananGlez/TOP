
const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
}
const Game = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", "",];
    let players = [
        createPlayer(document.querySelector('#PlayerX').value, 'X'),
        createPlayer(document.querySelector('#PlayerO').value, 'O')
    ];
    gameBoard.forEach(() => {
        let button = document.createElement('button')

        document.querySelector('.gameBoard').append(button)

    })
    const startGame = () => {
        console.log('hola')

    };
    return { startGame, }

})();


(() => { })();


