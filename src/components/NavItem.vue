<script setup lang="ts">
import { NavItemProps } from '../types/propsTypes';

const props = defineProps<NavItemProps>();
</script>

<template>
  <RouterLink :to="{ name: props.route.routeName }" class="nav-item">
    {{ props.route.name }}
  </RouterLink>
</template>

<style scoped>
.nav-item {
  @apply flex items-center px-4 h-full text-white hover:bg-violet-500;
}

.router-link-active {
  @apply bg-violet-600 transition-all;
}
</style>