<script lang="ts" setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="absolute h-[80px] w-full bg-black">
    <RouterLink
      :to="{ path: '/' }"
      class="shimmer font-cyber text-cyber-teal text-2xl font-bold"
    >
      Cyberbowl 3930
    </RouterLink>
  </nav>
</template>
