<script lang="ts" setup>
  import { computed, onMounted, ref } from 'vue';
  import { isEqual } from 'lodash-es';
  import { useRepo } from 'pinia-orm';

  import CrazyAnimation from '@/components/CrazyAnimation.vue';
  import FieldSquare from '@/components/FieldSquare.vue';
  import FootballPlayer from '@/components/FootballPlayer.vue';
  import FootballPlayerModel from '@/models/football_player';

  const rowCount = ref(11);
  const colCount = ref(20);
  const activePlayer = ref();
  const hoverPosition = ref();

  const players = computed(() => {
    return useRepo(FootballPlayerModel).withAllRecursive().get();
  });

  const rows = computed(() => {
    return Array.apply(null, Array(rowCount.value)).map((row, rowIndex) => {
      return Array.apply(null, Array(colCount.value)).map((col, colIndex) => {
        const currentPlayer = getPlayer(rowIndex, colIndex);

        return {
          id: `${rowIndex}-${colIndex}`,
          color: getSquareColor(rowIndex, colIndex) as 'light' | 'dark',
          currentPlayer,
        };
      });
    });
  });

  const fieldStyles = computed(() => {
    return `h-full w-full bg-cyan-50 ${activePlayer.value && 'cursor-grabbing'}`;
  });

  const grabbedPlayer = computed(() => {
    return useRepo(FootballPlayerModel).find(activePlayer.value);
  });

  function getPlayer(row: number, col: number) {
    return players.value.find((player) => {
      return isEqual(player.coordinates, [row, col]);
    });
  }

  function getSquareColor(rowIndex: number, colIndex: number) {
    if (rowIndex % 2 === 0) {
      return colIndex % 2 === 0 ? 'dark' : 'light';
    }

    return colIndex % 2 === 0 ? 'light' : 'dark';
  }

  function handlePlayerGrab(id: number, event: MouseEvent) {
    activePlayer.value = id;
    setHoverSpritePosition(event);
    addEventListener('mousemove', setHoverSpritePosition);
  }

  function handleDrop() {
    activePlayer.value = null;
    removeEventListener('mousemove', setHoverSpritePosition);
  }

  function setHoverSpritePosition(event: MouseEvent) {
    hoverPosition.value = {
      left: `${event.clientX - 25}px`,
      top: `${event.clientY - 25}px`,
    };
  }

  function savePlayersToStore() {
    useRepo(FootballPlayerModel).save([
      {
        coordinates: [6, 12],
        team: 'away',
        id: 23,
      },
      {
        coordinates: [4, 12],
        team: 'home',
        id: 21,
      },
      {
        coordinates: [6, 11],
        team: 'home',
        id: 265,
      },
      {
        coordinates: [6, 8],
        team: 'away',
        id: 212,
      },
    ]);
  }

  onMounted(() => {
    savePlayersToStore();
  });
</script>

<template>
  <div :class="fieldStyles" @mouseup="handleDrop">
    <FootballPlayer
      v-if="!!activePlayer"
      :id="grabbedPlayer.id"
      :style="hoverPosition"
      class="absolute opacity-50"
      :active-player-id="activePlayer"
      :team="grabbedPlayer.team"
      :type="grabbedPlayer.type"
      user-team="home"
    />
    <CrazyAnimation class="pointer-events-none absolute" />
    <div v-for="(row, rowIndex) in rows" :key="rowIndex" class="flex">
      <FieldSquare v-for="cell in row" :key="cell.id" :color="cell.color">
        <template v-if="!!cell.currentPlayer">
          <FootballPlayer
            :id="cell.currentPlayer.id"
            :active-player-id="activePlayer"
            :team="cell.currentPlayer.team"
            :type="cell.currentPlayer.type"
            user-team="home"
            @grab="
              (event) => handlePlayerGrab(cell.currentPlayer?.id ?? 0, event)
            "
          />
        </template>
      </FieldSquare>
    </div>
  </div>
</template>

<style scoped></style>
