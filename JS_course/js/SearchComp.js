Vue.component('search', {
    data() {
        return {
            goods: [],
            filteredGoods: [],
            searchLine: '',
        }
    },
    mounted() {
        this.goods = this.$root.goods;
    },
    computed: {
        filterGoods() {
            let regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.goods.filter(good => regexp.test(good.title));
            return this.filteredGoods;
        }
    },
    template: `<div class="search_block">
    <input class="search" type="search" placeholder="Search for Item..." v-model="searchLine" @:click="filterGoods">
    <button class="search_button" type="submit">
        <i class="fas fa-search"></i>
    </button>
    <div class="search_result" v-show="this.searchLine.length > 0">
    <searchItem v-for="good of filteredGoods" :searchItem="good"></searchItem>
    </div>
    </div>`
});

Vue.component('searchItem', {
    props: ['searchItem'],
    template:
        `<div class="search_item">
            <a href="single_page.html">
                <img :src="'img/product_sort_img_' + searchItem.id + '.png'" alt="product_sort_img" class="cart_product_img">
    </a>
                <div class="cart_item_info">
                    <p class="cart_item_name">{{ searchItem.title }}</p>
                </div>

        </div>`
});