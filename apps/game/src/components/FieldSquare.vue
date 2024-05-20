<script lang="ts" setup>
import {computed} from "vue";

const props = defineProps<{
  color: 'light' | 'dark'
}>()

const styles = computed(() => {
  if(props.color === 'light') {
    return 'bg-green-400'
  }

  return 'bg-teal-950'
})
</script>

<template>
  <div :class="`w-[50px] h-[50px] p-1 ${styles}`">
    <slot></slot>
  </div>
</template>