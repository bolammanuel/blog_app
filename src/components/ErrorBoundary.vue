<template>
  <div v-if="hasError" class="error-boundary">
    <div class="error-content">
      <div class="error-icon">💥</div>
      <h2>Something went wrong</h2>
      <p>{{ errorMessage }}</p>
      <button @click="reload" class="reload-btn">
        Reload Page
      </button>
    </div>
  </div>
  <slot v-else />
</template>

<script setup>
import { ref, onErrorCaptured } from 'vue'

const hasError = ref(false)
const errorMessage = ref('')

onErrorCaptured((err) => {
  hasError.value = true
  errorMessage.value = err.message || 'An unexpected error occurred'
  console.error('Error captured:', err)
  return false
})

const reload = () => {
  window.location.reload()
}
</script>

<style scoped>
.error-boundary {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #fef2f2, #fee2e2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.error-content {
  background: white;
  border-radius: 1rem;
  padding: 3rem;
  text-align: center;
  max-width: 500px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.error-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.error-content h2 {
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.error-content p {
  color: #6b7280;
  margin-bottom: 2rem;
  font-size: 1.125rem;
}

.reload-btn {
  background: #ef4444;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s;
}

.reload-btn:hover {
  background: #dc2626;
}
</style>