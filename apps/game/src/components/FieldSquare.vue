<script lang="ts" setup>
  import { computed } from 'vue';

  const props = defineProps<{
    color: 'light' | 'dark';
    variant: 'standard' | 'endzone';
  }>();

  const styles = computed(() => {
    if (props.color === 'light') {
      return props.variant === 'endzone' ? 'bg-red-300' : 'bg-green-400';
    }

    return props.variant === 'endzone' ? 'bg-gray-900' : 'bg-teal-950';
  });
</script>

<template>
  <div :class="`h-[50px] w-[50px] p-1 ${styles}`">
    <slot></slot>
  </div>
</template>
