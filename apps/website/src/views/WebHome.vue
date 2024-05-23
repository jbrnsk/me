<script lang="ts" setup>
  import { onMounted, ref } from 'vue';

  import { CrazyAnimation } from '@canvas-lib';

  const showTitle = ref(false);
  const showScreen = ref(false);
  const audioPlayer = ref();

  onMounted(() => {
    setTimeout(() => {
      showScreen.value = true;

      setTimeout(() => {
        showTitle.value = true;
      }, 1000);
    }, 3000);
  });
</script>

<template>
  <div class="h-full" @mousedown="audioPlayer.play()">
    <audio id="music-player" ref="audioPlayer">
      <source src="/music/Cyberbowl3930_TitleTrack.mp3" type="audio/mp3" />
      Your browser does not support html 5 audio
    </audio>
    <div v-if="showScreen" class="flex h-full items-center justify-center">
      <Transition>
        <span
          v-if="showTitle"
          class="shimmer font-cyber text-cyber-pink text-shadow absolute z-10 text-5xl"
        >
          Cyberbowl 3930
        </span>
      </Transition>
      <CrazyAnimation class="pointer-events-none absolute" />
    </div>
  </div>
</template>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 2s ease-in;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .shimmer {
    padding-right: 140px;
    margin-right: -140px;
    text-shadow:
      1px 1px 0 theme('colors.cyber.green'),
      4px 4px 0 white,
      4px 4px 0.1em theme('colors.cyber.pink');
  }

  .shimmer {
    color: rgba(255, 255, 255, 0.1);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#222),
      to(#222),
      color-stop(0.5, #fff)
    );
    background: -moz-gradient(
      linear,
      left top,
      right top,
      from(#222),
      to(#222),
      color-stop(0.5, #fff)
    );
    background: gradient(
      linear,
      left top,
      right top,
      from(#222),
      to(#222),
      color-stop(0.5, #fff)
    );
    -webkit-background-size: 125px 100%;
    -moz-background-size: 125px 100%;
    background-size: 125px 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-animation-name: shimmer;
    -moz-animation-name: shimmer;
    animation-name: shimmer;
    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-color: #222;
  }

  @-moz-keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }

  @-webkit-keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }

  @-o-keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }
</style>
