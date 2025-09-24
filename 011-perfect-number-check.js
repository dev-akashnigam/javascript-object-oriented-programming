const prompt = require('prompt-sync')();

class PerfectNumberCheck {
    constructor(num) {
        this.number = num;
    }

    isPerfect() {
        const num = this.number;
        const halfNum = num / 2;
        let sumOfDivisors = 0;

        for(let i=1; i<=halfNum; i++) {
            if(this.number%i == 0){
                sumOfDivisors += i;
            }
        }

        return sumOfDivisors==num;
    }

    displayResult() {
        if(this.isPerfect()) {
            console.log(`Number: ${this.number} is a PERFECT NUMBER.`);
        }
        else {
            console.log(`Number: ${this.number} is NOT A PERFECT NUMBER.`);
        }
    }
}

console.log("Please enter a number: ");
const number = Number(prompt());

const obj = new PerfectNumberCheck(number);
obj.displayResult();