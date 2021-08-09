Vue.component('cart', {
    data() {
        return {
            cartItems: [],
            isVisibleCart: false,
        }
    },
    template: `
    <div>
    <img class="cart" src="img/cart.svg" alt="cart" @click="isVisibleCart = !isVisibleCart">
    <div class="live_cart" v-show="isVisibleCart">
    <div class="cart_products" v-for="cartItem of cartItems"></div>
    <div class="cart_total">
        <p class="total_price_text">total</p>
        <p class="total_price_text total_price">$0</p>
    </div>
    <a href="checkout.html" class="live_cart_checkout">checkout</a>
    <a href="shopping_cart.html" class="go_to_cart">go to cart</a>
</div>
</div>`
});

Vue.component('cart-item', {
    props: ['cartItem'],
    template: `
    <div class="cart_item">
    <a href="single_page.html">
        <img src="img/product_sort_img_{{cartItem.id}}.png" alt="product_sort_img_{{cartItem.id}}" class="cart_product_img">
    </a>
    <div class="cart_item_info">
        <p class="cart_item_name">{{cartItem.title}}</p>
        <img class="cart_stars" src="img/cart_stars.png" alt="cart_stars">
        <p class="cart_price">{{cartItem.quantity}} x \${{cartItem.price}}</p>
    </div>
    <img class="cart_cancel" id="{{cartItem.id}}" src="img/cart_cancel.png" alt="cross">
</div>
<hr class="cart_item_line">
    `
});