Vue.component('cart', {
    data() {
        return {
            totalPrice: 0,
            goods: [],
            isVisibleCart: false,
        }
    },
    methods: {
        addItem(good) {
            let find = this.goods.find(el => el.id === good.id);
            if (find) {
                this.$parent.putJson(`/api/cart/${find.id}`, { quantity: 1 });
                find.quantity++;
                this.totalPrice += find.price;
            }
            else {
                let prod = Object.assign({ quantity: 1 }, good);
                this.$root.postJson('/api/cart', prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.goods.push(prod);
                            this.totalPrice += prod.price;
                        }
                    });
            }
        },
        removeItem(item) {
            let find = this.goods.find(el => el.id === item.id);
            if (find && find.quantity > 1) {
                this.$parent.putJson(`/api/cart/${find.id}`, { quantity: -1 });
                find.quantity--;
                this.totalPrice -= find.price;
            }
            else {
                let prod = Object.assign(item);
                this.$parent.deleteJson('/api/cart', prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.goods.splice(this.goods.map(el => el.id).indexOf(prod.id), 1);
                            this.totalPrice -= prod.price;
                        }
                    })
            }
        },
    },
    mounted() {
        this.$parent.getJson('/api/cart')
            .then(data => {
                for (let el of data) {
                    this.goods.push(el);
                    this.totalPrice += el.price * el.quantity;
                }
            });
    },
    template: `
    <div>
    <img class="cart" src="img/cart.svg" alt="cart" @click="isVisibleCart = !isVisibleCart">
    <div class="live_cart" v-show="isVisibleCart">
    <div class="cart_products">
    <cartItem v-for="cartItem of goods" :cartItem="cartItem" @removeItem="removeItem" :key="cartItem.id"></cartItem>
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
    <img class="cart_cancel" :id="cartItem.id" @click="$emit('removeItem', cartItem)" src="img/cart_cancel.png" alt="cross">
</div>
<hr class="cart_item_line">
</div>
    `
});