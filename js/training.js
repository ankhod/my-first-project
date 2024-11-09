console.log(Math.ceil(1.3)); // 2
console.log(Math.ceil(1.7)); // 2
console.log(Math.random());
console.log(0.1 + 0.2 === 0.3); // false
console.log((0.1 + 0.2).toFixed(1)); // 0.30000000000000004

function makeMessage(username) {
  console.log(`Hello ${username}`);
}

makeMessage("Jacob");

function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

console.log("Log before multiply execution");
multiply(2, 3, 5); // "Result: 30"
console.log("Log after multiply execution");

// Глобальна змінна
const value = "I'm a global variable";

function foo() {
  // Можна звернутися до глобальної змінної
  console.log(value); // "I'm a global variable"
}

foo();
// Можна звернутися до глобальної змінної
console.log(value);
// "I'm a global variable"
