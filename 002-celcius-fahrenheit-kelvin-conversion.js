const prompt = require('prompt-sync')();

class CelciusFahrenheitKelvinConversion {
    constructor(t, u) {
        this.temperature = t;
        this.unit = u;
    }

    convertCelciusToFahrenheit() {
        return (((this.temperature)*9)/5)+32;
    }

    convertCelciusToKelvin() {
        return (this.temperature + 273.15);
    }

    convertFahrenheitToCelcius() {
        return ((this.temperature-32)*5)/9;
    }

    convertFahrenheitToKelvin() {
        return (((this.temperature-32)*5)/9)+273.15;
    }

    convertKelvinToCelcius() {
        return this.temperature - 273.15;
    }

    convertKelvinToFahrenheit() {
        return (((this.temperature-273.15)*9)/5)+32;
    }

    compute() {
        const alphabet_C = "C";
        const alphabet_F = "F";
        const alphabet_K = "K"; 

        if(this.unit.toUpperCase() == alphabet_C) {
            console.log(`${this.temperature} in celcius = ${this.convertCelciusToFahrenheit()} in fahrenheit`);
            console.log(`${this.temperature} in celcius = ${this.convertCelciusToKelvin()} in kelvin`);
        }
        else if(this.unit.toUpperCase() == alphabet_F) {
            console.log(`${this.temperature} in fahrenheit = ${this.convertFahrenheitToCelcius()} in celcius`);
            console.log(`${this.temperature} in fahrenheit = ${this.convertFahrenheitToKelvin()} in kelvin`);
        }
        else if(this.unit.toUpperCase() == alphabet_K) {
            console.log(`${this.temperature} in kelvin = ${this.convertKelvinToCelcius()} in celcius`);
            console.log(`${this.temperature} in kelvin = ${this.convertKelvinToFahrenheit()} in fahrenheit`);
        }
        else {
            console.log("Please enter correct unit of temperature (C/F/K)");
        }
    }
}

console.log("Please enter the temperature to be converted: ");
const temp = Number(prompt());

console.log("Please enter the unit of temperature entered (C for Celcius, F for Fahrenheit and K for Kelvin): ");
const unit = prompt();

const obj = new CelciusFahrenheitKelvinConversion(temp, unit);
obj.compute();









