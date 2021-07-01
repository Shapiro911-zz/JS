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

class GoodsItem {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="product_box">
        <a class="link" href="single_page.html">
            <img class="product_box_img" src="img/product_sort_img_${this.id}.png" alt="product_${this.id}">
        <p class="text_box"> ${this.title}</p>
            <p class="text_box text_box_pink">
                $${this.price.toFixed(2)}</p>
        </a>
        <div class="box_add">
            <a class="add" href="#"><img class="product_cart" src="img/cart.svg" alt="cart">
                Add to Cart</a>
        </div>
        </div>`
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = products;
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.id, good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.product_list').innerHTML = listHtml;
    }
    calcPrice() {
        let totalPrice = 0;
        this.goods.forEach(good => {
            totalPrice += good.price;
        });
        return totalPrice;
    }
}

class CartItem extends GoodsItem {
    constructor(id, title, price, quantity) {
        super(id, title, price);
        this.quantity = quantity;
    }
}

class Cart {
    constructor() {
        this.goods = [];
    }
    render() {

    }
    addItem() {

    }
    removeItem() {

    }
    calcPrice() {

    }
}

const goodsList = new GoodsList();
goodsList.fetchGoods();
goodsList.render();
console.log(goodsList.calcPrice());