export function appHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <h1 class="logo">Amazon</h1>
        <nav>
            <ul class="nav-links">
                <li><a href="amazon.html">Products</a></li>
                <li><a href="buy_cart.html">Cart</a></li>
            </ul>
        </nav>
    `
    document.body.prepend(header);
}