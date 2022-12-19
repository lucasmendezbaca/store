class ProductCart {
    static carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    constructor(id, title, image, price, quantity, talle) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.price = price;
        this.quantity = quantity;
        this.talle = talle;
    }

    addProduct() {
        let productExist = false;
        let productIndex = 0;
        ProductCart.carrito.forEach((product, index) => {
            if (product.id === this.id) {
                productExist = true;
                productIndex = index;
            }
        });
        if (productExist) {
            if (ProductCart.carrito[productIndex].talle == this.talle) {
                 ProductCart.carrito[productIndex].quantity += parseInt(this.quantity);
            } else {
                ProductCart.carrito.push(this);
            }
        } else {
            ProductCart.carrito.push(this);
        }
        localStorage.setItem('carrito', JSON.stringify(ProductCart.carrito));
    }

    static addOneProduct(id, talla) {
        let productsSameId = ProductCart.carrito.filter(product => product.id === id);
        productsSameId.forEach((product, index) => {
            if (product.talle === talla) {
                ProductCart.carrito[index].quantity += 1;
            }
        });
        localStorage.setItem('carrito', JSON.stringify(ProductCart.carrito));
    }

    static deleteOneProduct(id, talla) {
        let productsSameId = ProductCart.carrito.filter(product => product.id === id);
        productsSameId.forEach((product, index) => {
            if (product.talle === talla) {
                ProductCart.carrito[index].quantity -= 1;
                if (ProductCart.carrito[index].quantity === 0) {
                    ProductCart.carrito.splice(index, 1);
                }
            }
        });
        localStorage.setItem('carrito', JSON.stringify(ProductCart.carrito));
    }


    static getQuantityProducts() {
        let quantity = 0;
        ProductCart.carrito.forEach(product => {
            quantity += product.quantity;
        });

        return quantity;
    }

    static deleteAllProducts() {
        ProductCart.carrito = [];
        localStorage.setItem('carrito', JSON.stringify(ProductCart.carrito));
    }
}

export { ProductCart };