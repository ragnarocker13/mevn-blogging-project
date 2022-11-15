<template>
  <div class="posts" v-for="post in posts" :key="post._id">
    <router-link :to="{ name: 'blogPost', params: { id: post._id }}">
        <h3 class="title">{{ post.title }}</h3>
    </router-link>
    <p class="author">by {{ post.author }}</p>
    <p>{{ post.body.substring(0,300) + "..." }}</p>
  </div>
</template>

<script>

export default {
    name: 'BlogList',
    props: ['posts'],
    setup() {

    }
}
</script>

<style>

.author {
    font-size: 12px;
}

.title {
    text-transform: capitalize;
}

.posts {
    display: inline-block;
    width: 300px;
    height: 300px;
    border: 1px solid rgb(202, 202, 202);
    padding: 20px;
    border-radius: 15px;
    margin: 10px;
}

.posts a {
    text-decoration: none;
    color: darkgrey;
}

.posts a:hover {
    color: crimson;
}

</style>