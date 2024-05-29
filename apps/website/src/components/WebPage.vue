<script setup lang="ts">
  import WebNavigation from '@/components/WebNavigation.vue';
</script>

<template>
  <div>
    <WebNavigation />
    <div class="mt-[90px]">
      <slot></slot>
    </div>
  </div>
</template>
