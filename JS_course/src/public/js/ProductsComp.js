Vue.component('products', {
    data() {
        return {
            goods: [],
        }
    },
    mounted() {
        this.$parent.getJson('/api/products')
            .then(data => {
                for (let el of data) {
                    this.goods.push(el);
                }
            });
    },
    template: `<div class="product_list">
    <product v-for="good of goods" :product="good" :key="good.id"></product>
    </div>`
});

Vue.component('product', {
    props: ['product'],
    template: `
    <div class="product_box">
    <a class="link" href="single_page.html">
        <img class="product_box_img" :src="'img/product_sort_img_' + product.id + '.png'" alt="product_img">
    <p class="text_box">{{product.title}}</p>
        <p class="text_box text_box_pink">
            $ {{product.price.toFixed(2)}}</p>
    </a>
    <div class="box_add">
        <a :id="product.id" class="add" @click="$root.$refs.cart.addItem(product)">
        <img :id="product.id" class="product_cart" src="img/cart.svg" alt="cart">
            Add to Cart</a>
    </div>
    </div>`
});