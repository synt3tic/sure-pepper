<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue';

const props = withDefaults(defineProps<{ icon?: string }>(), {
  icon: '',
});

const currentComponent = computed(() => {
  return defineAsyncComponent(() => import(`../../assets/icons/${props.icon}-icon.svg?component`));
});
</script>


<template>
  <component :is="currentComponent"/>
</template>