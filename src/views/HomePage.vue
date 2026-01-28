<template>
  <div class="home-page">
    <LoadingSpinner v-if="loading" />
    <ErrorDisplay v-else-if="error" :error="error" @retry="fetchPosts" />
    
    <div v-else class="container">
      <header class="header">
        <h1>My Blog</h1>
        <p>Discover amazing articles and stories</p>
      </header>

      <div v-if="posts.length === 0" class="no-posts">
        <p>No posts available.</p>
      </div>

      <div v-else class="posts-grid">
        <PostCard 
          v-for="post in posts" 
          :key="post.id" 
          :post="post"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import PostCard from '../components/PostCard.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import ErrorDisplay from '../components/ErrorDisplay.vue'

const posts = ref([])
const loading = ref(true)
const error = ref(null)

const fetchPosts = async () => {
  try {
    loading.value = true
    error.value = null
    
    const response = await axios.get('https://api.oluwasetemi.dev/posts')
    posts.value = response.data
  } catch (err) {
    console.error('Error fetching posts:', err)
    
    // Fallback to JSONPlaceholder
    try {
      const fallbackResponse = await axios.get('https://jsonplaceholder.typicode.com/posts')
      posts.value = fallbackResponse.data.slice(0, 20)
    } catch (fallbackErr) {
      error.value = 'Failed to load posts. Please try again.'
    }
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPosts()
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #eff6ff, #e0e7ff);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 3rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.header p {
  font-size: 1.125rem;
  color: #6b7280;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.no-posts {
  text-align: center;
  padding: 3rem;
  color: #6b7280;
  font-size: 1.125rem;
}
</style>