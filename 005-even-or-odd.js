const prompt = require('prompt-sync')();
class EvenOrOdd {
    constructor(num) {
        this.number = num;
    }

    displayResult() {
        if(this.number%2 == 0) {
            console.log(`Number: ${this.number} is even.`);
        }
        else {
            console.log(`Number: ${this.number} is odd.`);
        }
    }
}

console.log("Please enter a number: ");
const num = Number(prompt())

const obj = new EvenOrOdd(num);
obj.displayResult();
