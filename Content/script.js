// Create and return the players names
const name1 = document.getElementById('p1');
const name2 = document.getElementById('p2');

function playerCreation(name1, name2) {

    function Players(n, character) {
        return {n, character};
    }
    
    const player1 = Players(name1, 'X');
    const player2 = Players(name2, 'O');
    return [player1, player2];
}

function clearForm() {
    name1.value = '';
    name2.value = '';
}

// control the state of the game when placing marks 

function stateOfPlay() {
    
    let counter = 0;

    const players = playerCreation(name1.value, name2.value);
    
    const game = [0, 0, 0,
                  0, 0, 0,
                  0, 0, 0]

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const board = (index, type) => {
    
        if (type === 'X') {
            game[index] = 1;
        } else if (type === 'O') {
            game[index] = 2;
        }
        winCheck(game);
    }
 

    function winCheck(gamers) {
        const allCells = document.querySelector('.board');
        const displayWinner = document.getElementById('win');
        const container = document.getElementById('container');
        const playAgain = document.getElementById('play-again');
        const back = document.getElementById('game-back');

        for (let i = 0; i < winningCombos.length; i++) {
            if (game[winningCombos[i][0]] === 1 && game[winningCombos[i][1]] === 1 && game[winningCombos[i][2]] === 1) {
                allCells.classList.add('boardDisable');
                allCells.classList.remove('board');
                displayWinner.textContent = `${players[0].n} Wins!`
                container.style.display = 'block';
                playAgain.style.display = 'block'
                back.style.display = 'none'
                clearForm();
                
            }

            if (game[winningCombos[i][0]] === 2 && game[winningCombos[i][1]] === 2 && game[winningCombos[i][2]] === 2) {
                allCells.classList.add('boardDisable');
                allCells.classList.remove('board');
                displayWinner.textContent = `${players[1].n} Wins!`
                container.style.display = 'block';
                playAgain.style.display = 'block';
                back.style.display = 'none';
                clearForm();
                

            }
        }
        if (counter === 9) {
            allCells.classList.add('boardDisable');
            allCells.classList.remove('board');
            displayWinner.textContent = `Tie!`
            container.style.display = 'block';
            playAgain.style.display = 'block';
            back.style.display = 'none';
            clearForm();
        }
    }

    
    
    const divFactory = (type, attributes, text) => {
        const create = document.createElement(type);
        create.textContent = text;
        for (key in attributes) {
            create.setAttribute(key, attributes[key]);
        }
        return create;
    }

    
    
     const placeDivs = (turn, id) => {
        const target = document.querySelector(`#${id}`);
            
            if (turn === 1 && target.childElementCount === 0) {
                target.appendChild(divFactory('div', {class: 'draw-x'}, 'X'));
            } else if (turn === 2 && target.childElementCount === 0) {
                target.appendChild(divFactory('div', {class: 'draw-o',}, 'O'));
            }
        }
        


    document.querySelector('body').addEventListener('click', function(e) {
        const index = e.target.getAttribute('data-type');
        if (e.target.getAttribute('data') === 'square' && e.target.childElementCount === 0) {
            counter ++;
            
            if (counter % 2 !=0) {
                placeDivs(1, e.target.id);
                board(index, 'X');
                
            } else if (counter % 2 === 0) {
                placeDivs(2, e.target.id);
                board(index, 'O');
            }
        } 
    })
}

function vsAi() {
    let counter = 0;
    
    const game = [0, 0, 0,
                  0, 0, 0,
                  0, 0, 0]

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const possibleMoves = {
        0: 'top-left',
        1: 'top-middle',
        2: 'top-right',
        3: 'middle-left',
        4: 'middle-middle',
        5: 'middle-right',
        6: 'bottom-left',
        7: 'bottom-middle',
        8: 'bottom-right'
    }

    const board = (index, type) => {
    
        if (type === 'X') {
            game[index] = 1;
        } else if (type === 'O') {
            game[index] = 2;
        }
        console.log(game);
        winCheck(game);
    }
 

    function winCheck(gamers) {
        const allCells = document.querySelector('.board');
        const displayWinner = document.getElementById('win');
        const container = document.getElementById('container');
        const playAgain = document.getElementById('play-again');
        const back = document.getElementById('game-back');
        console.log(`turn ${counter}`)

        for (let i = 0; i < winningCombos.length; i++) {
            if (game[winningCombos[i][0]] === 1 && game[winningCombos[i][1]] === 1 && game[winningCombos[i][2]] === 1) {
                allCells.classList.add('boardDisable');
                allCells.classList.remove('board');
                displayWinner.textContent = `You Win!`
                container.style.display = 'block';
                playAgain.style.display = 'block'
                back.style.display = 'none'
            }

            if (game[winningCombos[i][0]] === 2 && game[winningCombos[i][1]] === 2 && game[winningCombos[i][2]] === 2) {
                allCells.classList.add('boardDisable');
                allCells.classList.remove('board');
                displayWinner.textContent = `Computer Wins!`
                container.style.display = 'block';
                playAgain.style.display = 'block';
                back.style.display = 'none';
            } else if (counter === 9) {
                allCells.classList.add('boardDisable');
                allCells.classList.remove('board');
                displayWinner.textContent = `Tie!`
                container.style.display = 'block';
                playAgain.style.display = 'block';
                back.style.display = 'none';
                clearForm();
            }
        }
    }

    
    
    const divFactory = (type, attributes, text) => {
        const create = document.createElement(type);
        create.textContent = text;
        for (key in attributes) {
            create.setAttribute(key, attributes[key]);
        }
        return create;
    }

    
    
     const placeDivs = (turn, id) => {
        const target = document.querySelector(`#${id}`);
            
            if (turn === 1 && target.childElementCount === 0) {
                target.appendChild(divFactory('div', {class: 'draw-x'}, 'X'));
            } else if (turn === 2 && target.childElementCount === 0) {
                target.appendChild(divFactory('div', {class: 'draw-o',}, 'O'));
            }
        }

    function aiChoice(humanChoice) {
        counter++;
        humanInt = parseInt(humanChoice);
        console.log(humanChoice);
        if (counter === 2) {
            newIndex = Math.floor(Math.random() * (8 - 0) + 0);
            if (newIndex === humanInt) {
                newIndex += 1;
                console.log(newIndex);
                board(newIndex, 'O');
                placeDivs(2, possibleMoves[newIndex]);
                
            } else {
                console.log(newIndex);
                board(newIndex, 'O');
                placeDivs(2, possibleMoves[newIndex]);
                
            }  
        } 
        if (counter > 2) {
            let moveCheck = 0;
            
            for (let i = 0; i < winningCombos.length; i++) {
                if (game[winningCombos[i][0]] === 2 && game[winningCombos[i][1]] === 2 && moveCheck === 0 && document.querySelector(`#${possibleMoves[winningCombos[i][2]]}`).childElementCount === 0) {
                    console.log('winning O statement');
                    board([winningCombos[i][2]], 'O');
                    placeDivs(2, possibleMoves[winningCombos[i][2]]);
                    moveCheck++;
                    break;
                    }
                }   
                for (let i = 0; i < winningCombos.length; i++) {
                    if (game[winningCombos[i][0]] === 1 && game[winningCombos[i][1]] === 1 && moveCheck === 0 && document.querySelector(`#${possibleMoves[winningCombos[i][2]]}`).childElementCount === 0) {
                            console.log('block winner');
                            console.log(possibleMoves[winningCombos[i][2]]);
                            board([winningCombos[i][2]], 'O');
                            placeDivs(2, possibleMoves[winningCombos[i][2]]);
                            moveCheck++;
                            break;
                } 
            }
                for (let i = 0; i < winningCombos.length; i++) {
                    if (moveCheck === 0 && document.querySelector(`#${possibleMoves[winningCombos[i][1]]}`).childElementCount === 0) {
                        console.log('last statement');
                        console.log(possibleMoves[winningCombos[i][1]]);
                        board([winningCombos[i][1]], 'O');
                        placeDivs(2, possibleMoves[winningCombos[i][1]]);
                        moveCheck++;
                        break;
                }
            }
            moveCheck--;
            console.log(moveCheck);
        }
    }


    document.querySelector('body').addEventListener('click', function(e) {
        const index = e.target.getAttribute('data-type');
        if (e.target.getAttribute('data') === 'square' && e.target.childElementCount === 0) {
            counter ++;
            placeDivs(1, e.target.id);
            board(index, 'X');
            aiChoice(index);
        }
    })

    //Math.floor(Math.random() * (8 - 0) + 0
}

vsAi();









// button listener functions for UI navigation

const buttonListener = document.querySelectorAll('button');
buttonListener.forEach((button) => {
    button.addEventListener('click', () => {
        const player = document.getElementById('menu');
        const game = document.getElementById('tic');
        const nameEntry = document.getElementById('entry');
        const difficulty = document.getElementById('difficulty');
        if (button.id === 'player') {
            
            player.style.display = 'none';
            nameEntry.style.display = 'block';
        } else if (button.id === 'game-back') {
            
            nameEntry.style.display = 'block';
            game.style.display = 'none';
            difficulty.style.display = 'none';
        } else if (button.id === 'submit') {
            if (name1.value.length === 0 || name2.value.length === 0) {
                alert('Please Enter Name');
            } else {
                nameEntry.style.display = 'none';
                game.style.display = 'block';
                stateOfPlay();
            }
        } else if (button.id === 'computer') {
            player.style.display = 'none';
            game.style.display = 'block';
            vsAi();
        }
    })
})

