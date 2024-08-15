import Phaser from 'phaser';
// import { Boot } from './scenes/Boot';
import Game from './scenes/Game';
import GameOver from './scenes/GameOver';
// import { MainMenu } from './scenes/MainMenu';
// import { Preloader } from './scenes/Preloader';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 300,
    autoRound: false,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
      default: "arcade",
      arcade: {
        gravity: {y: 350},
        debug: false,
      }
    },
    scene: [
        Game,
        GameOver
    ],
};

const game = new Phaser.Game(config);
