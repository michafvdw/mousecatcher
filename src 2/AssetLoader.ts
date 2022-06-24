import * as PIXI from "pixi.js"
import { Game } from "./Game"


import catImage from "./images/cat.png"
//import bulletImage from "../images/bullet.png"
//import blockImage from "../images/block3.png"
import bgImage from "./images/background.jpg"
//import monitorImage from "../images/wave.png"
//import scanImage from "../images/scanlines.png"

export class AssetLoader extends PIXI.Loader {

    private graphics:PIXI.Graphics
    private game:Game

    constructor(game:Game) {
        super()

        this.game = game
        this.graphics = new PIXI.Graphics()
        game.pixi.stage.addChild(this.graphics)

        this.add("cat", catImage)
            .add("background", bgImage)
            //.add("bullet", bulletImage)
            //.add("block", blockImage)
            //.add("scanTexture", scanImage)
            //.add("waveTexture", monitorImage)
            .add("spritesheet", "explosion.json")


        this.onProgress.add((loader) => this.showProgress(loader))
        this.onError.add((arg) => { console.error(arg) })
        this.load(() => {
            this.graphics.destroy()
            //this.game.doneLoading()
        })
    }

    private showProgress(loader: PIXI.Loader) {
        console.log(`Loading ${loader.progress}%`)
        let offset = 50
        let barWidth = (this.game.pixi.screen.width - (offset * 2)) * (loader.progress/100)
        this.graphics.clear()
        this.graphics.beginFill(0x32DE49)
        this.graphics.drawRect(offset, this.game.pixi.screen.height/2 - 20, barWidth, 40)
        this.graphics.endFill()
    }
  
}