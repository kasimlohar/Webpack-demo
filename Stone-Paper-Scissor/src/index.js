import './styles.css';
import { Game } from './game';

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    game.init();
});

// Enable HMR
if (module.hot) {
    module.hot.accept();
}
