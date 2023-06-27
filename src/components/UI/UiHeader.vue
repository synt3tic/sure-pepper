<script setup lang="ts">
import NavBar from '../NavBar.vue';
</script>

<template>
  <header class="ui-header">
    <NavBar />
  </header>
</template>

<style scoped>
.ui-header {
  @apply flex justify-center w-full bg-violet-400 h-16;
}
</style>