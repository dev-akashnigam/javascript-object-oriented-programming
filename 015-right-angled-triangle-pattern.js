const prompt = require('prompt-sync')();

class RightAngledTrianglePattern {
    constructor(rc) {
        this.rowCount = rc;
    }

    printRightAngledTriangle() {
        for(let row=1; row<=this.rowCount; row++) {
            for(let col=1; col<=row; col++) {
                process.stdout.write("* ");
            }
            console.log();
        }
    }
}

console.log("Please enter the number of rows required in the right angled triangle: ");
const rowCount = Number(prompt());

const obj = new RightAngledTrianglePattern(rowCount);
obj.printRightAngledTriangle();