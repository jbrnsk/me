<script lang="ts" setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <div
    class="absolute bottom-0 w-full border-t-[1px] border-solid border-gray-200 bg-black p-8"
  >
    <RouterLink :to="{ name: 'Home' }" class="font-cyber text-lg text-white">
      CyberBowl 3930
    </RouterLink>
  </div>
</template>
