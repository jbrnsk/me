<script setup lang="ts">
  import CloudBackgroundCanvas from 'src/components/CloudBackgroundCanvas.vue';
</script>

<template>
  <div class="relative h-full">
    <CloudBackgroundCanvas />
    <div class="pointer-events-none fixed inset-0 min-h-screen overflow-hidden">
      <div class="racing-stripe racing-stripe-1"></div>
      <div class="racing-stripe racing-stripe-2"></div>
    </div>
    <RouterView />
  </div>
</template>

<style>
  @keyframes raceStripeLeftToRight {
    0% {
      transform: translateX(-120vw) translateY(-60vh) rotate(10deg);
      opacity: 0;
    }
    2% {
      opacity: 0.1;
    }
    8% {
      opacity: 0.1;
    }
    10% {
      transform: translateX(120vw) translateY(60vh) rotate(25deg);
      opacity: 0;
    }
    100% {
      transform: translateX(120vw) translateY(60vh) rotate(25deg);
      opacity: 0;
    }
  }

  /* Thicker, Longer Racing Aviation Stripes */
  .racing-stripe {
    position: absolute;
    width: 600px;
    height: 12px;
    border-radius: 6px;
    filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.15));
  }

  .racing-stripe-1 {
    top: 15%;
    left: -600px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 15%,
      rgba(255, 255, 255, 0.9) 40%,
      rgba(5, 150, 105, 0.1) 50%,
      rgba(255, 255, 255, 0.9) 60%,
      rgba(255, 255, 255, 0.2) 85%,
      transparent 100%
    );
    animation: raceStripeLeftToRight 10s ease-out infinite;
    animation-delay: 0s;
    animation-fill-mode: both;
  }

  .racing-stripe-2 {
    top: 25%;
    left: -600px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 15%,
      rgba(255, 255, 255, 0.9) 40%,
      rgba(245, 158, 11, 0.1) 50%,
      rgba(255, 255, 255, 0.9) 60%,
      rgba(255, 255, 255, 0.2) 85%,
      transparent 100%
    );
    animation: raceStripeLeftToRight 10s ease-out infinite;
    animation-delay: 0.1s;
    animation-fill-mode: both;
  }
</style>
