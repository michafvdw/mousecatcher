//const app = new PIXI.Application();
//document.body.appendChild(app.view);

import * as PIXI from "pixi.js"
import catImage from "./images/cat.png"
import mouseImage from "./images/bubble.png"
import dogImage from "./images/dog.png"
import bgImage from "./images/background.jpg"

//const texture = PIXI.Texture.from('./images/cat.png');


export class Game {

    pixi: PIXI.Application
    bgImage:PIXI.Sprite
    cat:PIXI.Sprite
    anotherCat:PIXI.Sprite

    dog:PIXI.Sprite
    anotherDog:PIXI.Sprite

    mouse:PIXI.Sprite
    anotherMouse:PIXI.Sprite



    constructor() {
        this.pixi = new PIXI.Application({ backgroundColor: bgImage, width: 900, height: 500 })
        document.body.appendChild(this.pixi.view)
        
        this.pixi.loader
            .add("catTexture", catImage)
            .add("dogTexture", dogImage)
            .add("mouseTexture", mouseImage)
            .add("backgroundTexture", bgImage)

        this.pixi.loader.load(() => this.doneLoading())

    }

    doneLoading() {
        console.log("all textures loaded!")

        
        this.bgImage = new PIXI.Sprite(this.pixi.loader.resources["backgroundTexture"].texture!)
        this.bgImage.tint = Math.random() * 0xFFFFFF;
        this.bgImage.x = 900;
        this.bgImage.y =500;
        this.pixi.stage.addChild(this.bgImage)

        //this.cat.tint = Math.random() * 0xFFFFFF;
        //this.cat.x = Math.random() * screen.width;
        //this.cat.y = Math.random() * screen.height;
        this.cat = new PIXI.Sprite(this.pixi.loader.resources["catTexture"].texture!)
        this.cat.tint = Math.random() * 0xFFFFFF;
        this.cat.x = Math.random() * screen.width;
        this.cat.y = Math.random() * screen.height;
        this.pixi.stage.addChild(this.cat)

        
        //this.anothercat.tint = Math.random() * 0xFFFFFF;
        //this.anothercat.x = Math.random() * screen.width;
        //this.anothercat.y = Math.random() * screen.height;
        this.anotherCat = new PIXI.Sprite(this.pixi.loader.resources["catTexture"].texture!)
        this.anotherCat.tint = Math.random() * 0xFFFFFF;
        this.anotherCat.x = Math.random() * screen.width;
        this.anotherCat.y = Math.random() * screen.height;
        this.pixi.stage.addChild(this.anotherCat)

        this.dog = new PIXI.Sprite(this.pixi.loader.resources["dogTexture"].texture!)
        this.dog.tint = Math.random() * 0xFFFFFF;
        this.dog.x = Math.random() * screen.width;
        this.dog.y = Math.random() * screen.height;
        this.pixi.stage.addChild(this.dog)

        
        //this.anothercat.tint = Math.random() * 0xFFFFFF;
        //this.anothercat.x = Math.random() * screen.width;
        //this.anothercat.y = Math.random() * screen.height;
        this.anotherDog = new PIXI.Sprite(this.pixi.loader.resources["dogTexture"].texture!)
        this.anotherDog.tint = Math.random() * 0xFFFFFF;
        this.anotherDog.x = Math.random() * screen.width;
        this.anotherDog.y = Math.random() * screen.height;
        this.pixi.stage.addChild(this.anotherDog)

        this.mouse = new PIXI.Sprite(this.pixi.loader.resources["mouseTexture"].texture!)
        this.mouse.tint = Math.random() * 0xFFFFFF;
        this.mouse.x = Math.random() * screen.width;
        this.mouse.y = Math.random() * screen.height;
        this.pixi.stage.addChild(this.mouse)
        
        //this.anotherCat.tint = Math.random() * 0xFFFFFF;
        //this.anotherCat.x = Math.random() * screen.width;
        //this.anotherCat.y = Math.random() * screen.height;
        this.anotherMouse = new PIXI.Sprite(this.pixi.loader.resources["mouseTexture"].texture!)
        this.anotherMouse.tint = Math.random() * 0xFFFFFF;
        this.anotherMouse.x = Math.random() * screen.width;
        this.anotherMouse.y = Math.random() * screen.height;
        this.pixi.stage.addChild(this.anotherMouse)
        


        this.pixi.ticker.add((delta) => this.update(delta))

        
    }

    update(delta : number) {

        this.cat.x -= 2
        this.anotherCat.x -= 3

        this.dog.x -= 2
        this.anotherDog.x -= 3

        this.mouse.x -= 4
        this.anotherMouse.x -= 5
    }
}

new Game()