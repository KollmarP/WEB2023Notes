<script setup lang="ts">
import {ref} from 'vue'

const products = ref([] as Product)
const isLoading = ref(false)

setTimeout(()=> products.value = getProducts(), 1000)

</script>

<template>
    <div>
        <h1 class="title">
            Product List
        </h1>
    </div>
    <progress v-if="isLoading" class="progress is-success" >Loading...</progress>

    <div class="product-list">
        <div v-for="product in products" :key="product.id" class="product">
            <img :src="product.thumbnail" :alt="product.title" />
            
        </div>
    </div>
</template>

<style scoped>

.product-list{
    display: flex;
    flex-wrap: wrap;
    background-color: aliceblue;
}

.product {
    flex-basis: 15rem;
    flex-grow: 1;
    margin: 1rem;
    padding: .5rem;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: .5rem;
    box-shadow: 0 0 1rem #000;
}

.price {
    font-size: 2em;
    
}

</style>