let x = {};
// console.log(x.__proto__.toString());

let y = [];
// console.log(y.__proto__ === Array.prototype);            // true
// console.log(y.__proto__.__proto__ === Object.prototype); // true

// Initialize a constructor function for a new Hero
function Hero(name, level) {
    this.name = name;
    this.level = level;
}
let hero1 = new Hero('Bjorn', 1);
Object.getPrototypeOf(hero1);