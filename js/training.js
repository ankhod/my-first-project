console.log(Math.ceil(1.3)); // 2
console.log(Math.ceil(1.7)); // 2
console.log(Math.random());
console.log(0.1 + 0.2 === 0.3); // false
console.log((0.1 + 0.2).toFixed(1)); // 0.30000000000000004

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

function calcAverageCalories(days) {
  // Якщо масив порожній, повертаємо 0
  if (days.length === 0) {
    return 0;
  }

  // Обчислюємо загальну кількість калорій
  let totalCalories = 0;
  for (let i = 0; i < days.length; i++) {
    totalCalories += days[i].calories;
  }

  // Обчислюємо середнє значення калорій
  const averageCalories = totalCalories / days.length;
  return averageCalories;
}

// Перевірка коректності роботи функції
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 },
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 },
  ])
); // 2270

console.log(calcAverageCalories([])); // 0

const profile = {
  username: "Jacob",
  playTime: 300,
  // Метод для зміни імені користувача
  changeUsername(newName) {
    this.username = newName;
  },
  // Метод для оновлення кількості ігрових годин
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  // Метод для отримання інформації про користувача
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

// Перевірка коректності роботи методів
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
