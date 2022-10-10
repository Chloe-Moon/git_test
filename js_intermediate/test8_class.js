// 상속
// extends

class Car {
    constructor(color){
        this.color  = color;
        this.wheelssssssss = 4;
    }
    drive() {
        console.log("drive..'");
    }
    stop() {
        console.log("STOP");
    }
}

//car를 상속하여 bmw
class Bmw extends Car{
    constructor(color){
        super(color);
        this.navigation = 1;
    }
    park() {
        console.log("Park");
    }
    stop() {
        super.stop();
        console.log("STOP CHILD");
    }
}

const z4 = new Bmw("blue");

