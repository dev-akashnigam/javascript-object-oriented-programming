const prompt = require('prompt-sync')();

class PrimeNumberCheck {
    constructor(num) {
        this.number = num;
    }

    isPrime() {
        if(this.number<=1) {
            return false;
        }
        else if(this.number == 2) {
            return true;
        }
        else if(this.number%2 == 0) {
            return false;
        }
        else {
            const sqrt = Number.parseInt(Math.sqrt(this.number));

            let isPrime = true;
            for(let i=3; i<=sqrt; i+=2) {
                if(this.number%i == 0) {
                    isPrime = false;
                    break;
                }
            }
            return isPrime;
        }
    }

    displayResult() {
        if(this.isPrime()) {
            console.log(`Number ${this.number} is PRIME.`);
        }
        else {
            console.log(`Number ${this.number} is NOT PRIME.`);
        }
    }
}

console.log("Please enter a number: ");
const num = Number(prompt());

const obj = new PrimeNumberCheck(num);
obj.displayResult();