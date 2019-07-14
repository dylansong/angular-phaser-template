import { Injectable } from '@angular/core';
import { MonkeyModule } from '../monkey.module';

@Injectable()
export class GameScene extends Phaser.Scene{
  scoreText: Phaser.GameObjects.Text;
  constructor(){
    super({
      key: 'GameScene'
    })
  }

  public create():void{
    this.scoreText = this.add.text(50,50,'score:100',{
      fill: 'red',
      fontSize: 53
    })
  }
}