import { cart } from "./data.js";
import { appHeader } from "./header.js";

function redirectButton() {
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', () => {
        window.location.href = 'amazon.html';
    });
}

function buyButton() {
    const buyButton = document.querySelector('.buy-button');
    buyButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty. Please add items to your cart before purchasing.');
            return;
        }
        else{
            alert('Thank you for your purchase!');
            localStorage.removeItem('cart');
            localStorage.removeItem('products');
            window.location.href = 'amazon.html';
        }
        
    });
}

redirectButton()
buyButton()

function removeFromCart() {
    const removeFromCart = document.querySelectorAll('.remove-cart');
    removeFromCart.forEach((button, index) => {
        button.addEventListener('click', () => {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            publishCart();
        });
    });
}

function publishCart() {
    let cartHTML = '';

    if (cart.length === 0) {
        document.querySelector('.published-products').innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach(product => {
        cartHTML += `<div class="product">
            <h2 class="product-name">${product.name}</h2>
            <p class="product-description">${product.description}</p>
            <p class="product-price">Price: $${product.price}</p>
            <button class="remove-cart">Remove from Cart</button>
        </div>
        `;
    })
    document.querySelector('.published-products').innerHTML = cartHTML;
    removeFromCart();
}

function purchaseData() {
    
    if (cart.length === 0) {
        document.querySelector('.purchase-data').innerHTML = '<p>No items to purchase.</p>';
        return;
    }

    else{
        let totalPrice = 0
        let totalProducts = cart.length
        cart.forEach(product => {
            totalPrice += product.price;
        });
        document.querySelector('.purchase-data').innerHTML = `<p class="purchase-text">Total: $${totalPrice.toFixed(2)}</p><p class="purchase-text">Products: ${totalProducts}</p>`;
    }
}

appHeader()
publishCart()
purchaseData()