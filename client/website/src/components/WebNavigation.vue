<script lang="ts" setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <nav
    class="fixed top-0 flex h-[80px] w-full items-center border-b-[1px] border-solid border-gray-200 bg-black p-4"
  >
    <div class="mx-auto flex w-full max-w-[1280px] items-center">
      <RouterLink
        :to="{ name: 'Home' }"
        class="shimmer font-cyber text-cyber-teal text-2xl font-bold"
      >
        Cyberbowl 3930
      </RouterLink>
      <div class="ml-auto mr-8 flex items-center gap-8">
        <RouterLink :to="{ name: 'Blog' }" class="nav-item">Blog</RouterLink>
        <RouterLink :to="{ name: 'Forum' }" class="nav-item">Forum</RouterLink>
        <RouterLink :to="{ name: 'Download' }" class="nav-item">
          Download
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
  .nav-item {
    @apply font-cyber text-xl text-white;
  }
</style>
