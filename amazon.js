import { products, cart , redirectButton} from './data.js';
import { appHeader} from './header.js';


function addToCart() {
    const addToCart = document.querySelectorAll('.add-cart');
    addToCart.forEach((button, index) => {
        button.addEventListener('click', () => {
            products[index].in_cart = true;
            cart.push(products[index]);
            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('products', JSON.stringify(products));
            const addedMessage = document.querySelectorAll('.added-message')[index];
            addedMessage.textContent = 'Added to cart!';
        });
    });
}



function publishProducts() {
    products.HTML = ''
    products.forEach(product => {
        if (product.available){
            products.HTML += `<div class="product">
                <h2 class="product-name">${product.name}</h2>
                <p class="product-description">${product.description}</p>
                <p class="product-price">Price: $${product.price}</p>
                <button class="add-cart">Add to Cart</button>
                <p class='added-message'></p>
                <button class="go-to-cart">Go to Cart</button>
            </div>
            `
        }
    })
    document.querySelector('.published-products').innerHTML = products.HTML;
}


appHeader()
publishProducts()
addToCart()
redirectButton('buy_cart.html', '.go-to-cart')