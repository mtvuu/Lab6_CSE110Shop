// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  let products = JSON.parse(localStorage.getItem("products"));
  if (!window.localStorage.getItem("products")) {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => JSON.stringify(data))
      .then((info) => localStorage.setItem("products", info))
      .then(() => {
        products = JSON.parse(localStorage.getItem("products"));
      })
      .then(() => {
        localStorage.setItem("cart", new Array(products.length).fill(0).toString());
        //Gotta add items to html
        for (const item in products) {
          //let cart = localStorage.getItem("cart");
          console.log(products[item]);
        }
      });
  }
  else {
    console.log("fetched")
    for (const item in products) {
      console.log(products[item]);
    }
  }
});