<script lang="ts" setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="fixed top-0 h-[80px] w-full bg-black">
    <RouterLink
      :to="{ name: 'Home' }"
      class="shimmer font-cyber text-cyber-teal text-2xl font-bold"
    >
      Cyberbowl 3930
    </RouterLink>
    <RouterLink :to="{ name: 'Blog' }" class="text-white">Blog</RouterLink>
  </nav>
</template>
