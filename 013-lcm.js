const prompt = require('prompt-sync')();

class LCM {
    constructor(fNum, sNum) {
        this.firstNum = fNum;
        this.secondNum = sNum;
    }

    findLCM() {
        let largerNumber;
        let smallerNumber;
        if(this.firstNum > this.secondNum) {
            largerNumber = this.firstNum;
            smallerNumber = this.secondNum;
        }
        else {
            largerNumber = this.secondNum;
            smallerNumber = this.firstNum;
        }

        let lcm;
        let multiple = 1;
        while(true) {
            if(((largerNumber*multiple) % smallerNumber) == 0) {
                lcm = largerNumber*multiple;
                break;
            }
            multiple++;
        }
        return lcm;
    }

    displayResult() {
        console.log(`LCM of ${this.firstNum} and ${this.secondNum} = ${this.findLCM()}`);
    }
}

console.log("Please enter the first number: ");
const firstNumber = Number(prompt());

console.log("Please enter the second number: ");
const secondNumber = Number(prompt());

const obj = new LCM(firstNumber, secondNumber);
obj.displayResult();