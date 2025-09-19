const prompt = require('prompt-sync')();

class AreaAndPerimeterOfShapes {
    constructor(r, l, w, s1, s2, s3) {
        this.radiusOfCircle = r;
        this.lengthOfRectangle = l;
        this.widthOfRectangle = w;
        this.side1OfTriangle = s1;
        this.side2OfTriangle = s2;
        this.side3OfTriangle = s3;
    }

    calcAreaOfCircle() {
        return Math.PI * this.radiusOfCircle * this.radiusOfCircle;
    }

    calcPerimeterOfCircle() {
        return 2 * Math.PI * this.radiusOfCircle;
    }

    calcAreaOfRectangle() {
        return this.lengthOfRectangle * this.widthOfRectangle;
    }

    calcPerimeterOfRectangle() {
        return 2*(this.lengthOfRectangle * this.widthOfRectangle);
    }

    calcAreaOfTriangle() {
        const semiPerimeter = (this.side1OfTriangle + this.side2OfTriangle + this.side3OfTriangle)/2;
        return Math.sqrt(semiPerimeter * Math.abs(semiPerimeter - this.side1OfTriangle) * Math.abs(semiPerimeter - this.side2OfTriangle) * Math.abs(semiPerimeter - this.side3OfTriangle));
    }

    calcPerimeterOfTriangle() {
        return this.side1OfTriangle + this.side2OfTriangle + this.side3OfTriangle;
    }

    displayResult() {
        console.log(`Area and Perimeter of Circle of radius: ${this.radiusOfCircle.toFixed(2)} = ${this.calcAreaOfCircle().toFixed(2)}, ${this.calcPerimeterOfCircle().toFixed(2)}`);
        console.log(`Area and Perimeter of Rectangle of length: ${this.lengthOfRectangle.toFixed(2)} and width: ${this.widthOfRectangle.toFixed(2)} = ${this.calcAreaOfRectangle().toFixed(2)}, ${this.calcPerimeterOfRectangle().toFixed(2)}`);
        console.log(`Area and Perimeter of Triangle of lengths: ${this.side1OfTriangle.toFixed(2)}, ${this.side2OfTriangle.toFixed(2)} and ${this.side3OfTriangle.toFixed(2)} = ${this.calcAreaOfTriangle().toFixed(2)}, ${this.calcPerimeterOfTriangle().toFixed(2)}`);
    }
}

console.log("Please enter the radius of circle: ")
const radiusOfCircle = Number(prompt());

console.log("Please enter the length of rectangle: ")
const lengthOfRectangle = Number(prompt());

console.log("Please enter the width of rectangle: ")
const widthOfRectangle = Number(prompt());

console.log("Please enter the length of first side of triangle: ")
const lengthOfFirstSideOfTriangle = Number(prompt());

console.log("Please enter the length of second side of triangle: ")
const lengthOfSecondSideOfTriangle = Number(prompt());

console.log("Please enter the length of third side of triangle: ")
const lengthOfThirdSideOfTriangle = Number(prompt());

const obj = new AreaAndPerimeterOfShapes(radiusOfCircle, lengthOfRectangle, widthOfRectangle, lengthOfFirstSideOfTriangle, lengthOfSecondSideOfTriangle, lengthOfThirdSideOfTriangle);
obj.displayResult();