export class Game {
    constructor() {
        this.choices = ['stone', 'paper', 'scissors'];
        this.scores = {
            player: 0,
            computer: 0
        };
    }

    init() {
        // Add click handlers to choice buttons
        document.querySelectorAll('.choice').forEach(button => {
            button.addEventListener('click', (e) => {
                this.playRound(e.target.dataset.choice);
            });
        });
    }

    getComputerChoice() {
        return this.choices[Math.floor(Math.random() * this.choices.length)];
    }

    determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) return 'tie';
        
        const winConditions = {
            stone: 'scissors',
            paper: 'stone',
            scissors: 'paper'
        };

        return winConditions[playerChoice] === computerChoice ? 'player' : 'computer';
    }

    updateScore(winner) {
        if (winner === 'player') this.scores.player++;
        if (winner === 'computer') this.scores.computer++;
        
        document.getElementById('player-score').textContent = `Player: ${this.scores.player}`;
        document.getElementById('computer-score').textContent = `Computer: ${this.scores.computer}`;
    }

    playRound(playerChoice) {
        const computerChoice = this.getComputerChoice();
        const winner = this.determineWinner(playerChoice, computerChoice);

        // Update computer's choice display
        document.getElementById('computer-choice').textContent = 
            `Computer chose: ${computerChoice}`;

        // Update result message
        const resultElement = document.getElementById('result');
        if (winner === 'tie') {
            resultElement.textContent = "It's a tie!";
        } else {
            resultElement.textContent = `${winner === 'player' ? 'You win!' : 'Computer wins!'}`;
        }

        this.updateScore(winner);
    }
}
