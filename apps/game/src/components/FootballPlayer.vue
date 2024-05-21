<script lang="ts" setup>
  import { computed, markRaw } from 'vue';

  import PlayerBlitzer from '@/components/icons/PlayerBlitzer.vue';
  import PlayerLineman from '@/components/icons/PlayerLineman.vue';
  import PlayerThrower from '@/components/icons/PlayerThrower.vue';
  import type { TPlayerPosition } from '@/models/football_player';

  const props = defineProps<{
    activePlayerId?: number;
    id: number;
    userTeam: 'home' | 'away';
    team: 'home' | 'away';
    type: TPlayerPosition;
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

  const playerComponent = computed(() => {
    switch (props.type) {
      case 'blitzer':
        return markRaw(PlayerBlitzer);
      case 'thrower':
        return markRaw(PlayerThrower);
      case 'lineman':
      default:
        return markRaw(PlayerLineman);
    }
  });

  function handleGrab(event: MouseEvent) {
    if (isUserPlayer.value) {
      emit('grab', event);
    }
  }
</script>

<template>
  <div :class="styles">
    <component :is="playerComponent" @mousedown.left="handleGrab" />
  </div>
</template>
