function makeArray(firstArray, secondArray, maxLength) {
  // Об'єднуємо два масиви
  const newArray = firstArray.concat(secondArray);

  // Якщо довжина нового масиву перевищує maxLength, повертаємо його копію з довжиною maxLength
  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  }

  // В іншому випадку повертаємо весь новий масив
  return newArray;
}

// Перевірка коректності роботи функції
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
