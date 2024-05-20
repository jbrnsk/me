<script lang="ts" setup>
import { computed, ref } from 'vue';
import { isEqual } from 'lodash-es';

import CrazyAnimation from "@/components/CrazyAnimation.vue"
import FieldSquare from "@/components/FieldSquare.vue";
import FootballPlayer from '@/components/FootballPlayer.vue'

const rows = ref(11);
const columns = ref(20);

const players = computed(() => {
  return {
    23: {
      coordinates: [6,12]
    },
    21: {
      coordinates: [4,12]
    },
    265: {
      coordinates: [6,11]
    },
    212: {
      coordinates: [6,8]
    }
  }
});

function hasPlayer(row: number, col: number) {
  return Object.values(players.value).some(player => {
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
    <div v-for="(row) in rows" :key="row" class="flex">
      <FieldSquare v-for="(col) in columns" :key="col" :color="getSquareColor(row, col)">
        <FootballPlayer v-if="hasPlayer(row, col)"/>
      </FieldSquare>
    </div>
  </div>

</template>

<style scoped>

</style>
