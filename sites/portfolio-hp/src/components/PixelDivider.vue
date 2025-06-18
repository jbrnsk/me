<script setup lang="ts">
  const props = defineProps({
    index: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <div class="my-12 flex w-full justify-center">
    <div class="relative h-1 w-full overflow-hidden bg-gray-700">
      <div :class="`absolute h-full w-full animate-slide-${index}`">
        <div class="bg-cyber-pink h-full w-1" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  @keyframes slide-a {
    0% {
      transform: translateX(-5%);
    }
    50% {
      transform: translateX(105%);
    }
    100% {
      transform: translateX(-5%);
    }
  }

  @keyframes slide-b {
    0% {
      transform: translateX(80%);
    }
    50% {
      transform: translateX(-20%);
    }
    100% {
      transform: translateX(80%);
    }
  }

  @keyframes slide-c {
    0% {
      transform: translateX(20%);
    }
    50% {
      transform: translateX(140%);
    }
    100% {
      transform: translateX(20%);
    }
  }

  .animate-slide-a {
    animation: slide-a 12s linear infinite;
  }

  .animate-slide-b {
    animation: slide-b 8s linear infinite;
  }

  .animate-slide-c {
    animation: slide-c 6s linear infinite;
  }
</style>
