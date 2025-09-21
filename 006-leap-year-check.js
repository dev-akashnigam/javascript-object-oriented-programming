const prompt = require('prompt-sync')();
class LeapYearCheck {
    constructor(y) {
        this.year = y;
    }

    isLeapYear() {
        if(this.year%100 == 0) {
            if(this.year%400 == 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            if(this.year%4 == 0) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    displayResult() {
        if(this.isLeapYear()) {
            console.log(`Year: ${this.year} is a leap year.`);
        }
        else {
            console.log(`Year: ${this.year} is NOT leap year.`);
        }
    }
}

console.log("Please enter the year: ");
const year = Number(prompt());

const obj = new LeapYearCheck(year);
obj.displayResult();