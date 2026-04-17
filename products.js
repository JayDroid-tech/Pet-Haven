const products = [];

const categories = ["dog", "cat", "bird", "fish"];

const names = {
  dog: ["Luxury Leather Collar", "Premium Dog Food", "Orthopedic Dog Bed", "Grooming Kit", "Designer Dog Leash"],
  cat: ["Premium Cat Food", "Luxury Cat Tree", "Silk Cat Bed", "Interactive Cat Toy", "Grooming Brush Set"],
  bird: ["Gold Cage Set", "Premium Bird Feed", "Luxury Perch Stand", "Bird Bath Spa", "Travel Bird Carrier"],
  fish: ["LED Aquarium Kit", "Premium Fish Food", "Luxury Tank Decor", "Water Filter System", "Aquarium Oxygen Pump"]
};

for (let i = 1; i <= 100; i++) {
  let category = categories[i % 4];
  let itemList = names[category];

  let name = itemList[i % itemList.length];

  products.push({
    id: i,
    name: "Pet Haven " + name,
    price: (15 + (i % 80)), // USD pricing
    category: category
  });
}

const container = document.getElementById("product-list");

products.forEach(p => {
  container.innerHTML += `
    <div class="card">
      <h3>${p.name}</h3>
      <p>Price: $${p.price}</p>
    </div>
  `;
});
