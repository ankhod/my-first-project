function slugify(title) {
  // Приводимо рядок до нижнього регістру
  const lowerCaseTitle = title.toLowerCase();
  // Замінюємо пробіли на тире
  const slug = lowerCaseTitle.split(" ").join("-");
  return slug;
}

// Перевірка коректності роботи функції
console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
