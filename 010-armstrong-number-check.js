const prompt = require('prompt-sync')();

class ArmstrongNumberCheck {
    constructor(num) {
        this.number = num;
    }

    findDigits() {
        let num = this.number;
        let countOfdigits = 0;
        while(num!=0) {
            num = Number.parseInt(num/10);
            countOfdigits++;
        }
        return countOfdigits;
    }

    isArmstrong() {
        let num = this.number;
        let totalDigits = this.findDigits();
        let sum = 0;
        while(num!=0) {
            let lastDigit = num % 10;
            sum = sum + Number.parseInt(Math.pow(lastDigit, totalDigits));

            num = Number.parseInt(num/10); 
        }
        return sum==this.number;
    }

    displayResult() {
        if(this.isArmstrong()) {
            console.log(`Number ${this.number} is ARMSTRONG NUMBER.`);
        }
        else {
            console.log(`Number ${this.number} is NOT ARMSTRONG NUMBER.`);
        }
    }
}

console.log("Please enter a number: ");
let number = Number(prompt());

const obj = new ArmstrongNumberCheck(number);
obj.displayResult();