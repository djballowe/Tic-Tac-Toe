// Create Player Function
function gamers() {
    const name1 = document.getElementById('p1').value
    const name2 = document.getElementById('p2').value
    const submit = document.getElementById('submit');
    

    submit.addEventListener('click', 
    function() {
        Players(name1);
        name1.value = '';
    })
    
    const Players = (name, assignment) => {
        
        return {name, assignment};
    }

    const player1 = Players(name1, 'X');
    const player2 = Players(name2, 'O');
        console.log(player1);
        console.log(player2);
}

gamers();



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

