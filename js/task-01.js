const categoriesOfListEl = [...document.querySelector("#categories").children];
console.log(`Number of categories: ${categoriesOfListEl.length}`);

categoriesOfListEl.forEach((categoryEl) =>
  console.log(`
Category: ${categoryEl.firstElementChild.textContent}
Elements: ${[...categoryEl.lastElementChild.children].length}
`)
);