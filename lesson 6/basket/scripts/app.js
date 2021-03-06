let toBasketBtns = document.querySelectorAll('.toBasketBtn');
toBasketBtns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        let id = event.srcElement.dataset.id ;
        let price = event.srcElement.dataset.price;
        let name = event.srcElement.dataset.name;
        basket.addProduct({ id: id, price: price, name: name });   
    });
});

let basket = {
    products: {},
    //Добавляет продукт в корзину
    //@param {{ id: string, price: string, name:string}} product
    addProduct(product) {
        this.addProductToObject(product);
        this.renderProductInBasket(product);
        this.renderTotalSum();
        this.addRemoveBtnsListeners();
    },

    //Обработчик события клика по кнопке удаления товара.
    //@param {MouseEvent} event
    removeProductListener(event) {
        basket.removeProduct(event);
        basket.renderTotalSum();
    },

    //Метод удаляет продукт из объекта продуктов, а также из корзины на странице
    //@param {MouseEvent} event
    removeProduct(event) {
        let id = event.srcElement.dataset.id;
        this.removeProductFromObject(id);
        this.removeProductFromBasket(id);
    },

    //Метод удаляет товар из корзины. Если количество больше 1, то просто уменьшает его
    //@param {string} id
    removeProductFromBasket(id) {
        let countTd = document.querySelector(`.productCount[data-id="${id}"]`);
        if(countTd.textContent == 1) {
            countTd.parentNode.remove();
        } else {
            countTd.textContent--;
        }
    },

    //Метод удаляет продукт из объекта с продуктами.
    //@param {string} id
    removeProductFromObject(id) {
        if (this.products[id].count == 1){
            delete this.products[id];
        } else {
            this.products[id].count--;
        }
    },

    //Добавляем слушателей события клика по кнопкам удалить
    addRemoveBtnsListeners() {
        let btns = document.querySelectorAll('.productRemoveBtn');
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', this.removeProductListener);
        }
    },

    //Метод отображает общую сумму
    renderTotalSum() {
        document.querySelector('.total').textContent = this.getTotalSum();
    },

    //Метод считает стоимость всех продуктов в корзине.
    //@returns {number}
    getTotalSum() {
        let sum = 0;
        for (let key in this.products) {
            sum += this.products[key].price * this.products[key].count;
        }
        return sum;
    },

    //Метод добавлет продукт в объект с продуктами.
    //@param {{ id: string, price: string, name:string}} product
    addProductToObject(product) {
        if (this.products[product.id] == undefined) {
            this.products[product.id] = {
                price: product.price,
                name: product.name,
                count:1
            }
        } else {
            this.products[product.id].count++;
        }
    },
    
    //Метод отрисовывает продукт в корзине, если там такоей уже есть просто +1
    //@param {{ id: string, price: string, name:string}} product
    //@returns
    renderProductInBasket(product) {
        let productExist = document.querySelector(`.productCount[data-id="${product.id}"]`);
        if(productExist) {
            productExist.textContent++;
            return;
        }
        let = productRow = `
            <tr>
                <th scope = "row">${product.id}</th>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td class="productCount" data-id="${product.id}">1</td>
                <td><i class="fas fa-trash-alt productRemoveBtn" data-id="${product.id}"></i></td>
            </tr>
        `;
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML('beforeend', productRow);
    },
};

