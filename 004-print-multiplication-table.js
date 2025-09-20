const prompt = require('prompt-sync')();

class MultiplicationTable {
    constructor(n) {
        this.number = n;
    }

    printTable() {
        for(let i=1; i<=10; i++) {
            console.log(`${this.number} X ${i} = ${this.number*i}`);
        }
    }
}

console.log("Please enter a number: ");
const num = Number(prompt());

const obj = new MultiplicationTable(num);
obj.printTable();