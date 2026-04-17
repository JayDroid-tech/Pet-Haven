const products = [];

const categories = ["dog", "cat", "bird", "fish"];

for (let i = 1; i <= 100; i++) {
  let category = categories[i % 4];

  products.push({
    name: category.toUpperCase() + " Product " + i,
    price: 20 + i,
    category: category
  });
}

const container = document.getElementById("product-list");

products.forEach(p => {
  container.innerHTML += `
    <div class="card">
      <h3>${p.name}</h3>
      <p>GHS ${p.price}</p>
    </div>
  `;
});
