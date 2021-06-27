const products = [
    { id: 1, title: 'mango people t-shirt', price: 52.00 },
    { id: 2, title: 'mango people t-shirt', price: 52.00 },
    { id: 3, title: 'mango people t-shirt', price: 52.00 },
    { id: 4, title: 'mango people t-shirt', price: 52.00 },
    { id: 5, title: 'mango people t-shirt', price: 52.00 },
    { id: 6, title: 'mango people t-shirt', price: 52.00 },
    { id: 7, title: 'mango people t-shirt', price: 52.00 },
    { id: 8, title: 'mango people t-shirt', price: 52.00 },
    { id: 9, title: 'mango people t-shirt', price: 52.00 },
];

const renderProduct = (product) => {
    return `<div class="product_box">
    <a class="link" href="single_page.html">
        <img class="product_box_img" src="img/product_sort_img_${product.id}.png" alt="product_${product.id}">
    <p class="text_box"> ${product.title}</p>
        <p class="text_box text_box_pink">
            $${product.price.toFixed(2)}</p>
    </a>
    <div class="box_add">
        <a class="add" href="#"><img class="product_cart" src="img/cart.svg" alt="cart">
            Add to Cart</a>
    </div>
    </div>`
}

const renderProductPage = (products) => {
    document.querySelector('.product_list').innerHTML = products.map((product) => renderProduct(product)).join(' ');
}

renderProductPage(products);