<script setup lang="ts">
import '@/assets/App.css'
</script>

<template>
  <header class="header">
    <nav class="header_nav">
      <RouterLink class="header_nav-link" to="/">Главная</RouterLink>
      <RouterLink class="header_nav-link" to="/about">О нас</RouterLink>
      <RouterLink class="header_nav-link" to="/ex">task</RouterLink>
    </nav>
  </header>
  <RouterView />
  <footer class="footer">
    <h4 class="footer_message">(C)Created by Vereneya_craft in 2024</h4>
  </footer>
</template>

<style scoped>

</style>
