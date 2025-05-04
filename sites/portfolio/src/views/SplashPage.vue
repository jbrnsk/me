<script lang="ts" setup>
  import { nextTick, onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { GameStartCanvas } from '@me/canvas-lib';
  import { playAudio } from 'src/stores/audio';

  const showTitle = ref(false);
  const showStartScreen = ref(false);
  const showAd = ref(false);
  const skipIntro = ref(false);
  const router = useRouter();

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
  });

  function enterSite() {
    router.push('/portfolio');
  }

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
        playAudio();
      });
    });

    window.removeEventListener('keydown', handleKeydown);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.code === 'Space' || e.code === 'Enter') {
      initializeStartScreen();
    }
  }

  function updateSkipPreference() {
    localStorage.setItem('skipIntro', skipIntro.value.toString());
  }
</script>

<template>
  <div class="h-full overflow-hidden" @mousedown.left="initializeStartScreen">
    <div
      v-if="showStartScreen"
      class="flex h-full items-center justify-center px-8"
    >
      <Transition>
        <span
          v-if="showTitle"
          class="shimmer font-cyber text-cyber-pink z-10 text-center text-2xl sm:text-5xl xl:text-7xl"
        >
          Joseph Baranoski
        </span>
      </Transition>
      <Transition>
        <div v-if="showAd" class="absolute bottom-[25%] z-10 max-w-[90%]">
          <div class="cta-container">
            <button
              class="cta-button"
              tabindex="0"
              aria-label="Enter Joe Baranoski's portfolio site"
              @click="enterSite"
            >
              <div class="mr-2">🎮</div>
              New Game
            </button>
          </div>
        </div>
      </Transition>
      <GameStartCanvas
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
        <div class="font-cyber mt-32 flex flex-col items-center text-white">
          <span class="px-3 text-sm">⚠️ Sound & Animation Ahead</span>
          <label
            class="mt-4 flex items-center gap-2 text-xs"
            @click.stop
            @mousedown.left.stop
          >
            <input
              v-model="skipIntro"
              type="checkbox"
              @change="updateSkipPreference"
            />
            Skip intro next time
          </label>
        </div>
        <span
          class="font-cyber absolute bottom-2 right-2 z-10 mb-5 text-base uppercase text-white sm:right-8 md:mb-2 md:text-2xl xl:text-3xl"
        >
          Credits 0
        </span>
      </div>
    </div>
  </div>
</template>

<style>
  .cta-container {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }

  .cta-button {
    font-family: 'Press Start 2P', monospace;
    font-size: 1rem;
    padding: 1rem 2rem;
    border: 2px solid #00ffff;
    white-space: nowrap;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(2px);
    color: #00ffff;
    border-radius: 8px;
    text-shadow: 1px 1px 2px #000;
    animation: pulse 2s infinite;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  @keyframes pulse {
    0%,
    100% {
      box-shadow: 0 0 8px #00ffff;
    }
    50% {
      box-shadow: 0 0 16px #00ffff;
    }
  }

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
