class SumOfFirstNNaturalNos {
    constructor(num) {
        this.number = num;
    }

    calcSum() {
        let sum = 0;
        for(let i=1; i<=this.number; i++) {
            sum += i;
        }
        return sum;
    }

    printResult() {
        console.log(`Sum of first ${this.number} natural numbers = ${this.calcSum()}`);
    }
}

const prompt = require('prompt-sync')();

console.log("Please enter the natural number till where sum is required: ");
const natNum = Number(prompt());

const obj = new SumOfFirstNNaturalNos(natNum);
obj.printResult();