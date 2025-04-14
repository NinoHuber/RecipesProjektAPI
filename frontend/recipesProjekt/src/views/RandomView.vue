<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const recipes = ref()

const naziv = ref()
const slika = ref()

onMounted(async() => {
    const response = await axios.get('http://localhost:3000/api/v1/recipes', {headers: {Authorization: 'Bearer ' + localStorage.getItem("token")}})
    recipes.value = response.data.data.recipes
    console.log(recipes.value)
    const randomRecipe = recipes.value[Math.floor(Math.random() * recipes.value.length)];
    console.log(randomRecipe)
    naziv.value = randomRecipe.name
    slika.value = randomRecipe.imageUrl
})
</script>

<template>
<div class="container">
    <header>
        <RouterLink to="/">Nazad</RouterLink>
    </header>

    <div class="recept">
        <h2>{{ naziv }}</h2>
        <img :src="slika" alt="slike od random recepta">
    </div>

    <footer></footer>
</div>
</template>

<style scoped> 
header {
    background-color: #1B3B2F;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  footer {
    background-color: #1B3B2F;
    height: 100%;
  }
  .container {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 17% auto 10%;
    overflow: hidden;
  }
  .recept {
    height: 100%;
    justify-self: center;
    align-self: center;
    display: grid;
    text-align: center;
    align-items: center;
    justify-items: center;
    grid-template-rows: 1fr 5fr;
  }
  header a {
      color: white;
      text-decoration: none;
      font-size: 20px;
      margin-right: 25px;
      padding: 10px 15px;
      border-radius: 4px;
      transition: background 0.3s ease;
    }

    header a:hover {
      background-color: #A3B9A3;
      color: #1B3B2F;
      cursor: pointer;
    }
    img {
        width: 800px;
        height: 400px;
        border: 5px solid #1B3B2F;
        border-radius: 12px;
        box-shadow: #1B3B2F 0px 0px 60px 25px;
    }
    h2 {
        font-size: 3em;
    }
</style>