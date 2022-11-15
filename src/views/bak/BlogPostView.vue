<template>
<div v-if="post" v-for="p in post" :key="p._id" class="postView">
    <h2>{{ p.title.toUpperCase() }}</h2>
    <h4>by {{ p.author }}</h4>
    <p>{{ p.body }}</p>
    <div class="buttonContainer">
        <button @click="handleDelete">Delete</button>
        <button @click="handleUpdate">Update</button>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'

export default {
    name: 'BlogPostView',
    setup() {
        const post = ref({})
        const route = useRoute()
        const error = ref('')

        const load = async (id) => {
            
            try {
                axios.get(`http://localhost:5000/api/posts/${id}`)
                    .then((response) => {
                        post.value = response.data
                        console.log(post.value)
                        console.log(response.data)   

                        let res = response.data
                        post.value = res
                    })
            } catch(err) {
                error.value = err.message
            }            
        }

        const handleDelete = async () => {

            try {
                axios.delete('http://localhost:5000/api/posts/' + route.params.id)
                    .then(() => console.log('Post Deleted!'))
                    .then(() => router.push({ name: 'blogs'}))
            } catch(err) {
                error.value = err.message
            }
        }

        load(route.params.id)

        return { post, error, handleDelete }
    }
}
</script>

<style>

.postView {
    margin: auto;
    max-width: 800px;
}

.postView h4 {
    text-transform: capitalize;
}

.buttonContainer {
    display: flex;    
}

button {
    margin: 10px;
}

</style>