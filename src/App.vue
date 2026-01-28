<template>
  <div id="app">
    <ErrorBoundary>
      <Suspense>
        <template #default>
          <RouterView />
        </template>
        <template #fallback>
          <LoadingSpinner />
        </template>
      </Suspense>
    </ErrorBoundary>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import ErrorBoundary from './components/ErrorBoundary.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}
</style>