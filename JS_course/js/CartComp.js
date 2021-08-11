Vue.component('cart', {
    data() {
        return {
            totalPrice: 0,
            goods: [],
            isVisibleCart: false,
        }
    },
    methods: {
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
                })
                .catch((err) => console.log(err));
        },
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
                })
                .catch((err) => console.log(err));
        },
    },
    template: `
    <div>
    <img class="cart" src="img/cart.svg" alt="cart" @click="isVisibleCart = !isVisibleCart">
    <div class="live_cart" v-show="isVisibleCart">
    <div class="cart_products">
    <cartItem v-for="cartItem of goods" :cartItem="cartItem" @removeItem="removeItem"></cartItem>
    </div>
    <div class="cart_total">
        <p class="total_price_text">total</p>
        <p class="total_price_text">$<span>{{this.totalPrice}}</span></p>
    </div>
    <a href="checkout.html" class="live_cart_checkout">checkout</a>
    <a href="shopping_cart.html" class="go_to_cart">go to cart</a>
</div>
</div>`
});

Vue.component('cartItem', {
    props: ['cartItem'],
    template: `
    <div>
    <div class="cart_item">
    <a href="single_page.html">
        <img :src="'img/product_sort_img_' + cartItem.id + '.png'" alt="product_sort_img" class="cart_product_img">
    </a>
    <div class="cart_item_info">
        <p class="cart_item_name">{{cartItem.title}}</p>
        <img class="cart_stars" src="img/cart_stars.png" alt="cart_stars">
        <p class="cart_price">{{cartItem.quantity}} x \${{cartItem.price}}</p>
    </div>
    <img class="cart_cancel" :id="cartItem.id" @click="$emit('removeItem', cartItem.id)" src="img/cart_cancel.png" alt="cross">
</div>
<hr class="cart_item_line">
</div>
    `
});