// js/product-details.js

const productData = {
  "acrylic-trophy": {
    title: "Acrylic Trophy",
    desc: "This elegant Acrylic Trophy is precision-made for award ceremonies, corporate events, and milestones. Crafted from premium cast acrylic, it combines modern design with durability to make your celebration memorable.",
    image: "images/trophy2.png",
    specs: [
      "Material: Cast Acrylic",
      "Thickness: 12mm",
      "Custom Logo Engraving: Yes",
      "Size: 8 to 12 inches"
    ],
    reviews: [
      "⭐⭐⭐⭐⭐ 'Amazing clarity and durability!' – Ramesh P.",
      "⭐⭐⭐⭐ 'Elegant packaging and timely delivery!' – Sneha K."
    ]
  },
  "rod": {
    title: "Acrylic Rod",
    desc: "Crystal-clear rod ideal for machining, decoration, and industrial use.",
    image: "images/rods.png",
    specs: [
      "Material: PMMA",
      "Diameter: 10mm to 50mm",
      "Finish: Smooth Clear",
      "Length: Up to 1 meter"
    ],
    reviews: [
      "⭐⭐⭐⭐ 'Perfect for display stands and creative work!' – Ankit S.",
      "⭐⭐⭐⭐⭐ 'Great quality and delivery.' – Nisha V."
    ]
  },
  "memento": {
    title: "Acrylic Momento",
    desc: "This stylish Acrylic Memento is a perfect choice for corporate recognition, school awards, or memorable gifting. Crafted from high-quality cast acrylic, it ensures durability while maintaining elegant appeal.",
    image: "images/trophy3.jpg",
    specs: [
      "Material: Cast Transparent Acrylic",
      "Diameter:  8mm to 15mm",
      "Finish: Logo, Name, Event Text",
      "Size: 6 to 10 inches",
      "Base Type: Wooden or Acrylic"
    ],
    reviews: [
      "⭐⭐⭐⭐ 'Perfect for display stands and creative work!' – Ankit S.",
      "⭐⭐⭐⭐⭐ 'Great quality and delivery.' – Nisha V."
    ]
  }
};

function loadProduct() {
  const params = new URLSearchParams(window.location.search);
  const productKey = params.get("id") || "trophy";
  const product = productData[productKey];

  if (!product) return;

  // Populate data
  document.getElementById("product-title").textContent = product.title;
  document.getElementById("product-desc").textContent = product.desc;
  const img = document.getElementById("product-img");
  const lens = document.getElementById("zoom-lens");
  img.src = product.image;
  lens.style.backgroundImage = `url(${product.image})`;

  document.getElementById("specs").innerHTML = `<ul>${product.specs.map(s => `<li>${s}</li>`).join("")}</ul>`;
  document.getElementById("reviews").innerHTML = product.reviews.map(r => `<p>${r}</p>`).join("");
}

window.addEventListener("DOMContentLoaded", () => {
  loadProduct();

  // Related Products
  const relatedContainer = document.getElementById('related-products');
  product.related.forEach(key => {
    const rel = products[key];
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <a href="product_details.html?id=${key}">
        <img src="${rel.img}" alt="${rel.title}" />
        <div class="product-title">${rel.title}</div>
      </a>
    `;
    relatedContainer.appendChild(card);
  }); 

  // Tab switching
  document.querySelectorAll(".tab-button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

  // Lens zoom effect
  const img = document.getElementById("product-img");
  const lens = document.getElementById("zoom-lens");

  img.addEventListener("mousemove", (e) => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    lens.style.left = `${x - lens.offsetWidth / 2}px`;
    lens.style.top = `${y - lens.offsetHeight / 2}px`;
    lens.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
  });

  img.addEventListener("mouseenter", () => lens.style.opacity = 1);
  img.addEventListener("mouseleave", () => lens.style.opacity = 0);
});
