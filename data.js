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

export const products = JSON.parse(localStorage.getItem('products')) || defaultProducts;
export const cart = JSON.parse(localStorage.getItem('cart')) || [];


export function redirectButton(location, htmlElement) {
    const buyButtons = document.querySelectorAll(htmlElement);
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = location;
        });
    })
}