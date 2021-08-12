const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const products = [
    { id: 1, title: 'clothes', price: 52.00 },
    { id: 2, title: 'mango people t-shirt', price: 52.00 },
    { id: 3, title: 'mango people t-shirt', price: 52.00 },
    { id: 4, title: 'mango people t-shirt', price: 52.00 },
    { id: 5, title: 'mango people t-shirt', price: 52.00 },
    { id: 6, title: 'mango people t-shirt', price: 52.00 },
    { id: 7, title: 'mango people t-shirt', price: 52.00 },
    { id: 8, title: 'mango people t-shirt', price: 52.00 },
    { id: 9, title: 'clothes', price: 52.00 }
];

const productPage = new Vue({
    el: '#product-page',
    data: {
        goods: products,
        cartItem: [],
    },
    mounted() {
        let addButtons = document.querySelector('.product_list');
        addButtons.addEventListener('click', function (event) {
            let cartItem;
            for (let i = 0; i < goodsList.goods.length; i++) {
                if (event.target.getAttribute('id') == goodsList.goods[i].id) {
                    cartItem = new CartItem(goodsList.goods[i].id, goodsList.goods[i].title, goodsList.goods[i].price, 1);
                    break;
                }
            }
            productPage.$refs.cart.addItem(cartItem);
        });
    }
});