<template>
  <div class="error-display">
    <div class="error-content">
      <div class="error-icon">⚠️</div>
      <h2>Error Loading Posts</h2>
      <p>{{ error }}</p>
      <button @click="$emit('retry')" class="retry-btn">
        Try Again
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: {
    type: String,
    required: true
  }
})

defineEmits(['retry'])
</script>

<style scoped>
.error-display {
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

.retry-btn {
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

.retry-btn:hover {
  background: #dc2626;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(239, 68, 68, 0.3);
}
</style>