<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'

let isLoggedIn = ref(false)


onMounted(async() => {
  let token = localStorage.getItem("token")
  if(token != undefined || token != null) {
    isLoggedIn.value = true
  }
})

function logout() {
  localStorage.removeItem("token")
  isLoggedIn.value = false
}
</script>

<template>
  <div class="header1">
    
    <RouterLink to="/login" v-if="!isLoggedIn">Log In</RouterLink>
    <RouterLink to="/signup" v-if="!isLoggedIn">Sign Up</RouterLink>
    <RouterLink to="/random" v-if="isLoggedIn">Random Recipe</RouterLink>
    <a @click="logout" v-if="isLoggedIn">Log Out</a>
  </div>

  <div class="header">Recipe Site</div>

  <div class="recipes">
    <RouterLink to="/lazanje" class="recipe">
      <img src="./slike/Lasagna-Bolognese-scaled.jpg" alt="Lazanje" />
      <h3>Lazanje</h3>
    </RouterLink>
    <RouterLink to="/pizza" class="recipe">
      <img src="./slike/the-best-homemade-margherita-pizza-1-4.jpg" alt="Pizza" />
      <h3>Pizza</h3>
    </RouterLink>
    <RouterLink to="/pasta" class="recipe">
      <img src="./slike/1200-Spaghetti-Carbonara-2-SpendWithPennies.jpg" alt="Pasta Carbonara" />
      <h3>Pasta Carbonara</h3>
    </RouterLink>
    <RouterLink to="/krofne" class="recipe">
      <img src="./slike/2.jpg" alt="Krofne" />
      <h3>Krofne</h3>
    </RouterLink>
  </div>

  <footer>
     Recipe Site.
  </footer>
</template>

<style scoped>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #F4F3EF;
      color: #333;
    }

    .header1 {
      background-color: #1B3B2F;
      padding: 15px 30px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .header1 a {
      color: white;
      text-decoration: none;
      font-size: 16px;
      margin-left: 20px;
      padding: 8px 12px;
      border-radius: 4px;
      transition: background 0.3s ease;
    }

    .header1 a:hover {
      background-color: #A3B9A3;
      color: #1B3B2F;
      cursor: pointer;
    }

    .header {
      background: url('./slike/header.png') no-repeat center/cover;
      padding: 160px 20px;
      text-align: center;
      color: white;
      font-size: 3em;
      font-weight: bold;
      background-blend-mode: multiply;
      background-color: rgba(27, 59, 47, 0.7);
    }

    .recipes {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 50px 20px;
      gap: 30px;
    }

    .recipe {
      background: white;
      width: 280px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
      transition: transform 0.2s, box-shadow 0.2s;
      text-decoration: none;
      color: inherit;
    }

    .recipe:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
    }

    .recipe img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }

    .recipe h3 {
      padding: 15px;
      font-size: 1.2em;
      text-align: center;
    }

    footer {
      background-color: #1B3B2F;
      color: white;
      text-align: center;
      padding: 20px 10px;
      font-size: 14px;
      margin-top: 50px;
    }

    @media (max-width: 600px) {
      .header {
        font-size: 2em;
        padding: 100px 10px;
      }

      .recipes {
        padding: 20px 10px;
      }

      .recipe {
        width: 90%;
      }

      .header1 {
        flex-direction: column;
        align-items: flex-start;
      }

      .header1 a {
        margin: 5px 0;
      }
    }
  </style>
