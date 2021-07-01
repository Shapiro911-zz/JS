class Burger {
    constructor() {
        this.price = 50;
        this.calories = 20;
    }
    sizeChange(id) {
        if (id == '1') {
            this.price = this.price - 100 + 50;
            this.calories = this.calories - 40 + 20;
        }
        else if (id == '2') {
            this.price = this.price + 100 - 50;
            this.calories = this.calories + 40 - 20;
        };
    }
    addTopping(id) {
        if (id == '1') {
            this.price += 10;
            this.calories += 20;
        }
        else if (id == '2') {
            this.price += 20;
            this.calories += 5;
        }
        else if (id == '3') {
            this.price += 15;
            this.calories += 10;
        }
        else if (id == '4') {
            this.price += 15;
        }
        else if (id == '5') {
            this.price += 20;
            this.calories += 5;
        };
    }
    removeTopping(id) {
        if (id == '1') {
            this.price -= 10;
            this.calories -= 20;
        }
        else if (id == '2') {
            this.price -= 20;
            this.calories -= 5;
        }
        else if (id == '3') {
            this.price -= 15;
            this.calories -= 10;
        }
        else if (id == '4') {
            this.price -= 15;
        }
        else if (id == '5') {
            this.price -= 20;
            this.calories -= 5;
        };
    }
    changeTotal() {
        let totalPrice = document.querySelector('.total_price');
        let totalCalories = document.querySelector('.total_calories');
        totalPrice.innerText = this.price + 'р.';
        totalCalories.innerText = this.calories + ' cal';
    };
};

let burger = new Burger();

let sizes = document.querySelectorAll('input[type=radio]');

for (let i = 0; i < sizes.length;) {
    sizes[i].setAttribute("id", `${++i}`);
};

let toppings = document.querySelectorAll('input[type=checkbox]');

for (let i = 0; i < toppings.length;) {
    toppings[i].setAttribute("id", `${++i}`);
};

let inputs = document.querySelectorAll('input');

sizes.forEach(size => {
    size.addEventListener('click', function (event) {
        if (!event.target.classList.contains('active')) {
            sizes.forEach(size => {
                size.classList.toggle('active');
            });
            burger.sizeChange(event.target.getAttribute('id'));
            burger.changeTotal();
        };
    });
})

toppings.forEach(size => {
    size.addEventListener('click', function (event) {
        if (!event.target.classList.contains('active')) {
            clickButtonHandler(event);
            burger.addTopping(event.target.getAttribute('id'));
            burger.changeTotal();
        }
        else if (event.target.classList.contains('active')) {
            clickButtonHandler(event);
            burger.removeTopping(event.target.getAttribute('id'));
            burger.changeTotal();
        }
    });
})

function clickButtonHandler(event) {
    event.target.classList.toggle('active');
}

