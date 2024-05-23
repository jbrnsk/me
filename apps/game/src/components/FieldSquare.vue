<script lang="ts" setup>
  import { computed } from 'vue';

  const props = defineProps<{
    color: 'light' | 'dark';
    variant: 'standard' | 'endzone';
  }>();

  const styles = computed(() => {
    if (props.color === 'light') {
      return props.variant === 'endzone' ? 'bg-cyber-blue' : 'bg-cyber-silver';
    }

    return props.variant === 'endzone' ? 'bg-cyber-purple' : 'bg-gray-700';
  });
</script>

<template>
  <div :class="`h-[50px] w-[50px] p-1 ${styles}`">
    <slot></slot>
  </div>
</template>
