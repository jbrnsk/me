<script lang="ts" setup>
  import { ref, watch } from 'vue';

  const props = defineProps<{
    isRolling: boolean;
    result: 1 | 2 | 3 | 4 | 5 | 6;
  }>();
  const localResult = ref(props.result);
  const rollInterval = ref();

  watch(
    () => props.isRolling,
    () => {
      if (props.isRolling) {
        rollInterval.value = setInterval(() => {
          localResult.value = Math.floor(Math.random() * 6) + 1;
        }, 50);
      } else {
        clearInterval(rollInterval.value);
        localResult.value = props.result;
      }
    },
  );
</script>

<template>
  <div :class="`dice dice-${localResult} h-[62px] w-[62px]`" />
</template>

<style scoped>
  .dice {
    background-color: transparent;
    background-image: url('/images/DiceSheet.png');
    background-repeat: no-repeat;
  }

  .dice-2 {
    background-position: -63px 0;
  }
  .dice-3 {
    background-position: -126px 0;
  }
  .dice-4 {
    background-position: -189px 0;
  }
  .dice-5 {
    background-position: -252px 0;
  }
  .dice-6 {
    background-position: -315px 0;
  }
</style>
