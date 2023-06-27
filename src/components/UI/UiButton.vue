<script setup lang="ts">
import UiSvg from './UiSvg.vue';
import { UiButtonProps } from '../../types/propsTypes';

const props = withDefaults(defineProps<UiButtonProps>(), {
  transparent: true,
  icon: null,
});
</script>

<template>
  <button :class="{ 'ui-button_transparent': props.transparent }" class="ui-button">
    <UiSvg v-if="props.icon" :icon="props.icon" class="ui-button__svg-icon" />
    <p v-else>
      <slot />
    </p>
  </button>
</template>

<style scoped>
.ui-button {
  @apply px-4 py-3 bg-purple-200 rounded-2xl hover:bg-purple-300 transition-all active:scale-95;
}

.ui-button_transparent {
  @apply p-0 bg-transparent hover:bg-transparent;
}

.ui-button__svg-icon {
  @apply transition-all;
  filter: invert(69%) sepia(8%) saturate(0%) hue-rotate(160deg) brightness(90%) contrast(75%);
}

.ui-button_transparent_active .ui-button__svg-icon {
  filter: invert(42%) sepia(75%) saturate(4747%) hue-rotate(242deg) brightness(100%) contrast(101%);
}

.ui-button_transparent:hover .ui-button__svg-icon {
  filter: none;
}

</style>