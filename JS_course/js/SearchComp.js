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
            if (this.filteredGoods.length == 0) {
                document.querySelector('.product_list').innerHTML = `<p>Нет данных</p>`;
            }
            return this.filteredGoods;
        }
    },
    template: `<div class="search_block">
    <input class="search" type="search" placeholder="Search for Item..." v-model="searchLine" @:click="filterGoods">
    <button class="search_button" type="submit">
        <i class="fas fa-search"></i>
    </button>
    </div>`
});