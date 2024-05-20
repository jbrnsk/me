<script lang="ts" setup>
import { computed, ref } from 'vue';
import { isEqual } from 'lodash-es';

import CrazyAnimation from "@/components/CrazyAnimation.vue"
import FieldSquare from "@/components/FieldSquare.vue";
import FootballPlayer from '@/components/FootballPlayer.vue'

const rowCount = ref(11);
const colCount = ref(20);

const players = computed(() => {
  return {
    23: {
      coordinates: [6,12],
      team: 'away'
    },
    21: {
      coordinates: [4,12],
      team: 'home'
    },
    265: {
      coordinates: [6,11],
      team: 'home'
    },
    212: {
      coordinates: [6,8],
      team: 'away'
    }
  }
});

const rows = computed(() => {
  return Array.apply(null, Array(rowCount.value)).map((row, rowIndex) => {
    return Array.apply(null, Array(colCount.value)).map((col, colIndex) => {
      const currentPlayer = getPlayer(rowIndex, colIndex)

      return {
        id: `${rowIndex}-${colIndex}`,
        color: getSquareColor(rowIndex, colIndex),
        currentPlayer,
      }
    })
  })
})



function getPlayer(row: number, col: number) {
  return Object.values(players.value).find(player => {
    return isEqual(player.coordinates, [row, col])
  });
}

function getSquareColor(rowIndex: number, colIndex: number) {
  if (rowIndex %2===0) {
    return colIndex % 2 === 0 ? 'dark' : 'light'
  }

  return colIndex % 2 === 0 ? 'light' : 'dark'
}
</script>

<template>
  <div class="h-full w-full bg-cyan-50">
<!--    <CrazyAnimation class="absolute" />-->
    <div v-for="(row, rowIndex) in rows" :key="rowIndex" class="flex">
      <FieldSquare v-for="(cell) in row" :key="cell.id" :color="cell.color">
        <FootballPlayer v-if="!!cell.currentPlayer" :team="cell.currentPlayer.team" user-team="home"/>
      </FieldSquare>
    </div>
  </div>

</template>

<style scoped>

</style>
