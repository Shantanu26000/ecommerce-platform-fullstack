const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Smartphone", price: 25000 },
  { id: 3, name: "Headphones", price: 3000 }
];

let orders = [];

// Get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Add a new product (admin)
app.post("/products", (req, res) => {
  products.push(req.body);
  res.json({ message: "Product added successfully" });
});

// Place order
app.post("/order", (req, res) => {
  orders.push(req.body);
  res.json({ message: "Order placed successfully" });
});

// Get all orders
app.get("/orders", (req, res) => {
  res.json(orders);
});

app.listen(5000, () => {
  console.log("E-commerce server running on port 5000");
});
