Vue.component('productdetails', {
    data() {
        return {
            linkGood: []
        }
    },
    mounted() {
        this.$parent.getJson('/api/linkGood')
            .then(data => {
                for (let el of data) {
                    this.linkGood.push(el);
                }
            });
    },
    template: `<div>
    <div class="slider">
    <div class="slider_block"><i class="fas fa-chevron-left"></i></div>
    <img class="single_product_img" :src="'img/product_sort_img_' + this.linkGood[0].id + '.png'" alt="product_sort_img"">
    <div class="slider_block"><i class="fas fa-chevron-right"></i></div>
</div>
<div class="product_description">
    <div class="product_description_box container">
        <h4 class="product_description_collection">women collection</h4>
        <div class="product_descripion_line">
            <hr class="line_pink">
        </div>
        <h3 class="product_description_title">{{this.linkGood[0].title}}</h3>
        <p class="text product_description_text">Compellingly actualize fully researched processes before
            proactive
            outsourcing. Progressively syndicate collaborative architectures before cutting-edge services.
            Completely visualize parallel core competencies rather than exceptional portals. </p>
        <div class="product_description_info">
            <div class="product_description_info_left">
                <span class="product_description_info_text">MATERIAL: </span>
                <span class="product_description_info_text product_description_info_text_black">cotton</span>
            </div>
            <div>
                <span class="product_description_info_text">DESIGNER: </span>
                <span class="product_description_info_text product_description_info_text_black">BINBURHAN</span>
            </div>
        </div>
        <h3 class="product_description_cost">\${{this.linkGood[0].price}}</h3>
        <hr class="line_grey">
        <div class="product_description_characteristics">
            <div class="product_description_characteristic">
                <p class="product_description_info_text product_description_info_text_black">CHOOSE COLOR</p>
                <select class="product_choose">
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                    <option>Green</option>
                    <option>Black</option>
                    <option>White</option>
                </select>
            </div>
            <div class="product_description_characteristic">
                <p class="product_description_info_text product_description_info_text_black">CHOOSE size</p>
                <select class="product_choose">
                    <option>XXL</option>
                    <option>XL</option>
                    <option>L</option>
                    <option>M</option>
                    <option>S</option>
                    <option>XS</option>
                    <option>XXS</option>
                </select>
            </div>
            <div class="product_description_characteristic">
                <p class="product_description_info_text product_description_info_text_black">quantity</p>
                <input type="number" class="product_quantity" placeholder="1">
            </div>
        </div>
        <button class="button_add_to_cart">Add to Cart</button>
    </div>
</div>
<div class="like_also">
    <div class="container">
        <h3 class="like_also_title">you may like also</h3>
        <div class="product_list">
            <div class="product_box">
                <a class="link" href="index.html">
                    <div class="like_also_img_box">
                        <img src="img/like_also_1.png" alt="like_also_1">
                    </div>
                    <p class="text_box">blaze leggins</p>
                    <p class="text_box text_box_pink">
                        $52.00</p>
                </a>
                <div class="box_add">
                    <a class="add" href="#"><img class="product_cart" src="img/cart.svg" alt="cart">
                        Add to Cart</a>
                </div>
            </div>
            <div class="product_box">
                <a class="link" href="index.html">
                    <div class="like_also_img_box">
                        <img src="img/like_also_2.png" alt="like_also_2">
                    </div>
                    <p class="text_box">ALEXA SWEATER</p>
                    <p class="text_box text_box_pink">
                        $52.00</p>
                </a>
                <div class="box_add">
                    <a class="add" href="#"><img class="product_cart" src="img/cart.svg" alt="cart">
                        Add to Cart</a>
                </div>
            </div>
            <div class="product_box">
                <a class="link" href="index.html">
                    <div class="like_also_img_box">
                        <img src="img/like_also_3.png" alt="like_also_3">
                    </div>
                    <p class="text_box">AGNES TOP</p>
                    <p class="text_box text_box_pink">
                        $52.00</p>
                </a>
                <div class="box_add">
                    <a class="add" href="#"><img class="product_cart" src="img/cart.svg" alt="cart">
                        Add to Cart</a>
                </div>
            </div>
            <div class="product_box">
                <a class="link" href="index.html">
                    <div class="like_also_img_box">
                        <img src="img/like_also_4.png" alt="like_also_4">
                    </div>
                    <p class="text_box">SYLVA SWEATER</p>
                    <p class="text_box text_box_pink">
                        $52.00</p>
                </a>
                <div class="box_add">
                    <a class="add" href="#"><img class="product_cart" src="img/cart.svg" alt="cart">
                        Add to Cart</a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`
});