const products = [];

const categories = ["dog", "cat", "bird", "fish"];

const names = {
  dog: ["Luxury Leather Collar", "Premium Dog Food", "Orthopedic Dog Bed", "Grooming Kit", "Designer Leash"],
  cat: ["Premium Cat Food", "Luxury Cat Tree", "Silk Cat Bed", "Interactive Toy", "Grooming Set"],
  bird: ["Gold Cage Set", "Premium Bird Feed", "Luxury Perch Stand", "Bird Bath Spa", "Travel Carrier"],
  fish: ["LED Aquarium Kit", "Premium Fish Food", "Luxury Tank Decor", "Water Filter System", "Oxygen Pump"]
};

const images = {
  dog: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=500",
  cat: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=500",
  bird: "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?auto=format&fit=crop&w=500",
  fish: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=500"
};

for (let i = 1; i <= 100; i++) {
  let category = categories[i % 4];
  let itemList = names[category];

  products.push({
    id: i,
    name: "Pet Haven " + itemList[i % itemList.length],
    price: (15 + (i % 90)),
    category: category,
    image: images[category]
  });
}

const container = document.getElementById("product-list");

products.forEach(p => {
  container.innerHTML += `
    <div class="card">
      <img src="${p.image}" />
      <h3>${p.name}</h3>
      <p>Price: $${p.price}</p>
    </div>
  `;
});
