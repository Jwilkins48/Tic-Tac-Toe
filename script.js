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

    // const startGame = () => {
    currentPlayer = player1.marker;

    cells.forEach(cells => {
        cells.addEventListener('click', e => {
            if (e.target.textContent == '' && gameStatus == 'game starting') {
                gameDisplay[e.target.id] = currentPlayer;
                console.log(gameDisplay);

                cells.textContent = currentPlayer;
                (currentPlayer == player1.marker) ? cells.style.color = '#f1b7ce': cells.style.color = '#8cecae';
                changePlayerTurn();
                playerWins();

            }
        })
    })

    function playerWins() {
        if (cells[0].innerHTML == cells[1].innerHTML &&
            cells[1].innerHTML == cells[2].innerHTML &&
            cells[0].innerHTML.trim() != "") {
            winnerDisplay(0, 1, 2)
        } else if (cells[3].innerHTML == cells[4].innerHTML &&
            cells[4].innerHTML == cells[5].innerHTML &&
            cells[3].innerHTML.trim() != "") {
            winnerDisplay(3, 4, 5)
        } else if (cells[6].innerHTML == cells[7].innerHTML &&
            cells[7].innerHTML == cells[8].innerHTML &&
            cells[6].innerHTML.trim() != "") {
            winnerDisplay(6, 7, 8)
        } else if (cells[0].innerHTML == cells[3].innerHTML &&
            cells[3].innerHTML == cells[6].innerHTML &&
            cells[0].innerHTML.trim() != "") {
            winnerDisplay(0, 3, 6)
        } else if (cells[1].innerHTML == cells[4].innerHTML &&
            cells[4].innerHTML == cells[7].innerHTML &&
            cells[1].innerHTML.trim() != "") {
            winnerDisplay(1, 4, 7)
        } else if (cells[2].innerHTML == cells[5].innerHTML &&
            cells[5].innerHTML == cells[8].innerHTML &&
            cells[2].innerHTML.trim() != "") {
            winnerDisplay(2, 5, 8)
        } else if (
            cells[0].innerHTML == cells[4].innerHTML &&
            cells[4].innerHTML == cells[8].innerHTML &&
            cells[0].innerHTML.trim() != "") {
            winnerDisplay(0, 4, 8);
        } else if (
            cells[2].innerHTML == cells[4].innerHTML &&
            cells[4].innerHTML == cells[6].innerHTML &&
            cells[2].innerHTML.trim() != "") {   
            winnerDisplay(2, 4, 6);
        }

        function winnerDisplay(a,b,c) {
            cells[a].style.color = 'white';
            cells[a].style.background = "#f1b7ce";
            cells[b].style.color = 'white';
            cells[b].style.background = "#f1b7ce";
            cells[c].style.color = 'white';
            cells[c].style.background = "#f1b7ce";
            console.log('Winner!');
            gameStatus = 'game over';
        }
        // }

    }

});
GameBoard();