const prompt = require('prompt-sync')();

class HCF {
    constructor(fNum, sNum) {
        this.firstNum = fNum;
        this.secondNum = sNum;
    }

    findHCF() {
        let largerNum;
        let smallerNum;

        if(this.firstNum > this.secondNum) {
            largerNum = this.firstNum;
            smallerNum = this.secondNum;
        }
        else {
            largerNum = this.secondNum;
            smallerNum = this.firstNum;
        }

        let hcf = 1;
        for(let i=smallerNum; i>1; i--) {
            if(this.firstNum%i==0 && this.secondNum%i==0) {
                hcf = i;
                break;
            }
        }
        return hcf;
    }

    displayResult() {
        console.log(`HCF of ${this.firstNum} and ${this.secondNum} = ${this.findHCF()}`);
    }
}

console.log("Please enter the first number: ");
const firstNum = Number(prompt());

console.log("Please enter the second number: ");
const secondNum = Number(prompt());

const obj = new HCF(firstNum, secondNum);
obj.displayResult();