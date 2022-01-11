const gameContainer = document.getElementById('gameBoardContainer');
const cells = document.querySelectorAll('[data-cell-index]')
const cell = document.querySelectorAll('.cell')
const gameScore = document.getElementById('gameScore');
const resetBtn = document.getElementById('resetBtn');
const playerDisplay = document.getElementById('playerDisplay');

let spotsRemaining = 9;
let gameStatus = 'game starting';


const GameBoard = (() => {
    // Create players
    const Player = (name, marker) => {
        return {
            name,
            marker,
        }
    }

    const player1 = Player('Player 1', 'X');
    const player2 = Player('Player 2', 'O');

    const changePlayerTurn = () => {
        if (currentPlayer == player1) {
            currentPlayer = player2
            playerDisplay.innerHTML = `${currentPlayer.name}`
            playerDisplay.style.color = '#8cecae'
        } else {
            currentPlayer = player1
            playerDisplay.innerHTML = `${currentPlayer.name}`
            playerDisplay.style.color = '#eeabc6'
        }
    }

    gameDisplay = ['', '', '', '', '', '', '', '', '', ''];

    // startGame 
    currentPlayer = player1;

    cells.forEach(cells => {
        cells.addEventListener('click', e => {
            if (e.target.textContent == '' && gameStatus == 'game starting') {
                gameDisplay[e.target.id] = currentPlayer;
                console.log(gameDisplay);
                cells.classList.add(currentPlayer.marker);
                spotsRemaining -= 1;

                cells.textContent = currentPlayer.marker;
                (currentPlayer == player1) ? cells.style.color = '#eeabc6': cells.style.color = '#8cecae';
                checkTie();
                playerWins();
                changePlayerTurn();
            };
        });
    });


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

        function winnerDisplay(a, b, c) {
            if (currentPlayer == player1) {
                gameScore.innerHTML = `<span style="color:#eeabc6"; id="playerDisplay">${currentPlayer.name}</span> wins!`
                playerDisplay.style.color = '#eeabc6'
                cells[a].style.color = 'white';
                cells[a].style.background = "#f1b7ce";
                cells[b].style.color = 'white';
                cells[b].style.background = "#f1b7ce";
                cells[c].style.color = 'white';
                cells[c].style.background = "#f1b7ce";
            } else {
                gameScore.innerHTML = `<span style="color:#8cecae"; id="playerDisplay">${currentPlayer.name}</span> wins!`
                cells[a].style.color = 'white';
                cells[a].style.background = "#8cecae";
                cells[b].style.color = 'white';
                cells[b].style.background = "#8cecae";
                cells[c].style.color = 'white';
                cells[c].style.background = "#8cecae";
            }
            console.log(`${currentPlayer.name} wins!`);
            gameStatus = 'game over';
        };
    };

    const checkTie = () => {
        if(spotsRemaining <= 0){
            gameScore.style.fontSize = '38px'
            gameScore.innerHTML = "It's a tie!"
        }
    }

    resetBtn.addEventListener('click', () => {
        location.reload();
    });

});
GameBoard();