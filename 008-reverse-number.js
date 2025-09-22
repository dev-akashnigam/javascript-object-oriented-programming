const prompt = require('prompt-sync')();

class ReverseNumber {
    constructor(num) {
        this.number = num;
    }

    getReversedNumber() {
        let originalNumber = this.number;
        let reversedNumber = 0;

        while(originalNumber!=0) {
            let lastDigit = originalNumber % 10;
            reversedNumber = reversedNumber * 10 + lastDigit;

            originalNumber = Number.parseInt(originalNumber / 10);
        }

        return reversedNumber;
    }

    displayResult() {
        console.log(`Reverse of number ${this.number} = ${this.getReversedNumber()}`);
    }
}

console.log("Please enter a number: ");
const num = Number(prompt());

obj = new ReverseNumber(num);
obj.displayResult();