<script lang="ts" setup>
  const props = defineProps<{
    href: string;
    ariaLabel: string;
  }>();
</script>

<template>
  <a
    class="text-cyber-pink mx-2 inline-flex items-center font-mono no-underline hover:underline"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="ariaLabel"
    tabindex="0"
  >
    <slot />
  </a>
</template>
