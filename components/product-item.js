// product-item.js

class ProductItem extends HTMLElement {
  constructor() {
    super();

    let item = document.createElement("li");
    item.setAttribute("class", "product");

    let shadow = this.attachShadow({mode: 'open'});
    let image = document.createElement('img');

    let title = document.createElement('p');
    title.setAttribute('class', 'title');

    let price = document.createElement('p');
    price.setAttribute('class', 'price');

    let cartCount = document.getElementById('cart-count');
    let button = document.createElement('button');
    button.innerHTML = "Add to Cart";
    button.onclick = () => {
      let cart = localStorage.getItem('cart');
      if (cart[this.id - 1] == "1") {
        cart[this.id - 1] = "0";
        localStorage.setItem('cart', cart);
        button.innerHTML = "Add to Cart";
        cartCount.textContent = parseInt(cartCount.textContent) - 1;
        alert('Removed Item from Cart');
      } 
      else {
        cart[this.id - 1] = "1";
        localStorage.setItem("cart", cart);
        button.innerHTML = "Remove from Cart";
        cartCount.textContent = parseInt(cartCount.textContent) + 1;
        alert('Added Item to Cart');
      }
    };

    item.appendChild(image);
    item.appendChild(title);
    item.appendChild(price);
    item.appendChild(button);

    const style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "styles/styles.css");
    shadow.appendChild(style);
    shadow.appendChild(item);
  }
}

customElements.define('product-item', ProductItem);