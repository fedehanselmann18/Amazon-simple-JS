export function appHeader() {
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