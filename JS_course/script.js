const products = [
    { id: 1, title: 'mango people t-shirt', price: 52.00 },
    { id: 2, title: 'mango people t-shirt', price: 52.00 },
    { id: 3, title: 'mango people t-shirt', price: 52.00 },
    { id: 4, title: 'mango people t-shirt', price: 52.00 },
    { id: 5, title: 'mango people t-shirt', price: 52.00 },
    { id: 6, title: 'mango people t-shirt', price: 52.00 },
    { id: 7, title: 'mango people t-shirt', price: 52.00 },
    { id: 8, title: 'mango people t-shirt', price: 52.00 },
    { id: 9, title: 'mango people t-shirt', price: 52.00 }
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
            <a id="${this.id}" class="add" href="#"><img class="product_cart" src="img/cart.svg" alt="cart">
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
        let addButtons = document.querySelectorAll('.add')
        addButtons.forEach(addButton => {
            addButton.addEventListener('click', function (event) {
                let cartItem;
                for (let i = 0; i < goodsList.goods.length; i++) {
                    if (event.target.getAttribute('id') == goodsList.goods[i].id) {
                        cartItem = new CartItem(goodsList.goods[i].id, goodsList.goods[i].title, goodsList.goods[i].price, 1);
                        break;
                    }
                }
                cart.addItem(cartItem);
            });
        });
    }
    calcPrice() {
        let totalPrice = 0;
        this.goods.forEach(good => {
            totalPrice += good.price;
        });
        return totalPrice;
    }
}



const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class CartItem extends GoodsItem {
    constructor(id, title, price, quantity) {
        super(id, title, price);
        this.quantity = quantity;
    }
    render() {
        return `<div class="cart_item">
        <a href="single_page.html">
            <img src="img/product_sort_img_${this.id}.png" alt="product_sort_img_${this.id}">
        </a>
        <div class="cart_item_info">
            <p class="cart_item_name">${this.title}</p>
            <img class="cart_stars" src="img/cart_stars.png" alt="cart_stars">
            <p class="cart_price">${this.quantity} x $${this.price}</p>
        </div>
        <img class="cart_cancel" src="img/cart_cancel.png" alt="cross">
    </div>
    <hr class="cart_item_line">`
    };
}

class Cart {
    constructor() {
        this.goods = [];
    };
    addItem(item) {
        return fetch(`${API_URL}/addToBasket.json`)
            .then((response) => response.json())
            .then((response) => {
                if (response.result !== 0) {
                    let exists = false;
                    for (let i = 0; i < this.goods.length; i++) {
                        if (this.goods[i].id == item.id) {
                            this.goods[i].quantity++;
                            exists = true;
                            break;
                        }
                    };
                    if (exists == false) {
                        this.goods.push(item);
                    }
                    exists = false;
                }
                else {
                    console.error('error');
                }
                console.log(this.goods);
                cart.render();
            })
            .catch((err) => console.log(err));
    };
    removeItem(id) {
        return fetch(`${API_URL}/deleteFromBasket.json`)
            .then((response) => response.json())
            .then((response) => {
                if (response.result == 1) {
                    for (let i = 0; i < this.goods.length; i++) {
                        if (this.goods[i].id = id) {
                            if (this.goods[i].quantity > 1) {
                                this.goods[i].quantity--;
                                break;
                            }
                            else {
                                this.goods.splice(id, 1);
                            };
                        };
                    };
                };
            })
            .catch((err) => console.log(err));
    };
    render() {
        let cartHtml = '';
        this.goods.forEach(good => {
            const cartItem = new CartItem(good.id, good.title, good.price, good.quantity);
            cartHtml += cartItem.render();
        });
        document.querySelector('.cart_products').innerHTML = cartHtml;
    };
}

const goodsList = new GoodsList();
goodsList.fetchGoods();
goodsList.render();
const cart = new Cart();