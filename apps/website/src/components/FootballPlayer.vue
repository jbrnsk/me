<script lang="ts" setup>
  import { computed, ref } from 'vue';

  import TestDude from '@/components/icons/TestDude.vue';

  const props = defineProps<{
    activePlayerId?: number;
    id: number;
    userTeam: 'home' | 'away';
    team: 'home' | 'away';
  }>();
  const emit = defineEmits<{
    (e: 'grab', event: MouseEvent): void;
  }>();

  const isUserPlayer = computed(() => {
    return props.userTeam === props.team;
  });

  const styles = computed(() => {
    if (isUserPlayer.value) {
      const grabbedStyles = props.activePlayerId
        ? 'cursor-grabbing'
        : 'cursor-grab';

      return grabbedStyles + ' bg-red-500';
    }

    return 'bg-blue-500';
  });

  function handleGrab(event: MouseEvent) {
    if (isUserPlayer.value) {
      emit('grab', event);
    }
  }
</script>

<template>
  <div :class="styles">
    <TestDude @mousedown.left="handleGrab" />
  </div>
</template>
