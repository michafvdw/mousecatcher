import * as PIXI from "pixi.js";
import { Game } from "./Game";

export class Enemy extends PIXI.Sprite {
  protected game: Game;
  public speed: number = 0;

  constructor(texture: PIXI.Texture, game: Game) {
    super(texture);
    //super(game)
    this.game = game;
  }

  public onClick() {
    console.log("Click");
    this.game.pixi.stage.removeChild(this);
  }
 
  public keepInScreen() {
    if (this.getBounds().left > this.game.pixi.screen.right) {
      this.x = -this.getBounds().width;
    }
  }

}