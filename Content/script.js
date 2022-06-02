// Create Player Function


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

function stateOfPlay() {
    let counter = 0;
    const markX = document.createElement('div');
    const markO = document.createElement('div');
    
    const makeDivs = (turn, id) => {
        const target = document.getElementById(`${id}`);
        if (turn === 1 && target.childElementCount === 0) {
            document.querySelector(`#${id}`);
            markX.classList.add('draw-x');
            markX.textContent = 'X'
            target.appendChild(markX);
        } else if (turn === 2 && target.childElementCount === 0) {
            document.querySelector(`#${id}`);
            markO.classlist.add('draw-o');
            markO.textContent = 'X'
            target.appendChild(markO);
        } else {
            return 'you retard';
        }
    }

    document.querySelector('body').addEventListener('click', function(e) {
        if (e.target.getAttribute('data') === 'square') {
            counter ++;
            
            if (counter % 2 !=0) {
                console.log('odd');
                makeDivs(1, e.target.id);
            } else if (counter % 2 === 0) {
                console.log('even');
                makeDivs(2, e.target.id);
            }
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

