/*document.addEventListener('DOMContentLoaded', () => {
    const xButton = document.getElementById('x');
    const oButton = document.getElementById('o');
    const newGameMenu = document.querySelector('.container');
    const newGameButtons = document.querySelectorAll('.new-game button');
    const newGameSection = document.querySelector('.new-game');
    const gameBoard = document.createElement('section');
    gameBoard.classList.add('game-board');
    gameBoard.innerHTML = `
      <div class="head">
          <img src="./assets/logo.svg" alt="logo"> 
          <div class="turn"><p class="turn-symbol">X</p> <p class="turn-text">TURN</p></div>
          <button class="restart-button"><img src="./assets/icon-restart.svg" type="svg" alt="restart" class="restart"></button>
        </div>

        <div class="card-group">
          <button class="card">
            <svg class="x-icon" viewBox="0 0 24 24" width="64" height="64" xmlns="http://www.w3.org/2000/svg"></svg>
            <svg class="o-icon" viewBox="0 0 24 24" width="66" height="66" xmlns="http://www.w3.org/2000/svg"></svg>
          </button>
          <button class="card">
            <svg class="x-icon" viewBox="0 0 24 24" width="64" height="64" xmlns="http://www.w3.org/2000/svg"></svg>
            <svg class="o-icon" viewBox="0 0 24 24" width="66" height="66" xmlns="http://www.w3.org/2000/svg"></svg>
          </button>
          <button class="card">
            <svg class="x-icon" viewBox="0 0 24 24" width="64" height="64" xmlns="http://www.w3.org/2000/svg"></svg>
            <svg class="o-icon" viewBox="0 0 24 24" width="66" height="66" xmlns="http://www.w3.org/2000/svg"></svg>
          </button>
        </div>

        <div class="card-group">
          <button class="card">
            <svg class="x-icon" viewBox="0 0 24 24" width="64" height="64" xmlns="http://www.w3.org/2000/svg"></svg>
            <svg class="o-icon" viewBox="0 0 24 24" width="66" height="66" xmlns="http://www.w3.org/2000/svg"></svg>
          </button>
          <button class="card">
            <svg class="x-icon" viewBox="0 0 24 24" width="64" height="64" xmlns="http://www.w3.org/2000/svg"></svg>
            <svg class="o-icon" viewBox="0 0 24 24" width="66" height="66" xmlns="http://www.w3.org/2000/svg"></svg>
          </button>
          <button class="card">
            <svg class="x-icon" viewBox="0 0 24 24" width="64" height="64" xmlns="http://www.w3.org/2000/svg"></svg>
            <svg class="o-icon" viewBox="0 0 24 24" width="66" height="66" xmlns="http://www.w3.org/2000/svg"></svg>
          </button>
        </div>

        <div class="card-group">
          <button class="card">
            <svg class="x-icon" viewBox="0 0 24 24" width="64" height="64" xmlns="http://www.w3.org/2000/svg"></svg>
            <svg class="o-icon" viewBox="0 0 24 24" width="66" height="66" xmlns="http://www.w3.org/2000/svg"></svg>
          </button>
          <button class="card">
            <svg class="x-icon" viewBox="0 0 24 24" width="64" height="64" xmlns="http://www.w3.org/2000/svg"></svg>
            <svg class="o-icon" viewBox="0 0 24 24" width="66" height="66" xmlns="http://www.w3.org/2000/svg"></svg>
          </button>
          <button class="card">
            <svg class="x-icon" viewBox="0 0 24 24" width="64" height="64" xmlns="http://www.w3.org/2000/svg"></svg>
            <svg class="o-icon" viewBox="0 0 24 24" width="66" height="66" xmlns="http://www.w3.org/2000/svg"></svg>
          </button>
        </div>

    `;
    document.body.appendChild(gameBoard);

    xButton.addEventListener('click', () => {
        xButton.classList.add('active');
        oButton.classList.remove('active');
        localStorage.setItem('playerMark', 'X');
        localStorage.setItem('cpuMark', 'O');
        updateTurnSymbol('X');
        
    });

    oButton.addEventListener('click', () => {
        oButton.classList.add('active');
        xButton.classList.remove('active');
        localStorage.setItem('playerMark', 'O');
        localStorage.setItem('cpuMark', 'X');
        updateTurnSymbol('O');
    });
    

    newGameButtons.forEach(button => {
        button.addEventListener('click', () => {let currentPlayer = 'X'; // Assume 'X' starts the game
        
        function updateSymbol(button) {
            const card = button.closest('.card');
            if (!card) {
                return;
            }
            const xIcon = card.querySelector('.x-icon');
            if (!xIcon) {
                return;
            }
            const oIcon = card.querySelector('.o-icon');
            if (!oIcon) {
                return;
            }
        
            if (!xIcon.textContent && !oIcon.textContent) { // Check if the card is empty
                if (currentPlayer === 'X') {
                    xIcon.innerHTML = `<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/>
                    </svg>`;
                    currentPlayer = 'O'; // Switch to the next player
                } else if (currentPlayer === 'O') {
                    oIcon.innerHTML = `<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"/>
                    </svg>`;
                    currentPlayer = 'X'; // Switch to the next player
                }
            }
        }
            newGameMenu.style.display = 'none';
            newGameSection.style.display = 'none';
            startNewGame(button.classList.contains('vs-cpu') ? 'cpu' : 'player');
            document.querySelector('.container').style.display = 'none';
            document.querySelector('.game-board').style.display = 'block';
        });
    });

function startNewGame(opponent) {
  const playerMark = localStorage.getItem('playerMark') || 'X';
  const cpuMark = localStorage.getItem('cpuMark') || 'O';

  if (!opponent) {
    throw new Error('Opponent is required');
  }

  initializeGame(playerMark, cpuMark, opponent);
}

// Function to set all cards to display the O SVG symbol
// Function to set all cards to display the O SVG symbol

function initializeGame(playerMark, cpuMark, opponent) {
  const current = opponent === 'cpu' ? cpuMark : playerMark;
  const board = Array(9).fill(' ');
  
  return {
    player: playerMark,
    cpu: cpuMark,
    opponent: current,
    current: current,
    board,
    winner: null,
  };
}

function updateTurnSymbol(symbol) {
  const turnSymbol = document.querySelector('.turn-symbol');
  turnSymbol.textContent = symbol;
}
});

document.addEventListener('DOMContentLoaded', () => {
    const playerMark = localStorage.getItem('playerMark');

    const xIcons = document.querySelectorAll('.x-icon');
    const oIcons = document.querySelectorAll('.o-icon');

    function displayPlayerIcon(selectedSymbol) {
        hideAllIcons();
        toggleIconVisibility(selectedSymbol);
    }

    function hideAllIcons() {
        toggleIconVisibility('');
    }

    function toggleIconVisibility(symbol) {
        const icons = symbol === 'X' ? xIcons : oIcons;
        if (icons && icons.forEach) {
            icons.forEach(icon => icon.style.display = 'block');
        }
    }

    // Call the function to initially show the correct icon
    displayPlayerIcon(playerMark);

    // Call the function to initially show the correct icon
    displayPlayerIcon();

    function updateSymbol(button, symbol) {
        const card = button.closest('.card');
        const xIcon = card.querySelector('.x-icon');
        const oIcon = card.querySelector('.o-icon');

        xIcon.classList.toggle('selected', symbol === 'X');
        oIcon.classList.toggle('selected', symbol === 'O');
    }


    // Function to update the selected card with the chosen symbol
    function updateSelectedCardIcon(symbol) {
        const selectedCard = document.querySelector('.selected');
        if (!selectedCard) {
            return;
        }

        const iconSrc = symbol === 'X' ? './assets/icon-x.svg' : './assets/icon-o.svg';
        const iconAlt = symbol === 'X' ? 'X Icon' : 'O Icon';
        const iconClass = symbol === 'X' ? 'x-icon' : 'o-icon';

        selectedCard.innerHTML = `<img src="${iconSrc}" alt="${iconAlt}" class="${iconClass}">`;
    }
    
    // Call the function with the chosen symbol when X or O is selected
    updateSelectedCardIcon('X'); // For X symbol
    updateSelectedCardIcon('O'); // For O symbol
});*/


document.addEventListener('DOMContentLoaded', () => {
  const xButton = document.getElementById('x');
  const oButton = document.getElementById('o');
  const newGameMenu = document.querySelector('.container');
  const newGameButtons = document.querySelectorAll('.new-game button');
  const newGameSection = document.querySelector('.new-game');
  const gameBoard = document.querySelector('.game-board');
  const turnSymbol = document.querySelector('.turn-symbol');
  const restartButton = document.querySelector('.restart-button');
  const cards = document.querySelectorAll('.card');
  const xScoreText = document.querySelector('.x-score-text');
  const oScoreText = document.querySelector('.o-score-text');
  const tiesScoreText = document.querySelector('.ties-score-text');

  let currentPlayer = 'X';
  let board = Array(9).fill('');
  let isVsCpu = false;

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const switchPlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    turnSymbol.textContent = currentPlayer;
  };

  const checkWinner = () => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        if (board[a] === 'X') {
          xScoreText.textContent = parseInt(xScoreText.textContent) + 1;
        } else {
          oScoreText.textContent = parseInt(oScoreText.textContent) + 1;
        }
        alert(`${board[a]} wins!`);
        return true;
      }
    }
    if (!board.includes('')) {
      tiesScoreText.textContent = parseInt(tiesScoreText.textContent) + 1;
      alert('It\'s a tie!');
      return true;
    }
    return false;
  };

  const handleCardClick = (index) => {
    if (board[index] !== '') return;

    board[index] = currentPlayer;
    const icon = cards[index].querySelector(`.${currentPlayer.toLowerCase()}-icon`);
    icon.style.display = 'block';

    if (checkWinner()) {
      board = Array(9).fill('');
      cards.forEach(card => {
        card.querySelectorAll('img').forEach(img => img.style.display = 'none');
      });
    } else {
      switchPlayer();
      if (isVsCpu && currentPlayer === localStorage.getItem('cpuMark')) {
        makeCpuMove();
      }
    }
  };

  const makeCpuMove = () => {
    const availableMoves = board.map((mark, index) => mark === '' ? index : null).filter(index => index !== null);
    const move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    handleCardClick(move);
  };

  xButton.addEventListener('click', () => {
    xButton.classList.add('active');
    oButton.classList.remove('active');
    localStorage.setItem('playerMark', 'X');
    localStorage.setItem('cpuMark', 'O');
    currentPlayer = 'X';
    turnSymbol.textContent = currentPlayer;
  });

  oButton.addEventListener('click', () => {
    oButton.classList.add('active');
    xButton.classList.remove('active');
    localStorage.setItem('playerMark', 'O');
    localStorage.setItem('cpuMark', 'X');
    currentPlayer = 'O';
    turnSymbol.textContent = currentPlayer;
  });

  newGameButtons.forEach(button => {
    button.addEventListener('click', () => {
      newGameMenu.style.display = 'none';
      newGameSection.style.display = 'none';
      gameBoard.style.display = 'block';
      isVsCpu = button.classList.contains('vs-cpu');
      startNewGame(isVsCpu ? 'cpu' : 'player');
    });
  });

  cards.forEach((card, index) => {
    card.addEventListener('click', () => handleCardClick(index));
    card.addEventListener('mouseenter', () => {
      if (board[index] === '') {
        card.querySelector(`.${currentPlayer.toLowerCase()}-icon`).style.display = 'block';
      }
    });
    card.addEventListener('mouseleave', () => {
      if (board[index] === '') {
        card.querySelector(`.${currentPlayer.toLowerCase()}-icon`).style.display = 'none';
      }
    });
  });

  restartButton.addEventListener('click', () => {
    board = Array(9).fill('');
    cards.forEach(card => {
      card.querySelectorAll('img').forEach(img => img.style.display = 'none');
    });
    currentPlayer = 'X';
    turnSymbol.textContent = currentPlayer;
  });

  function startNewGame(opponent) {
    const playerMark = localStorage.getItem('playerMark') || 'X';
    const cpuMark = localStorage.getItem('cpuMark') || 'O';

    if (!opponent) {
      throw new Error('Opponent is required');
    }

    initializeGame(playerMark, cpuMark, opponent);
  }

  function initializeGame(playerMark, cpuMark, opponent) {
    const current = opponent === 'cpu' ? cpuMark : playerMark;
    board = Array(9).fill('');
    currentPlayer = 'X';
    turnSymbol.textContent = currentPlayer;
  }
});
