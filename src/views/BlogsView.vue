<template>
  <h1>BLOGS</h1>
  <div class="differentiator-subhead">
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
  </div>
  <BlogList :posts="posts" />
</template>

<script>
import BlogList from '../components/BlogList.vue'
import PostService from '@/composables/Postservice'
import { ref, onMounted } from 'vue'

export default {
    components: { BlogList },
    setup() {
        const posts = ref([]);
        const error = ref("");
        onMounted(async () => {
            try {
                posts.value = await PostService.getPosts();
                console.log(posts.value);
            }
            catch (err) {
                error.value = err.message;
            }
        });
        return { posts, error };
    }
}
</script>

<style>

.differentiator-subhead {
    color: rgb(92, 92, 92);
    width: 700px;
    margin: 15px auto ;
}

</style>