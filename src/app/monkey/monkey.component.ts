import { Component, OnInit } from '@angular/core';
import { GameScene } from './scenes/game.scene';
import AUTO = Phaser.AUTO;

@Component({
  selector: 'app-monkey',
  template: '<phaser-component (gameReady)="onGameReady($event)" [gameConfig]="config" [Phaser]="phaser"></phaser-component>',
  styles: ['']
})
export class MonkeyComponent {

public readonly config: Phaser.Types.Core.GameConfig = {
      title: 'hello',
      type: AUTO,
      width: window.innerWidth,
      height: window.innerWidth,
  };

  public readonly phaser = Phaser;

  constructor(public gameScene: GameScene) { }


  onGameReady(game: Phaser.Game) {
    game.scene.add('GameScene', this.gameScene, true);
  }

}