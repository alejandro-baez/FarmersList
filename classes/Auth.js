const Customer = require('./Customer');

class Auth {
    constructor(){
        this.customers = [];
    }
    register(name, email, shippingAddress){
        let newCust = new Customer(name, email, shippingAddress);
        this.customers.push(newCust);
    }
    login(email){
        for(let i = 0; i < this.customers.length; i++){
            if(this.customers[i].email === email){
                return this.customers[i];
            }
        }
        return null;
    }
};


module.exports = Auth;