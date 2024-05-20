<script lang="ts" setup>
import { computed } from 'vue'

import TestDude from "@/components/icons/TestDude.vue";

const props = defineProps<{
  userTeam: 'home' | 'away',
  team: 'home' | 'away'
}>()

const styles = computed(() => {
  if(props.userTeam === props.team) {
    return 'cursor-grab bg-red-500';
  }

  return 'bg-blue-500'
})
</script>

<template>
  <div :class="styles">
    <TestDude />
  </div>
</template>