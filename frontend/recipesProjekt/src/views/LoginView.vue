<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router';
import axios from 'axios'

const router = useRouter();

const email = ref()
const lozinka = ref()

async function login() {
  const response = await axios.post('http://localhost:3000/api/v1/users/login', {
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

    <form @submit.prevent="login" class="login-form">
      <h2>Login</h2>

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
        <button type="submit">Prijavi se</button>
        <RouterLink to="/"><button type="button">Nazad</button></RouterLink>
      </div>

      <div class="register">
        <p>Nemaš račun? <RouterLink to="/signup" class="reg">Registriraj se</RouterLink></p>
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

.login-form {
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

.login-form h2 {
  text-align: center;
  color: #1B3B2F;
  margin-bottom: 10px;
}

.login-form label {
  font-weight: bold;
  color: #1B3B2F;
}

.login-form input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  font-size: 14px;
}

.login-form input:focus {
  border-color: #275c49;
}

.buttons {
  display: flex;
  justify-content: space-between;
  gap: 10px;
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

.register {
  text-align: center;
  margin-top: 10px;
}

.reg {
  color: #275c49;
  font-weight: bold;
  text-decoration: none;
}

.reg:hover {
  text-decoration: underline;
}

</style>