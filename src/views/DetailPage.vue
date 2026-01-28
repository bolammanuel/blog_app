<template>
  <div class="detail-page">
    <LoadingSpinner v-if="loading" />
    
    <div v-else-if="!post" class="container">
      <NotFound />
    </div>

    <div v-else class="container">
      <div class="navigation">
        <button @click="goBack" class="nav-btn">
          ← Back
        </button>
        <router-link to="/" class="nav-btn">
          🏠 Home
        </router-link>
      </div>

      <article class="article">
        <header class="article-header">
          <h1>{{ post.title }}</h1>
          <div class="meta">
            <span>Post #{{ post.id }}</span>
            <span>•</span>
            <span>User ID: {{ post.userId }}</span>
          </div>
        </header>

        <div class="article-body">
          <p>{{ post.body }}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import NotFound from './NotFound.vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const route = useRoute()
const router = useRouter()

const post = ref(null)
const loading = ref(true)

const goBack = () => {
  router.go(-1)
}

const fetchPost = async () => {
  try {
    loading.value = true
    const postId = props.id || route.params.id
    
    const response = await axios.get(`https://api.oluwasetemi.dev/posts/${postId}`)
    post.value = response.data
  } catch (err) {
    console.error('Error fetching post:', err)
    
    try {
      const postId = props.id || route.params.id
      const fallbackResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      post.value = fallbackResponse.data
    } catch (fallbackErr) {
      post.value = null
    }
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPost()
})
</script>

<style scoped>
.detail-page {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #ecfdf5, #d1fae5);
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.navigation {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.nav-btn {
  background: white;
  color: #374151;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  text-decoration: none;
  display: inline-block;
}

.nav-btn:hover {
  background: #f3f4f6;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.article {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.article-header {
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
}

.article-header h1 {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
}

.meta {
  display: flex;
  gap: 0.75rem;
  color: #6b7280;
  font-size: 0.875rem;
}

.article-body p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #374151;
}
</style>