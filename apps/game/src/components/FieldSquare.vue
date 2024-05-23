<script lang="ts" setup>
  import { computed } from 'vue';

  const props = defineProps<{
    color: 'light' | 'dark';
    variant: 'standard' | 'endzone';
  }>();

  const styles = computed(() => {
    if (props.color === 'light') {
      return props.variant === 'endzone' ? 'bg-cyber-blue' : 'bg-cyber-slate';
    }

    return props.variant === 'endzone'
      ? 'bg-cyber-purple'
      : 'bg-cyber-dark-slate';
  });
</script>

<template>
  <div :class="`h-[50px] w-[50px] p-1 ${styles}`">
    <slot></slot>
  </div>
</template>
