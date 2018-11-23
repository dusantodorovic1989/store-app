const customers = [
    {id: 1, name: 'Dusan Todorovic', email: 'dusantod@gmail.com', products:[]},
    {id: 2, name: 'Sasa Todorovicc', email: 'tod@gmail.com', products:[]},
    {id: 3, name: 'Dragana Todorovicc', email: 'dtod@gmail.com', products:[]},
];

let nextId = 4;

class CustomerServis{
    list(){
        return customers;
    }

    find(id){
        return customers.find(customer => customer.id == id);
    }
    
    add(customer){
        customer.id = nextId;
        customers.push(customer);
        nextId++
    }
    remove(customer){
        customers.splice(customers.indexOf(customer),1);
    }
    addProductCustomer(customer,product){
        customer.products.push(product)
    }
}
const customerService = new CustomerServis();

export default customerService;