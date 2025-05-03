<script lang="ts" setup>
  const props = defineProps<{
    component: 'li' | 'div';
  }>();
</script>

<template>
  <component
    :is="component"
    class="mb-3 rounded-lg border border-neutral-700 bg-[rgba(255,255,255,0.03)] bg-neutral-900 p-4 text-neutral-300"
  >
    <slot />
  </component>
</template>
