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

let price = 0;
const subscription = "free";

if (subscription === "pro") {
  price = 100;
}

console.log(price); //0

function checkAge(age) {
  if (age === 17) {
    return "undefined";
  } else {
    return "You are an adult";
  }
}
console.log(checkAge(20));
console.log(checkAge(17));
console.log(checkAge(10));
console.log(checkAge(30));

const grade = 85;

if (grade >= 90) {
  console.log("Perfectly");
} else if (grade >= 80) {
  console.log("Good");
} else if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}

function checkStorage(available, ordered) {
  if (available >= ordered) {
    return "The order is accepted, our manager will contact you";
  } else if ((available, 0)) {
    return "There are no products in the order!";
  } else if (available < ordered) {
    return "Your order is too large, there are not enough items in stock!";
  }
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));

const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); // 'adult'

function checkPassword(password) {
  const correctPassword = "jqueryismyjam";

  return password === correctPassword
    ? "Access granted"
    : "Access denied, wrong password!";
}
console.log(checkPassword("jqueryismyjam"));

const day = 4;

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("This is a working day");
    break;
  case 6:
  case 7:
    console.log("It is a day off");
    break;
  default:
    console.log("Invalid");
}

if (null) {
  console.log("Block if");
} else {
  console.log("Block else");
}

if (0) {
  console.log("Block if");
} else {
  console.log("Block else");
}

console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(3.14)); // true
console.log(Boolean(-10)); // true

alert("Между первой и второй\nсимвол будет небольшой");

console.log(typeof 4.5);
// → number

console.log(typeof "x");
// → string
