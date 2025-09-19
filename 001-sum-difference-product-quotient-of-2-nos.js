// Read two numbers and print their sum, difference, product, and quotient.
const prompt = require('prompt-sync')();

class SumDifferenceProductQuotientOf2Nos {
    constructor(x, y) {
        this.firstNum = x;
        this.secondNum = y;
    }

    getSum() {
        return this.firstNum + this.secondNum;
    }

    getDifference() {
        return this.firstNum - this.secondNum;
    }

    getProduct() {
        return this.firstNum * this.secondNum;
    }

    getQuotient() {
        return this.firstNum / this.secondNum;
    }

    displayResult() {
        console.log(`Sum = ${this.getSum()}`);
        console.log(`Difference = ${this.getDifference()}`);
        console.log(`Product = ${this.getProduct()}`);
        console.log(`Quotient = ${this.getQuotient()}`);
    }
}

console.log("Please enter the first number: ");
const numX = Number(prompt());

console.log("Please enter the second number: ");
const numY = Number(prompt());

const obj = new SumDifferenceProductQuotientOf2Nos(numX, numY);
obj.displayResult();