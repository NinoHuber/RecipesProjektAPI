<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'

let isLoggedIn = ref(false)

let recipes = ref([])

let toggleRemove = ref(false)
let toggleAdd = ref(false)
let toggleUpdate = ref(false)

let id = ref()

let recipeName = ref('')
let recipeDesc = ref('')
let recipeIngr = ref([])
let recipeInst = ref([])
let recipeUrl = ref('')

async function readRecipes() {
  const response = await axios.get('http://localhost:3000/api/v1/recipes', {headers: {Authorization: 'Bearer ' + localStorage.getItem("token")}})
  recipes.value = response.data.data.recipes
}

function getImageUrl(filename) {
  if (filename.startsWith('http')) {
    return filename
  }
  return new URL(`./slike/${filename}`, import.meta.url).href
}

onMounted(async() => {
  let token = localStorage.getItem("token")
  if(token != undefined || token != null) {
    isLoggedIn.value = true
  }
  readRecipes()
})

function logout() {
  localStorage.removeItem("token")
  isLoggedIn.value = false
}

async function removeRecipe() {
  const response = await axios.delete('http://localhost:3000/api/v1/recipes/' + id.value, {headers: {Authorization: 'Bearer ' + localStorage.getItem("token")}})
  readRecipes()
  toggleRemove.value = !toggleRemove.value
  id.value = ""
}

async function addRecipe() {
  let newRecipe = {
    "name": recipeName.value,
    "description": recipeDesc.value,
    "ingredients": recipeIngr.value.split(","),
    "instructions": recipeInst.value.split(","),
    "imageUrl": recipeUrl.value
  }
  const response = await axios.post('http://localhost:3000/api/v1/recipes', newRecipe, {headers: {Authorization: 'Bearer ' + localStorage.getItem("token")}})
  readRecipes()
  recipeName.value = ""
  recipeDesc.value = ""
  recipeIngr.value = ""
  recipeInst.value = ""
  recipeUrl.value = ""
  toggleAdd.value = !toggleAdd
}

async function updateRecipe() {
  let updatedRecipe = {}

  if (recipeName.value.trim()) updatedRecipe.name = recipeName.value
  if (recipeDesc.value.trim()) updatedRecipe.description = recipeDesc.value
  if (recipeIngr.value.length > 0) updatedRecipe.ingredients = recipeIngr.value.split(',').map(i => i.trim())
  if (recipeInst.value.length > 0) updatedRecipe.instructions = recipeInst.value.split(',').map(i => i.trim())
  if (recipeUrl.value.trim()) updatedRecipe.imageUrl = recipeUrl.value

  const response = await axios.patch('http://localhost:3000/api/v1/recipes/' + id.value, updatedRecipe, {headers: {Authorization: 'Bearer '+ localStorage.getItem("token")}})

  readRecipes()

  id.value = ""
  recipeName.value = ""
  recipeDesc.value = ""
  recipeIngr.value = ""
  recipeInst.value = ""
  recipeUrl.value = ""
  toggleUpdate.value = !toggleUpdate
}

const selectedRecipe = ref(null)

function showRecipe(recipe) {
  selectedRecipe.value = recipe
}

function closeRecipe() {
  selectedRecipe.value = null
}

function keep(toggle) {
  if(toggle == 'add') {
    toggleRemove.value = false
    toggleUpdate.value = false
  }else if(toggle == 'remove') {
    toggleAdd.value = false
    toggleUpdate.value = false
  }else if(toggle == 'update') {
    toggleAdd.value = false
    toggleRemove.value = false
  }
}
</script>

<template>
  <div class="header1">
    <RouterLink to="/login" v-if="!isLoggedIn">Log In</RouterLink>
    <RouterLink to="/signup" v-if="!isLoggedIn">Sign Up</RouterLink>
    <a v-if="isLoggedIn" @click="toggleAdd = !toggleAdd; keep('add')">Add Recipe</a>
    <a v-if="isLoggedIn" @click="toggleRemove = !toggleRemove; keep('remove')">Remove Recipe</a>
    <a v-if="isLoggedIn" @click="toggleUpdate = !toggleUpdate; keep('update')">Update Recipe</a>
    <a @click="logout" v-if="isLoggedIn">Log Out</a>
  </div>

  <div class="remove" v-if="toggleRemove">
    <label>ID:</label>
    <input type="text" v-model="id">
    <button @click="removeRecipe()">Remove</button>
  </div>

  <div class="add" v-if="toggleAdd">
    <label>name:</label>
    <input type="text" v-model="recipeName">
    <label>descirption:</label>
    <input type="text" v-model="recipeDesc">
    <label>ingredients:</label>
    <input type="text" v-model="recipeIngr" placeholder="svaki odvojen zarezom">
    <label>instructions:</label>
    <input type="text" v-model="recipeInst" placeholder="svaki odvojen zarezom">
    <label>Image URL:</label>
    <input type="text" v-model="recipeUrl">
    <button @click="addRecipe()">Add</button>
  </div>

  <div class="update" v-if="toggleUpdate">
    <label>ID:</label>
    <input type="text" v-model="id">
    <label>name:</label>
    <input type="text" v-model="recipeName">
    <label>descirption:</label>
    <input type="text" v-model="recipeDesc">
    <label>ingredients:</label>
    <input type="text" v-model="recipeIngr" placeholder="svaki odvojen zarezom">
    <label>instructions:</label>
    <input type="text" v-model="recipeInst" placeholder="svaki odvojen zarezom">
    <label>Image URL:</label>
    <input type="text" v-model="recipeUrl">
    <button @click="updateRecipe()">Update</button>
  </div>

  <div class="header">Recipe Site</div>

  <div v-if="selectedRecipe" class="modal-overlay" @click.self="closeRecipe">
  <div class="modal-card">
    <h2>{{ selectedRecipe.name }}</h2>
    <img :src="getImageUrl(selectedRecipe.imageUrl)" alt="">
    <p><strong>ID:</strong> {{ selectedRecipe.id }}</p>
    <div class="podjela">
      <div class="sastojci">
      <p><strong>Sastojci:</strong></p> <ul><li v-for="ingredient in selectedRecipe.ingredients">{{ ingredient }}</li></ul>
      </div>
      <div class="instrukcije">
      <p><strong>Instrukcije:</strong></p> <ol><li v-for="instruction in selectedRecipe.instructions"> {{ instruction }}</li></ol>
      </div>
    </div>
  </div>
</div>

  <div class="recipes">
    <div v-if="!isLoggedIn">
      <h2>Log In da vidite recepte</h2>
    </div>
    <div class="recipe" v-for="recipe in recipes" @click="showRecipe(recipe)" v-if="isLoggedIn">
      <img :src="getImageUrl(recipe.imageUrl)" alt="">
      <h3>{{ recipe.name }}</h3>
    </div>
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
      cursor: pointer;
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
      position: absolute;
      width: 100%;
      bottom: 0;
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
  .remove, .add, .update {
  position: fixed;
  top: 80px;
  right: 20px;
  width: 300px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.remove label, .add label, .update label {
  font-weight: bold;
  margin-top: 8px;
}

.remove input, .add input, .update input {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #aaa;
  outline: none;
  font-size: 14px;
}

.remove button, .add button, .update button {
  padding: 10px;
  background-color: #1B3B2F;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove button:hover, .add button:hover, .update button:hover {
  background-color: #3e6b57;
}

  .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  height: 90%;
  width: 60%;
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  text-align: center;
}

.modal-card img {
  width: 40%;
  height: 50%;
  margin-bottom: 20px;
  border: #1B3B2F solid 3px;
  border-radius: 8px;
}

.podjela {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
}

.sastojci, .instrukcije {
  width: 90%;
}

.podjela ul {
  list-style-type: none;
  background-color: #eee;
  border-radius: 12px;
  width: 100%;
  padding: 5px 25px;
}

.podjela ol {
  background-color: #eee;
  border-radius: 12px;
  width: 100%;
  padding: 5px 25px;
}
  </style>
