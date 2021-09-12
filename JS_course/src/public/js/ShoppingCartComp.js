Vue.component('shoppingcart', {
    data() {
        return {
            totalPrice: 0,
            goods: [],
        }
    },
    methods: {
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
    template: `<div>
    <div class="shopping_cart_products container">
    <div class="product_details">
        <div class="product_details_left">
            <h3 class="checkout_title">Product Details</h3>
        </div>
        <div class="product_details_right">
            <h3 class="checkout_title">Unit price</h3>
            <h3 class="checkout_title">Quantity</h3>
            <h3 class="checkout_title">Shipping</h3>
            <h3 class="checkout_title">Subtotal</h3>
            <h3 class="checkout_title">Action</h3>
        </div>
    </div>
    <hr class="shopping_cart_line">
    <div class="shopping_cart_product_list">
        <shoppingCartItem v-for="cartItem of goods" :shoppingCartItem="cartItem" @removeItem="removeItem" :key="cartItem.id"></shoppingCartItem>
        </div>
        </div>
<div class="shopping_cart_checkout container">
    <div class="shipping_adress">
        <h3 class="total_price_text">Shipping Adress</h3>
        <select class="select_country">
            <option>Bangladesh</option>
            <option>Ukraine</option>
            <option>Russia</option>
            <option>United States</option>
            <option>United Kingdom</option>
        </select>
        <input type="text" class="shipping_input" placeholder="State">
        <input type="text" class="shipping_input" placeholder="Postcode / Zip">
        <button type="submit" class="shopping_cart_button shopping_cart_checkout_button">get a quote</button>
    </div>
    <div class="coupon_discount">
        <h3 class="total_price_text">coupon discount</h3>
        <p class="text shopping_cart_text">Enter your coupon code if you have one</p>
        <input type="text" class="shipping_input" placeholder="State">
        <button type="submit" class="shopping_cart_button shopping_cart_checkout_button">Apply coupon</button>
    </div>
    <div class="proceed_to_checkout">
        <div>
            <span class="sub_total_price">Sub total</span>
            <span class="sub_total_price">{{this.totalPrice}}</span>
        </div>
        <div class="grand_total">
            <span class="total_price_text">GRAND TOTAl</span>
            <span class="figcap_text_pink" style="margin-left: 12px;">{{this.totalPrice}}</span>
        </div>
        <hr class="proceed_to_checkout_line">
        <a href="checkout.html" class="proceed_to_checkout_button">proceed to checkout</a>
    </div>
</div>
</div>`
});

Vue.component('shoppingCartItem', {
    props: ['shoppingCartItem'],
    template: `<div>
    <div class="shopping_cart_product">
            <div class="shopping_cart_product_left">
                <img class="shopping_cart_product_img" :src="'img/product_sort_img_' + shoppingCartItem.id + '.png'" alt="product_sort_img">
                <div class="shopping_cart_product_info">
                    <h3 class="checkout_title">{{shoppingCartItem.title}}</h3>
                    <span class="shopping_cart_product_text">Color:</span>
                    <span class="shopping_cart_product_text shopping_cart_product_text_grey">Red</span>
                    <br>
                    <span class="shopping_cart_product_text">Size:</span>
                    <span class="shopping_cart_product_text shopping_cart_product_text_grey">XL</span>
                </div>
            </div>
            <div class="shopping_cart_product_details">
                <p class="shopping_cart_product_details_text">{{shoppingCartItem.price}}</p>
                <p class="shopping_cart_product_details_text">{{shoppingCartItem.quantity}}</p>
                <p class="shopping_cart_product_details_text">free</p>
                <p class="shopping_cart_product_details_text">{{shoppingCartItem.price * shoppingCartItem.quantity}}</p>
                <div class="cancel">
                    <img class="cart_cancel" :id="shoppingCartItem.id" @click="$emit('removeItem', shoppingCartItem)" src="img/cart_cancel.png" alt="cross">
                </div>
            </div>
        </div>    
        <hr class="shopping_cart_line">
        </div>
    `
});