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
    <!-- <div class="container">
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
    </div> -->

  <div class="container">
    <header></header>

    <form @submit.prevent="register" class="signup-form">
      <h2>Sign Up</h2>

      <label for="ime">Ime:</label>
      <input
        id="ime"
        type="text"
        name="ime"
        required
        @input="(e) => { ime = e.target.value }"
      />

      <label for="prezime">Prezime:</label>
      <input
        id="prezime"
        type="text"
        name="prezime"
        required
        @input="(e) => { prezime = e.target.value }"
      />

      <label for="email">Email:</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        @input="(e) => { email = e.target.value }"
      />

      <label for="lozinka">Lozinka:</label>
      <input
        id="lozinka"
        type="password"
        name="lozinka"
        required
        @input="(e) => { lozinka = e.target.value }"
      />

      <div class="buttons">
        <button type="submit">Registriraj se</button>
        <RouterLink to="/"><button type="button">Nazad</button></RouterLink>
      </div>

      <div class="login-redirect">
        <p>Već imaš račun? <RouterLink to="/login" class="log">Prijavi se</RouterLink></p>
      </div>
    </form>

    <footer></footer>
  </div>
</template>

<style scoped>
header, footer {
  background-color: #1B3B2F;
  height: 100%;
}

.container {
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 17% auto 10%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.signup-form {
  background-color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  justify-self: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: left;
  border-radius: 12px;
  padding: 30px 40px;
  width: 380px;
  margin: 20px 0;
}

.signup-form h2 {
  text-align: center;
  color: #1B3B2F;
  margin-bottom: 10px;
}

.signup-form label {
  font-weight: bold;
  color: #1B3B2F;
}

.signup-form input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  font-size: 14px;
}

.signup-form input:focus {
  border-color: #275c49;
}

.buttons {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
}

button {
  padding: 10px;
  background-color: #275c49;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  width: 100%;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #1B3B2F;
  cursor: pointer;
}

.login-redirect {
  text-align: center;
  margin-top: 10px;
}

.log {
  color: #275c49;
  font-weight: bold;
  text-decoration: none;
}

.log:hover {
  text-decoration: underline;
}

</style>