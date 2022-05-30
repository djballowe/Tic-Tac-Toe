// three main functions game, player, and game board objects








































// button listener functions
const buttonListener = document.querySelectorAll('button');

buttonListener.forEach((button) => {
    button.addEventListener('click', () => {
        const player = document.getElementById('menu');
        const game = document.getElementById('tic');
        const nameEntry = document.getElementById('entry');
        const computer = document.getElementById('computer')
        switch (button.id) {
            case 'player':
                player.style.display = 'none';
                nameEntry.style.display = 'block';
            case 'computer':
                player.style.display = 'none';
                computer.style.display = 'block';
            case 'submit':
                game.style.display = 'block';
                nameEntry.style.display = 'none';
            case 'back':
                location.reload();

        }
    })
})

