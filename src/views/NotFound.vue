<template>
  <div class="not-found">
    <div class="content">
      <div class="error-code">404</div>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <router-link to="/" class="home-btn">
        🏠 Go Home
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #fdf4ff, #fae8ff);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.content {
  background: white;
  border-radius: 1rem;
  padding: 3rem;
  text-align: center;
  max-width: 500px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.error-code {
  font-size: 8rem;
  font-weight: bold;
  color: #a855f7;
  margin-bottom: 1rem;
}

.content h2 {
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.content p {
  color: #6b7280;
  margin-bottom: 2rem;
  font-size: 1.125rem;
}

.home-btn {
  background: #a855f7;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  display: inline-block;
  font-weight: 600;
  transition: all 0.3s;
}

.home-btn:hover {
  background: #9333ea;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(168, 85, 247, 0.3);
}
</style>