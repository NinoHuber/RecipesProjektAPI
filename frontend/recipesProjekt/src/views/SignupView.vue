<script setup>
import {ref} from 'vue'
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
import axios from 'axios'

const userStore = useUserStore()
const router = useRouter();

const ime = ref()
const prezime = ref()
const email = ref()
const lozinka = ref()

async function register() {
  if(lozinka.value.length < 8) {
    alert("lozinka mora imati 8 ili vise karaktera")
  }
  const response = await axios.post('http://localhost:3000/api/v1/users/signup', {
      firstName: ime.value,
      lastName: prezime.value,
      email: email.value,
      password: lozinka.value
  })

  const token = response.data.token
  localStorage.setItem('token', token)
  

  router.push('/')
}

</script>

<template>
    <div class="container">
      <header></header>
    
      <form @submit.prevent="register">
        <h2 style="grid-column: span 2; text-align: center;">Sign Up</h2>
        <label>Ime:</label>
        <input type="text" name="ime" required @input="(e) => {ime = e.target.value}">
        <label>Prezime:</label>
        <input type="text" name="prezime" required @input="(e) => {prezime = e.target.value}">
        <label>Email:</label>
        <input type="email" name="email" required @input="(e) => {email = e.target.value}">
        <label>Lozinka:</label>
        <input type="password" name="lozinka" required @input="(e) => {lozinka = e.target.value}">
        <div class="buttons">
          <button type="submit">Registriraj se</button>
          <RouterLink to="/"><button>Nazad</button></RouterLink>
        </div>
        <span style="grid-column: span 2;"><p>Već imaš račun?</p><RouterLink to="/login" class="log">Prijavi se</RouterLink></span>
      </form>
      
      <footer></footer>
    </div>
</template>

<style scoped>
  header {
    background-color: #1B3B2F;
    height: 100%;
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
  }
  form {
    background-color: rgba(3, 27, 7, 0.3);
    justify-self: center;
    display: grid;
    grid-template-columns: 35% 65%;
    grid-template-rows: auto;
    text-align: center;
    border: 2px solid grey;
    border-radius: 12px;
    margin: 20px 0px;
    padding: 15px 40px;
    justify-items: center;
    align-items: center;
    width: 430px;
  }
  input {
    background: none;
    border: none;
    border-bottom: 2px solid #1B3B2F;
  }
  input:focus {
    outline: none;
  }
  .buttons {
    grid-column: span 2;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 10px;
    width: 100%;
  }
  button {
    padding: 10px 15px;
    background-color: #275c49;
    border: 2px solid #1B3B2F;
    border-radius: 15px;
    color: white;
    width: 100%;
  }
  button:hover {
    cursor: pointer;
    background-color: #0d1d17;
  }
  .log {
    color: blue;
  }
</style>