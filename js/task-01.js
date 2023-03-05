const categoriesRef = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesRef.length}`);

categoriesRef.forEach((categoryRef) =>
  console.log(`
Category: ${categoryRef.firstElementChild.textContent}
Elements: ${categoryRef.lastElementChild.children.length}
`));