const gameContainer = document.getElementById('gameBoardContainer');
const cells = document.querySelectorAll('[data-cell-index]')
const cell = document.querySelectorAll('.cell')
const gameScore = document.getElementById('gameScore');
const resetBtn = document.getElementById('resetBtn')

let startingGame = false;
let gameStatus = 'game starting';
let winner;

const GameBoard = (() => {
    // Create players
    const Player = (name, marker, turn) => {
        return {
            name,
            marker,
            turn
        }
    }

    const player1 = Player('player1', 'X', true);
    const player2 = Player('player2', 'O', false);

    const changePlayerTurn = () => {
        if (currentPlayer == player1.marker) {
            currentPlayer = player2.marker
        } else {
            currentPlayer = player1.marker
        }
    }

    gameDisplay = ['', '', '', '', '', '', '', '', '', ''];
    // const winningCombo = [
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    //     [0, 3, 6],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [0, 4, 8],
    //     [2, 4, 6]
    // ]


    // const startGame = () => {
    currentPlayer = player1.marker;

    cells.forEach(cells => {
        cells.addEventListener('click', e => {
            if (e.target.textContent == '' && gameStatus == 'game starting') {
                gameDisplay[e.target.id] = currentPlayer;

                gameDisplay[e.target.id] = currentPlayer;
                console.log(gameDisplay);

                cells.textContent = currentPlayer;
                cells.style.color = '#f1b7ce';
                changePlayerTurn();
                playerWins();

            }
        })
    })

    function playerWins() {
        if (cells[0].innerHTML == cells[1].innerHTML &&
            cells[1].innerHTML == cells[2].innerHTML &&
            cells[0].innerHTML.trim() != "") {
            console.log('Winner!');
            gameStatus = 'game over';
        }
    }
    // }



});
GameBoard();