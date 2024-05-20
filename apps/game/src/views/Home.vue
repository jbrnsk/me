<script lang="ts" setup>
import { computed, ref } from 'vue';
import { isEqual } from 'lodash-es';

// import CrazyAnimation from "@/components/CrazyAnimation.vue"
import FieldSquare from "@/components/FieldSquare.vue";
import TestDude from "@/components/icons/TestDude.vue";

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
})

function hasPlayer(row: number, col: number) {
  return Object.values(players.value).some(player => {
    console.log('what it be???', player, row, col, [row, col])

    return isEqual(player.coordinates, [row, col])
  })
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
    <div v-for="(row) in rows" :key="row" class="flex">
      <FieldSquare v-for="(col) in columns" :key="col" :color="getSquareColor(row, col)">
        <TestDude v-if="hasPlayer(row, col)"/>
      </FieldSquare>
    </div>
<!--    <CrazyAnimation />-->
  </div>
</template>

<style scoped>

</style>
