CanvasRenderingContext2D.prototype.drawPoint  = function(x, y, size, color) {
    this.fillStyle = "#"+color.toString(16);
    this.fillRect(x, y, size, size);
}

const world = document.createElement("canvas"),
    pen = world.getContext("2d"),
    map_size = 20;
var cellSize = 1;
/**
 * @type { Array<Array<GameObject>> }
 */
var map = [/* x */];
for (let x = 0; x < map_size; x++)
    map.push([].fill(null, 0, map_size));

function getAbsSize(string, css) {
    let el = document.createElement("div");
    el.style.height = string;
    document.body.appendChild(el);
    let float = parseFloat($(el).css("height"));
    document.body.removeChild(el);
    return float;
}

function startGame() {
    pen.canvas.width = getAbsSize("80vh");
    pen.canvas.height = getAbsSize("80vh");
    world.height = world.width;
    world.style.border = "1px solid black";
    world.style.imageRendering = "pixelated";
    world.setAttribute("center", "true");
    document.body.appendChild(world);
    func();
    // // document.body.innerHTML += `<div id="inventory" style="height:80vh; width: 10vw; border: 1px solid black; top: 8px; position: absolute;"></div>`;    
    // window.addEventListener("resize", e => { 
    //     func(e);
    //     $("#inventory").css("left", ( parseInt( $("canvas").css("left") ) + parseInt( $("canvas").css("width") ) ) * 1.05 + "px");
    // });
    window.dispatchEvent(new Event('resize'));
    cellSize = world.width / map_size;
    fillWorld(Grass);
    setElMap(new Wire(10, 10));

    setElMap(new Wire(11, 10));
    setElMap(new Wire(12, 10));

    setElMap(new Wire(13, 10));
    setElMap(new Wire(13, 11));

    setElMap(new Wire(13, 12));
    setElMap(new Wire(11, 12));

    setElMap(new Wire(13, 13));
    setElMap(new Wire(12, 13));

    setElMap(new Wire(11, 13));
    setElMap(new Wire(11, 11));

    setElMap(new Generator(8, 10));
}

/**
 * @param {GameObject} gameObject 
 */
function fillWorld(gameObjectType) {
    for (let x = 0; x < map_size; x++) 
    for (let y = 0; y < map_size; y++) {
        map[x][y] = new gameObjectType(x, y);
        pen.drawPoint(x * cellSize, y * cellSize, cellSize, map[x][y].color);
    }
}

/**
 * @param {GameObject} gameObject 
*/
function setElMap(gameObject) {
    if (gameObject.size == 1)
        map[gameObject.x][gameObject.y] = gameObject;
    else if (gameObject.size > 1 && gameObject.size % 2 == 0) 
        for (let x = gameObject.x - Math.floor(gameObject.size / 2); x < gameObject.x + Math.floor(gameObject.size / 2); x++) 
            for (let y = gameObject.y - Math.floor(gameObject.size / 2); y < gameObject.y + Math.floor(gameObject.size / 2); y++) 
                    map[x][y] = gameObject;
    else if (gameObject.size > 1 && gameObject.size % 2 != 0) 
        for (let x = gameObject.x - Math.floor(gameObject.size / 2); x < gameObject.x + Math.floor(gameObject.size / 2) + 1 ; x++) 
            for (let y = gameObject.y - Math.floor(gameObject.size / 2); y < gameObject.y + Math.floor(gameObject.size / 2) + 1; y++) 
                    map[x][y] = gameObject;
}

function getElMap(x, y) {
    return map[x][y];
}

/** 
 * @typedef { int } Hex
*/
/**
 * @param {Hex} r
 * @param {Hex} g
 * @param {Hex} b
 */
function parseRGB(r, g, b) {
    return parseInt("0x" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1));
}

class GameObject {
    /**
     * @param {Number} x 
     * @param {Number} y 
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 1;
        this.color = 0xffffffff;
        this.canReplace = false;
    }
    /**
     * @param {GameObject} gameObject 
     */
    useReaction(gameObject) { };
    /**
     * @param {int | string} e 
     */
    onActive(e) { }
    /**
     * @param {int | string | null} e 
     */
    onInactive(e) { } 
}

class GameEnergyObject extends GameObject {
    /**
     * @param {Number} x 
     * @param {Number} y 
    */
   constructor(x, y) {
       super(x, y);
       this.x = x;
       /**
        * @type { Array<String> }
        */
       this.usefulObjects = [];
       this.backDir = "null";
    }
    /**
     * @param {GameEnergyObject} gameEnergyObject
     * @param {usefulObjects} type
    */
    useReaction(gameEnergyObject, type) { };
    /**
     * 
     * @param {int | string} e 
     */
    onActive(e) { }
    onInactive(e) { } 
}

class Grass extends GameObject {
    static canReplace = true;
    /**
     * @param {Number} x 
     * @param {Number} y 
    */
   constructor(x, y) {
       super(x, y);
       this.color = 0x99bb0c;
    }
}

class Generator extends GameEnergyObject {
    /**
     * @param {Number} x 
     * @param {Number} y 
    */
   constructor(x, y) {
       super(x, y);
       this.usefulObjects = ["Wire"];
       this.size = 3;
       this.color = 0xf1a151;
       this.enegry = 0.1; // genereted
       
    }
    onActive(e) { }
    onInactive(e) { } 
    useReaction (gameEnergyObject) {
        if (this.enegry > 0) { gameEnergyObject.onActive(this.enegry);}
        else this.onInactive();
    }
}

class Wire extends GameEnergyObject {
    /**
     * @param {Number} x 
     * @param {Number} y 
    */
   constructor(x, y) {
       super(x, y);
       this.usefulObjects = ["Wire"];
       this.color = 0xC1 + 0x0041 + 0x000051;
       this.enegry = 0; // eu
       this.maxEnergy = 10;
    }
    useReaction(gameEnergyObject) {
        if (this.enegry > 0.01) { 
            gameEnergyObject.onActive(this.enegry);
            this.enegry -= this.enegry * 0.8;
        }
        else this.onInactive();
    }
    onActive(e) { 
        this.color = parseRGB(0xcc << this.enegry, 0x11, 0x11);
        this.enegry += e;
        if (this.enegry >= this.maxEnergy) this.enegry = this.maxEnergy;
    }
    onInactive(e) { 
        this.color = 0xf15161;
        this.enegry *= 0.5;
    } 
}

function updateGame() {
    pen.clearRect(0, 0, world.width, world.height);
    for (let x = 0; x < map_size; x++) 
        for (let y = 0; y < map_size; y++) {
            if (map[x][y].constructor.name == "Generator" || map[x][y].constructor.name == "Wire") {   
                let center = map[x][y];
                let left = map[x-1][y];
                let top = map[x][y-1];
                let right = map[x+1][y];
                let bottom = map[x][y+1];

                // console.log(center, left, top, right, bottom);
                
                if (center.backDir == "right") {
                    // left priority
                    if (center.usefulObjects.includes(left.constructor.name))
                    {   
                        center.useReaction(left);
                        left.backDir = "right";
                    }
                    // top
                    else if (center.usefulObjects.includes(top.constructor.name))
                    {
                        center.useReaction(top);
                        top.backDir = "bottom";
                    }
                    // bottom
                    else if (center.usefulObjects.includes(bottom.constructor.name))
                    {
                        center.useReaction(bottom);
                        bottom.backDir = "top";
                    }
                } else if (center.backDir == "left") {
                    // right priority
                    if (center.usefulObjects.includes(right.constructor.name))
                    {   
                        center.useReaction(right);
                        right.backDir = "left";
                    }
                    // top
                    else if (center.usefulObjects.includes(top.constructor.name))
                    {
                        center.useReaction(top);
                        top.backDir = "bottom";
                    }
                    // bottom
                    else if (center.usefulObjects.includes(bottom.constructor.name))
                    {
                        center.useReaction(bottom);
                        bottom.backDir = "top";
                    }
                } else if (center.backDir == "top") { 
                    // bottom priority 
                    if (center.usefulObjects.includes(bottom.constructor.name))
                    {
                        center.useReaction(bottom);
                        bottom.backDir = "top";
                    }
                    // right
                    else if (center.usefulObjects.includes(right.constructor.name))
                    {
                        center.useReaction(right);
                        right.backDir = "left";
                    } 
                    // left
                    else if (center.usefulObjects.includes(left.constructor.name))
                    {   
                        center.useReaction(left);
                        left.backDir = "right";
                    }
                } else if (center.backDir == "bottom") {
                    // top priority
                    if (center.usefulObjects.includes(top.constructor.name))
                    {
                        center.useReaction(top);
                        top.backDir = "top";
                    }
                    // right
                    else if (center.usefulObjects.includes(right.constructor.name))
                    {
                        center.useReaction(right);
                        right.backDir = "left";
                    } 
                    // left
                    else if (center.usefulObjects.includes(left.constructor.name))
                    {   
                        center.useReaction(left);
                        left.backDir = "right";
                    }
                } else if (center.backDir == "null") {
                    // null priority
                    // left
                    if (center.usefulObjects.includes(left.constructor.name))
                    {   
                        center.useReaction(left);
                        left.backDir = "right";
                    }
                    // right
                    else if (center.usefulObjects.includes(right.constructor.name))
                    {   
                        center.useReaction(right);
                        right.backDir = "left";
                    }
                    // top
                    else if (center.usefulObjects.includes(top.constructor.name))
                    {
                        center.useReaction(top);
                        top.backDir = "bottom";
                    }
                    // bottom
                    else if (center.usefulObjects.includes(bottom.constructor.name))
                    {
                        center.useReaction(bottom);
                        bottom.backDir = "top";
                    }
                }
            } 
            pen.drawPoint(x * cellSize, y * cellSize, cellSize, map[x][y].color);
    }
    // console.log(getElMap(13, 12),
    // getElMap(12, 12));

    // let grass = new Grass(8, 10);
    // grass.size = 3;
    // setElMap(grass);
}