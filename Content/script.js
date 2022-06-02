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

    const board = (index) => {
    let game = {0: 0, 1: 0, 2: 0,
                3: 0, 4: 0, 5: 0,
                6: 0, 7: 0, 8: 0}
    
    const winningCombos = [0, 4, 8,
                           8, 4, 0,
                           6, 4, 2,
                           2, 4, 6,
                           0, 3, 6,
                           6, 3, 0,
                           1, 4, 7,
                           7, 4, 1,
                           2, 5, 8,
                           8, 5, 2,
                           6, 7, 8,
                           8, 7, 6,
                           3, 4, 5,
                           5, 4, 3,
                           0, 1, 2,
                           2, 1, 0]
        return game;
}

    const game = board();
    console.log(game);



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
        if (e.target.getAttribute('data') === 'square' && e.target.childElementCount === 0) {
            counter ++;
            
            if (counter % 2 !=0) {
                console.log('odd');
                placeeDivs(1, e.target.id);
            } else if (counter % 2 === 0) {
                console.log('even');
                placeDivs(2, e.target.id);
            }
        } else {
            console.log('you retard')
        }
    })

}

stateOfPlay();








// button listener functions

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

