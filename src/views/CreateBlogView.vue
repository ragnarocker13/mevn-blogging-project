<template>
  <h2>CREATE NEW POST</h2>

  <form @submit.prevent="handleSubmit" class="inputForm">
    <label>Title</label>
    <input type="text" required v-model="title" placeholder="Please enter a title">
    <label>Author</label>
    <input type="text" required v-model="author" placeholder="Author Name">
    <label>Body</label>
    <textarea type="text" required v-model="body" placeholder="Please enter your post"></textarea>
    <label>Category</label>
    <input type="text" v-model="category" placeholder="Enter Category">
    <button>Add Post</button>
  </form>
  
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
// import PostService from '@/composables/Postservice'
import router from '@/router'


export default {
  setup() {

    const title = ref('')
    const author = ref('')
    const body = ref('')
    const category = ref('')

    const handleSubmit = async () => {
      
      const res = await axios.post('http://localhost:5000/api/posts', {
        title: title.value,
        author: author.value,
        body: body.value,
        category: category.value
      })
      .then((response) => {
        console.log(response)
      })
      .then(() => router.push({ name: 'blogs' }))     
      
    }

    return { handleSubmit, title, body, author, category }
  }

}
</script>

<style>
form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
}

input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid grey;
    border-radius: 10px;
}

textarea {
    height: 160px;
}

label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: #222;
    margin-bottom: 10px;
}

.pill {
    display: inline-block;
    background: rgb(11, 91, 211);
    color: white;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: bold;
    border-radius: 20px;
    width: 200;
    padding: 6px 12px;
    margin: 5px 10px 0 0;
    display: inline-block;
    cursor: pointer;
}

button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
}

::placeholder {
  font-style: italic;
  color: darkgrey;
}
</style>