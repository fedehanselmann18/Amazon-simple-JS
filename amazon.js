const defaultProducts = [{
    name: 'Soccer ball',
    price: 19.99,
    description: 'A high-quality soccer ball for all your soccer needs.',
    available: true,
    in_cart : false
},
{
    name: 'Running shoes',
    price: 89.99,
    description: 'Comfortable and durable running shoes for all terrains.',
    available: true,
    in_cart : false
},
{
    name: 'Yoga mat',
    price: 29.99,
    description: 'A non-slip yoga mat for your daily practice.',
    available: true,
    in_cart : false
},
{
    name: 'Fitness tracker',
    price: 49.99,
    description: 'Track your fitness goals with this sleek and functional fitness tracker.',
    available: true,
    in_cart : false
}]

const products = JSON.parse(localStorage.getItem('products')) || defaultProducts;
const cart = JSON.parse(localStorage.getItem('cart')) || [];


function redirectButton() {
    const buyButtons = document.querySelectorAll('.go-to-cart');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'buy_cart.html';
        });
    })
}

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

function appHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <h1 class="logo">Amazon</h1>
        <nav>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    `
    document.body.prepend(header);
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
redirectButton()
addToCart()