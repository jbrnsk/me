<script setup lang="ts">
  import WebFooter from '@/components/WebFooter.vue';
  import WebNavigation from '@/components/WebNavigation.vue';
</script>

<template>
  <div class="h-full bg-black">
    <WebNavigation />
    <div
      class="font-cyber mx-auto mt-[80px] max-w-[1280px] px-4 py-8 text-white"
    >
      <slot></slot>
    </div>
    <WebFooter />
  </div>
</template>
