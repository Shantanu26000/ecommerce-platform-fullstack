let cart = JSON.parse(localStorage.getItem("cart")) || [];

fetch("http://localhost:5000/products")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("products");
    if (!list) return;

    data.forEach(p => {
      const li = document.createElement("li");
      li.innerHTML = `${p.name} - ₹${p.price}
        <button onclick='addToCart(${JSON.stringify(p)})'>Add</button>`;
      list.appendChild(li);
    });
  });

function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function placeOrder() {
  fetch("http://localhost:5000/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cart)
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message);
    localStorage.removeItem("cart");
  });
}

const cartList = document.getElementById("cart");
if (cartList) {
  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
  });
}
