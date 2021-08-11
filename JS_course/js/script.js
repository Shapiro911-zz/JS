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
            <a id="${this.id}" class="add"><img id="${this.id} "class="product_cart" src="img/cart.svg" alt="cart">
                Add to Cart</a>
        </div>
        </div>`
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
        this.fetchGoods();
        this.render();
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
        /*let addButtons = document.querySelector('.product_list');
        addButtons.addEventListener('click', function (event) {
            let cartItem;
            for (let i = 0; i < goodsList.goods.length; i++) {
                if (event.target.getAttribute('id') == goodsList.goods[i].id) {
                    cartItem = new CartItem(goodsList.goods[i].id, goodsList.goods[i].title, goodsList.goods[i].price, 1);
                    break;
                }
            }
            cart.addItem(cartItem);
        });*/
    }
}

class CartItem extends GoodsItem {
    constructor(id, title, price, quantity) {
        super(id, title, price);
        this.quantity = quantity;
    }
    /*render() {
        return `<div class="cart_item">
        <a href="single_page.html">
            <img src="img/product_sort_img_${this.id}.png" alt="product_sort_img_${this.id}" class="cart_product_img">
        </a>
        <div class="cart_item_info">
            <p class="cart_item_name">${this.title}</p>
            <img class="cart_stars" src="img/cart_stars.png" alt="cart_stars">
            <p class="cart_price">${this.quantity} x $${this.price}</p>
        </div>
        <img class="cart_cancel" id="${this.id}" src="img/cart_cancel.png" alt="cross">
    </div>
    <hr class="cart_item_line">`
    };*/
}

/*class Cart {
    constructor() {
        this.goods = [];
        this.totalPrice = 0;
        document.querySelector('.cart').addEventListener('click', function () {
            document.querySelector('.live_cart').classList.toggle('active');
        });
        let removeButtons = document.querySelector('.cart_products');
        removeButtons.addEventListener('click', function (event) {
            cart.removeItem(event.target.getAttribute('id'));
        });
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
                            this.totalPrice += item.price;
                            exists = true;
                            break;
                        }
                    };
                    if (exists == false) {
                        this.goods.push(item);
                        this.totalPrice += item.price;
                    }
                    exists = false;
                }
                else {
                    console.error('error');
                }
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
                        if (this.goods[i].id == id) {
                            if (this.goods[i].quantity > 1) {
                                this.goods[i].quantity--;
                                this.totalPrice -= this.goods[i].price;
                                break;
                            }
                            else {
                                this.totalPrice -= this.goods[i].price;
                                this.goods.splice(i, 1);
                            };
                        };
                    };
                };
                cart.render();
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
        document.querySelector('.total_price').innerHTML = '$' + `${this.totalPrice}`;
    };
}*/

const goodsList = new GoodsList();
//const cart = new Cart();
