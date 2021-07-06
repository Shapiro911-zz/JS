function makeGETRequest(url, callback) {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(xhr.responseText);
        }
    }
    xhr.open('GET', url, true);
    xhr.send();
}

/*const makeGETRequest = (url) => {
    const promise = new Promise((resolve, reject) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    resolve(xhr.responseText);
                }
                else {
                    reject('Error');
                }
            }
        }
        xhr.open('GET', url, true);
        xhr.send();
    });
    return promise;
}*/

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsList {
    constructor() {
        this.goods = [];
    }
    /*fetchGoods(cb) {
        makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            console.log('Fetch:', this.goods);
            cb();
        })
    }*/

    render() {
        let listHtml = '';
        console.log("render = ", this.goods);
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    fetchGoods(url) {
        makeGETRequest(`${url}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            this.render();
        })
    }
}

const list = new GoodsList();
list.fetchGoods(API_URL);
