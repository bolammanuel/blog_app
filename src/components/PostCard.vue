<template>
  <div class="post-card">
    <h3>{{ post.title || 'Untitled Post' }}</h3>
    <p class="excerpt">{{ excerpt }}</p>
    <div class="card-footer">
      <span class="post-id">Post ID</span>
      <router-link :to="`/post/${post.id}`" class="read-more">
        Read More
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const excerpt = computed(() => {
  const text = props.post?.excerpt || props.post?.content || props.post?.body || ''
  if (!text) return 'No content available'
  return text.length > 150 ? text.substring(0, 150) + '...' : text
})
</script>

<style scoped>
.post-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  transition: all 0.3s;
}

.post-card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}

.post-card h3 {
  font-size: 1.25rem;
  color: #1f2937;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.excerpt {
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-id {
  font-size: 0.875rem;
  color: #9ca3af;
}

.read-more {
  background: #6366f1;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.3s;
}

.read-more:hover {
  background: #4f46e5;
}
</style>