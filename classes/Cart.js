class Cart {
    constructor(){
        this.total = 0;
        this.products = [];
    }
    addProduct(prod){
        this.products.push(prod);
        this.total += prod.price;
        
    }
    removeProduct(i){
        let removed = this.products.splice(i, 1); 
        console.log(removed);
        this.total -= removed[0].price;
        
    }
}




module.exports = Cart;