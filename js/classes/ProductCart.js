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

    deleteOneProduct() {
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
                ProductCart.carrito[productIndex].quantity -= parseInt(this.quantity);
                if (ProductCart.carrito[productIndex].quantity <= 0) {
                    ProductCart.carrito.splice(productIndex, 1);
                }
            }
        }
        localStorage.setItem('carrito', JSON.stringify(ProductCart.carrito));
    }



    static deleteAllProducts() {
        ProductCart.carrito = [];
        localStorage.setItem('carrito', JSON.stringify(ProductCart.carrito));
    }
}

export { ProductCart };