<script lang="ts" setup>
  import { nextTick, ref } from 'vue';

  import { CrazyAnimation } from '@canvas-lib';

  const showTitle = ref(false);
  const showStartScreen = ref(false);
  const showAd = ref(false);
  const audioPlayer = ref();

  function initializeStartScreen() {
    showStartScreen.value = true;

    setTimeout(() => {
      showTitle.value = true;
    }, 1000);

    setTimeout(() => {
      showAd.value = true;
    }, 5000);

    nextTick(() => {
      nextTick(() => {
        audioPlayer.value.play();
      });
    });

    window.removeEventListener('keydown', handleKeydown);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.code === 'Space' || e.code === 'Enter') {
      initializeStartScreen();
    }
  }
</script>

<template>
  <div class="h-full overflow-hidden" @mousedown.left="initializeStartScreen">
    <audio id="music-player" ref="audioPlayer" loop>
      <source src="/music/Cyberbowl3930_TitleTrack.mp3" type="audio/mp3" />
      Your browser does not support html 5 audio
    </audio>
    <div v-if="showStartScreen" class="flex h-full items-center justify-center">
      <Transition>
        <span
          v-if="showTitle"
          class="shimmer font-cyber text-cyber-pink absolute z-10 text-center text-2xl sm:text-5xl xl:text-7xl"
        >
          Cyberbowl 3930
        </span>
      </Transition>
      <Transition>
        <div
          v-if="showAd"
          class="absolute bottom-8 z-10 max-w-[90%] sm:bottom-2 sm:right-2 2xl:right-8"
        >
          <div
            class="font-cyber flex flex-col gap-2 rounded-sm bg-white py-1 text-black 2xl:bg-black 2xl:text-white"
          >
            <span class="blinking_text px-3 text-sm sm:text-lg xl:py-1">
              Coming Soon!
            </span>
            <div
              class="lg: text-xxs flex flex-col gap-2 border-t-2 border-solid border-gray-200 px-3 py-2 sm:text-xs lg:gap-4 xl:py-4"
            >
              <span class="text-cyber-pink 2xl:bg-black">
                Follow the development on Twitch:
              </span>
              <a
                href="https://www.twitch.tv/tenderrobot"
                class="2xl:bg-black"
                target="_blank"
              >
                https://www.twitch.tv/tenderrobot
              </a>
              <span class="text-cyber-teal 2xl:bg-black">
                Mon-Thur 11am-4pm Central
              </span>
            </div>
          </div>
        </div>
      </Transition>
      <CrazyAnimation
        class="pointer-events-none absolute"
        :spark-chance="0.0005"
      />
    </div>
    <div v-else class="h-full">
      <div class="flex h-full flex-col items-center justify-center">
        <span
          class="blinking_text font-cyber z-10 max-w-[80%] text-center text-2xl uppercase text-white md:text-4xl xl:text-5xl"
        >
          Press Any Button To Continue
        </span>
        <span
          class="font-cyber absolute bottom-2 right-2 z-10 text-base uppercase text-white sm:right-8 md:text-2xl xl:text-3xl"
        >
          Credits 0
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .blinking_text {
    animation: blinker 1.8s linear infinite;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 2s cubic-bezier(1, 1.5, 1, 1.5);
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
