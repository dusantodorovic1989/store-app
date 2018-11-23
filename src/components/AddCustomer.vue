<template>
    <div>
        <h2>Add new customer</h2>

        <form @submit.prevent="addCustomer">
            <input v-model="newCustomer.name" type='text' placeholder='Name'/>
            <input v-model="newCustomer.email" type='text' placeholder='Email'/>
            <button class="btn btn-primary" type="submit">Add customer</button>
        </form>
    </div>
</template>

<script>
import CustomerService from '../services/CustomerService';
export default {
    data(){
        return{
            newCustomer:{},
        }
    },
    methods:{
        addCustomer(){
            CustomerService.add(this.newCustomer)
            this.newCustomer = {}
        }
    }
}
</script>

