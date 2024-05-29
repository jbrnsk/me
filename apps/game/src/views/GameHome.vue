<script lang="ts" setup>
  import { computed, onMounted, ref } from 'vue';
  import { isEqual } from 'lodash-es';
  import { useRepo } from 'pinia-orm';

  import { CrazyAnimation } from '@canvas-lib';
  import FieldSquare from '@/components/FieldSquare.vue';
  import FootballPlayer from '@/components/FootballPlayer.vue';
  import SingleDie from '@/components/SingleDie.vue';
  import { useTeams } from '@/composables/initialize';
  import FootballPlayerModel from '@/models/football_player';

  type TDiceResult = 1 | 2 | 3 | 4 | 5 | 6;
  const rowCount = ref(11);
  const colCount = ref(20);
  const activePlayerId = ref();
  const hoverPosition = ref();
  const diceRolling = ref(false);
  const dice = ref<{ id: number; result: TDiceResult; isRolling: boolean }[]>([
    { id: 1, result: 1, isRolling: false },
    { id: 2, result: 4, isRolling: false },
  ]);

  const { savePlayersToStore } = useTeams();

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
          variant:
            colIndex === 0 || colIndex === 19
              ? 'endzone'
              : ('standard' as 'endzone' | 'standard'),
          currentPlayer,
        };
      });
    });
  });

  const fieldStyles = computed(() => {
    return `h-full w-full bg-cyan-50 flex flex-col items-center ${activePlayerId.value && 'cursor-grabbing'}`;
  });

  const grabbedPlayer = computed(() => {
    return useRepo(FootballPlayerModel).find(activePlayerId.value);
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
    activePlayerId.value = id;
    setHoverSpritePosition(event);
    addEventListener('mousemove', setHoverSpritePosition);
  }

  function handleDrop(cellId: string) {
    const formattedCoordinates = cellId
      .split('-')
      .map((coordinate) => Number(coordinate));
    useRepo(FootballPlayerModel)
      .where('id', activePlayerId.value)
      .update({ coordinates: formattedCoordinates });

    activePlayerId.value = null;
    removeEventListener('mousemove', setHoverSpritePosition);
  }

  function setHoverSpritePosition(event: MouseEvent) {
    hoverPosition.value = {
      left: `${event.clientX - 25}px`,
      top: `${event.clientY - 25}px`,
    };
  }

  function generateDiceResults() {
    dice.value = dice.value.map((die) => {
      const newResult = (Math.floor(Math.random() * 6) + 1) as TDiceResult;

      return {
        ...die,
        result: newResult,
        isRolling: false,
      };
    });

    diceRolling.value = false;
  }

  function rollDice() {
    diceRolling.value = true;
    dice.value = dice.value.map((die) => ({ ...die, isRolling: true }));

    setTimeout(() => {
      generateDiceResults();
    }, 1500);
  }

  onMounted(() => {
    savePlayersToStore();
  });
</script>

<template>
  <div :class="fieldStyles">
    <div class="field-container">
      <FootballPlayer
        v-if="!!activePlayerId"
        :id="grabbedPlayer.id"
        :style="hoverPosition"
        class="pointer-events-none absolute opacity-50"
        :active-player-id="activePlayerId"
        :team="grabbedPlayer.team"
        :type="grabbedPlayer.type"
        user-team="home"
      />
      <CrazyAnimation
        class="pointer-events-none absolute -mt-[50px]"
        :canvas-width="1000"
        :canvas-height="600"
        :spark-chance="0"
      />
      <div v-for="(row, rowIndex) in rows" :key="rowIndex" class="flex">
        <FieldSquare
          v-for="cell in row"
          :key="cell.id"
          :ref="`square-${cell.id}`"
          :color="cell.color"
          :variant="cell.variant"
          @mouseup.left="handleDrop(cell.id)"
        >
          <template v-if="!!cell.currentPlayer">
            <FootballPlayer
              :id="cell.currentPlayer.id"
              :active-player-id="activePlayerId"
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
    <div class="mt-8 flex flex-col items-center">
      <div class="mb-4 flex">
        <SingleDie
          v-for="die in dice"
          :key="die.id"
          :result="die.result"
          :is-rolling="die.isRolling"
        />
      </div>
      <button
        class="bg-cyber-teal text-cyber-pink font-cyber hover:bg-cyber-teal-dark active:bg-cyber-teal-darker rounded-lg p-2 disabled:cursor-not-allowed"
        :disabled="diceRolling"
        @click="rollDice"
      >
        Roll Dice
      </button>
    </div>
  </div>
</template>

<style scoped></style>
