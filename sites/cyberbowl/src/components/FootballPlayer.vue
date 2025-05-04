<script lang="ts" setup>
  import { computed, markRaw } from 'vue';
  import PlayerBlitzer from 'src/components/icons/PlayerBlitzer.vue';
  import PlayerLineman from 'src/components/icons/PlayerLineman.vue';
  import PlayerThrower from 'src/components/icons/PlayerThrower.vue';
  import type { TPlayerPosition } from 'src/models/football_player';

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

  const _playerComponent = computed(() => {
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
    <div :class="`sprite h-[48px] w-[48px]`" @mousedown.left="handleGrab" />
  </div>
</template>

<style scoped>
  .sprite {
    background-color: transparent;
    background-image: url('/images/RobotSprite.png');
    background-repeat: no-repeat;
    background-size: 250%;
  }

  .bg-blue-500 .sprite {
    transform: scale(-1, 1);
    @apply -mx-[6px];
  }
</style>
