// Create and return the players names

function playerCreation() {
    const name1 = document.getElementById('p1');
    const name2 = document.getElementById('p2');
    
    submit.addEventListener('click', 
    function() {
        playerCreation();
        name1.value = '';
        name2.value = '';
    })

    function Players(n, character) {
        return {n, character};
    }
    
    const player1 = Players(name1.value, 'X');
    const player2 = Players(name2.value, 'O');
    return [player1, player2];
}

// control the state of the game when placing marks 

function stateOfPlay() {
    let counter = 0;
    const players = playerCreation();

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
        [0, 4, 6]
    ]


    const board = (index, type) => {
    
        if (type === 'X') {
            game[index] = 1;
        } else if (type === 'O') {
            game[index] = 2;
        }
        winCheck(game);
    }

    

    function winCheck() {
        return winningCombos.some(combination => {
            return combination.every(index => {
                
            })
        })
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
        console.log(`target id is ${id}`);
        const target = document.querySelector(`#${id}`);
        console.log(`turn counter is ${turn}`);
            
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
                console.log('odd');
                placeDivs(1, e.target.id);
                board(index, 'X');
                
            } else if (counter % 2 === 0) {
                console.log('even');
                placeDivs(2, e.target.id);
                board(index, 'O');

            }
        } else {
            console.log('you retard')
        }
    })
}

stateOfPlay();








// button listener functions for UI navigation

const buttonListener = document.querySelectorAll('button');
buttonListener.forEach((button) => {
    button.addEventListener('click', () => {
        const player = document.getElementById('menu');
        const game = document.getElementById('tic');
        const nameEntry = document.getElementById('entry');
        const difficulty = document.getElementById('difficulty');
        if (button.id === 'player') {
            // player function whatever
            player.style.display = 'none';
            nameEntry.style.display = 'block';
        } else if (button.id === 'play-again') {
            // reset the game whatever
        } else if (button.id === 'back') {
            // reset the game whatever
            player.style.display = 'block';
            game.style.display = 'none';
            difficulty.style.display = 'none';
        } else if (button.id === 'submit') {
            // start the game whatever
            nameEntry.style.display = 'none';
            game.style.display = 'block';
        } else if (button.id === 'computer') {
            player.style.display = 'none';
            difficulty.style.display = 'flex';
        } else if (button.id === 'normal') {
            // do normal AI whatever
            game.style.display = 'block'
            difficulty.style.display = 'none';
        } else if (button.id === 'impossible') {
            // do impossible AI whatever
            game.style.display = 'block';
            difficulty.style.display = 'none';
        }
    })
})

