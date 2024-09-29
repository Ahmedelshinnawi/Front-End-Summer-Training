class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("Cannot create an instance of abstract class Shape.");
        }
    }
}

class Rectangle extends Shape {
    static instanceCount = 0;

    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;

        Rectangle.instanceCount++;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }

    displayInfo() {
        return `Rectangle - Width: ${this.width}, Height: ${this.height}, Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }

    toString() {
        return `Rectangle - Width: ${this.width}, Height: ${this.height}, Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }

    static getInstanceCount() {
        return Rectangle.instanceCount;
    }
}

class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }

    toString() {
        return `Square - Side Length: ${this.width}, Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }
}

const rect1 = new Rectangle(20, 50);
rect1.displayInfo();
console.log(rect1.toString());

const square1 = new Square(10);
square1.displayInfo();
console.log(square1.toString());


console.log(`Number of Rectangle/Square instances created: ${Rectangle.getInstanceCount()}`);
