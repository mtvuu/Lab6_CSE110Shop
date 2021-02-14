// Script.js

window.addEventListener('DOMContentLoaded', () => {
  fetchProducts();
});

async function fetchProducts() {
  let products = JSON.parse(localStorage.getItem('products'));
  if (localStorage.getItem('products') == null) {
    let response = await fetch('https://fakestoreapi.com/products');
    let data = await response.text();
    localStorage.setItem('products', data);
    products = JSON.parse(localStorage.getItem('products'));
  }
  if (localStorage.getItem('cart') == null) {
    localStorage.setItem('cart', "{}");
  }
  for (const product in products) {
    addProduct(products[product]);
  }
}

function addProduct(product) {
  let cart = localStorage.getItem('cart');
  let list = document.createElement('product-item');
  list.setAttribute('id', product.id);
  document.getElementById('product-list').appendChild(list);
  list.shadowRoot.querySelector('.title').innerHTML = product.title;
  list.shadowRoot.querySelector('.price').innerHTML =
    "$" + product.price.toFixed(2);
  list.shadowRoot.querySelector('img').src = product.image;
  list.shadowRoot.querySelector('img').src = product.image;
  list.shadowRoot.querySelector('img').alt = product.title;

  if (cart[product.id - 1] == "0") {
    list.shadowRoot.querySelector("button").innerHTML = "Add to Cart";
  } 
  else {
    list.shadowRoot.querySelector('button').innerHTML = "Remove from Cart";
    document.getElementById('cart-count').innerHTML++;
  }
};