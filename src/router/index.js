import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogsView from '../views/BlogsView.vue'
import CreateBlogView from '../views/CreateBlogView.vue'
import BlogPostView from '../views/BlogPostView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: BlogsView
  },  
  {
    path: '/create',
    name: 'createBlogs',
    component: CreateBlogView
  },
  {
    path: '/blogs/:id',
    name: 'blogPost',
    component: BlogPostView
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
