document.addEventListener('DOMContentLoaded', () => {
    const xButton = document.getElementById('x');
    const oButton = document.getElementById('o');
    const newGameMenu = document.querySelector('.container');
    const newGameButtons = document.querySelectorAll('.new-game button');
    const newGameSection = document.querySelector('.new-game');

    xButton.addEventListener('click', () => {
        xButton.classList.add('active');
        oButton.classList.remove('active');
        localStorage.setItem('playerMark', 'X');
        localStorage.setItem('cpuMark', 'O');
    });

    oButton.addEventListener('click', () => {
        oButton.classList.add('active');
        xButton.classList.remove('active');
        localStorage.setItem('playerMark', 'O');
        localStorage.setItem('cpuMark', 'X');
    });

    newGameButtons.forEach(button => {
        button.addEventListener('click', () => {
            newGameMenu.style.display = 'none';
            newGameSection.style.display = 'none';
            startNewGame(button.classList.contains('vs-cpu') ? 'cpu' : 'player');
        });
    });

    function startNewGame(opponent) {
        const playerMark = localStorage.getItem('playerMark') || 'X';
        const cpuMark = localStorage.getItem('cpuMark') || 'O';
        console.log(`New game started. Player mark: ${playerMark}, CPU mark: ${cpuMark}, Opponent: ${opponent}`);
        // Initialize the game logic here
    }
});