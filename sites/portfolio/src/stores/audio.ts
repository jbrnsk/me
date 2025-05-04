import { ref } from 'vue';

export const volume = ref(0.3);
export const isMuted = ref(false);
let audio: HTMLAudioElement | null = null;

export function initializeAudio(el: HTMLAudioElement) {
  audio = el;
  audio.volume = volume.value;
}

export function playAudio() {
  if (audio && audio.paused) {
    audio.play().catch(() => {});
  }
}

export function pauseAudio() {
  if (audio && !audio.paused) {
    audio.pause();
  }
}

export function toggleMute() {
  isMuted.value = !isMuted.value;
}

export function setVolume(val: number) {
  volume.value = val;
  if (audio && !isMuted.value) {
    audio.volume = val;
  }
}

export function setMuted() {
  if (audio) {
    audio.volume = 0;
  }
}
