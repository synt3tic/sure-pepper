<script setup lang="ts">
import NavItem from './NavItem.vue';
import { routeNames } from '../utils/routes';
</script>

<template>
  <nav class="nav-bar">
    <NavItem v-for="route in routeNames" :key="route.id" :route="route" />
  </nav>
</template>

<style scoped>
.nav-bar {
  @apply flex;
}
</style>