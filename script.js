const gameContainer = document.getElementById('gameBoardContainer');
const cells = document.querySelectorAll('[data-cell]')
const gameScore = document.getElementById('gameScore');
const resetBtn = document.getElementById('resetBtn')

const GameBoard = (() => {
    // Create players
    const Player = (name, marker, turn) => {
        const getName = () => name;
        const getMarker = () => marker;
        return {
            name,
            marker,
            turn
        }
    }

    const player1 = Player('player1', 'X', true);
    const player2 = Player('player2', 'O', false);
    let winner = '';

    const changePlayerTurn = () => {
        if(player1.turn == true){
            player1.turn = false;
        }else{
            player1.turn = true;
        }
    }

    gameDisplay = [];
    const winningCombo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const playerTurn = () => {
        cells.forEach(cells => {
            cells.addEventListener('click', e => {
                if (player1.turn === true && e.target.textContent == '') {
                    gameDisplay[e.target.id] = player1.marker;

                    cells.textContent = player1.marker;
                    cells.style.color = '#f1b7ce';

                    changePlayerTurn();
                }
            })
        })
    }


});