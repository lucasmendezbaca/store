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
        let productInCart = ProductCart.carrito.find(product => product.id === this.id && product.talle === this.talle);
        if (productInCart) {
            productInCart.quantity += parseInt(this.quantity);
        }
        else {
            ProductCart.carrito.push(this);
        }
        localStorage.setItem('carrito', JSON.stringify(ProductCart.carrito));
    }

    static addOneProduct(id, talla) {
        let product = ProductCart.carrito.find(product => product.id === id && product.talle === talla);
        product.quantity += 1;

        localStorage.setItem('carrito', JSON.stringify(ProductCart.carrito));
    }

    static deleteOneProduct(id, talla) {
        let product = ProductCart.carrito.find(product => product.id === id && product.talle === talla);
        product.quantity -= 1;

        if (product.quantity === 0) {
            ProductCart.carrito = ProductCart.carrito.filter(product => product.id !== id || product.talle !== talla);
        }

        localStorage.setItem('carrito', JSON.stringify(ProductCart.carrito));
    }


    static getQuantityProducts() {
        return ProductCart.carrito.reduce((acc, product) => acc + product.quantity, 0);
    }

    static deleteAllProducts() {
        ProductCart.carrito = [];
        localStorage.setItem('carrito', JSON.stringify(ProductCart.carrito));
    }
}

export { ProductCart };