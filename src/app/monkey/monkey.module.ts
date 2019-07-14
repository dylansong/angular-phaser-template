import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhaserModule } from 'phaser-component-library';
import { MonkeyComponent } from './monkey.component';
import { MonkeyRoutingModule } from './monkey.routing.module';
import { GameScene } from './scenes/game.scene';


@NgModule({
  imports: [
    CommonModule, MonkeyRoutingModule, PhaserModule
  ],
  declarations: [MonkeyComponent],
  providers: [ GameScene ]
})
export class MonkeyModule { }