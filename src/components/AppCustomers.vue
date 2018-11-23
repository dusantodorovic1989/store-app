<template>
    <div>
            
        <table border ="1">
            <thead>
                <td>Name</td>
                <td>Email</td>
            </thead>

            <tbody>
                <tr v-for="(customer,key) in customers" :key ='key'>
                    <td>{{customer.name}}</td>
                    <td>{{customer.email}}</td>

                    <button @click="removeCustomer(customer)" class="btn btn-danger">Remove</button>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
import CustomerService from '../services/CustomerService';


export default {
    
     data(){
        return{
           customers: CustomerService.list(),
           
        }
     },
     methods:{
        removeCustomer(customer){
            CustomerService.remove(customer);
        }
     }
}

</script>

