<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import {
    initializeAudio,
    isMuted,
    setMuted,
    setVolume,
    toggleMute,
    volume,
  } from 'src/stores/audio';

  const router = useRouter();
  const hideVolume = ref(false);
  const isMobile = ref(false);

  onMounted(() => {
    isMobile.value = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const el = document.getElementById('main-audio') as HTMLAudioElement;
    if (el) {
      initializeAudio(el);
    }

    if (localStorage.getItem('skipIntro') === 'true') {
      router.push('/portfolio');
      hideVolume.value = true;
    }
  });

  watch(volume, (newVal, oldVal) => {
    if (newVal !== oldVal) {
      setVolume(newVal);
    }
  });

  watch(isMuted, (newVal, oldVal) => {
    if (newVal === oldVal) {
      return;
    }
    if (newVal) {
      setMuted();
    } else {
      setVolume(volume.value);
    }
  });
</script>

<template>
  <div class="relative h-full sm:px-2 md:px-4">
    <audio id="main-audio" loop preload="metadata">
      <source src="/music/Cyberbowl3930_TitleTrack.mp3" type="audio/mp3" />
    </audio>
    <div
      v-if="!hideVolume && !isMobile"
      class="font-cyber fixed bottom-5 left-5 z-50 flex flex-col items-center text-white"
    >
      <div class="mb-2 flex items-center gap-2">
        <label for="volume">Volume</label>
        <button class="-mt-1" tabindex="0" @click="toggleMute">
          {{ isMuted ? '🔇' : '🔊' }}
        </button>
      </div>
      <input
        v-model="volume"
        class="w-32 accent-white"
        name="volume"
        type="range"
        min="0"
        max="1"
        step="0.01"
        tabindex="0"
      />
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
  input[type='range'] {
    @apply h-1 w-32 cursor-pointer appearance-none rounded-lg bg-gray-700;
    /* Removes default styles */
    -webkit-appearance: none;
    appearance: none;
  }

  input[type='range']::-webkit-slider-thumb {
    @apply h-4 w-4 cursor-pointer rounded-full border border-black bg-gray-300;
    -webkit-appearance: none;
  }

  input[type='range']::-moz-range-thumb {
    @apply h-4 w-4 cursor-pointer rounded-full border border-black bg-gray-700;
  }
</style>
