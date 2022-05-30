const buttonListener = document.querySelectorAll('button');
const player = document.getElementById('menu');
const game = document.getElementById('tic');


buttonListener.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'player' || button.id === 'computer') {
            // player function whatever
            player.style.display = 'none';
            game.style.display = 'block';

        } else if (button.id === 'play-again') {
            // reset the game whatever
        } else if (button.id === 'back') {
            // reset the game whatever
            player.style.display = 'block';
            game.style.display = 'none';
        }
    })
})