const prompt = require('prompt-sync')();

class SolidSquarePattern {
    constructor(rCount) {
        this.rowCount = rCount;
    }

    printSolidSquare() {
        const colCount = this.rowCount;
        for(let row=1; row<=this.rowCount; row++) {
            for(let col=1; col<=colCount; col++) {
                process.stdout.write("* ");
            }
            console.log();
        }
    }
}

console.log("Please enter the number of rows required in the solid square pattern: ");
const rowCount = Number(prompt());

const obj = new SolidSquarePattern(rowCount);
obj.printSolidSquare();