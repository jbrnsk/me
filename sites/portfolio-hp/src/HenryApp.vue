<script setup lang="ts"></script>

<template>
  <div class="relative min-h-screen">
    <div class="fixed inset-0">
      <img
        src="/images/dji_fly_20240218_123500_93_1708290047743_photo_optimized.jpg"
        alt="Aerial real estate photography"
        class="h-full w-full object-cover transition-transform duration-700 ease-out"
        loading="eager"
      />
      <div
        class="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/20 to-slate-900/30"
      ></div>
    </div>
    <RouterView />
  </div>
</template>

<style>
  /* Reused main components */
  .section-heading {
    @apply mb-6 text-xl tracking-tight text-slate-700 sm:mb-8 sm:text-2xl lg:text-3xl;
  }

  .primary-button {
    @apply z-10 inline-flex items-center gap-2 rounded-md border border-blue-700/30 bg-blue-600 px-6 py-[10px] text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg sm:py-3 sm:text-base;
  }

  .secondary-button {
    @apply primary-button !border-gray-300 !bg-white !text-gray-700 hover:!bg-gray-50;
  }

  /* Typography */
  .hero-title {
    background: linear-gradient(135deg, #26344c 0%, #3b82f6 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    letter-spacing: -0.02em;
    @apply mb-2 text-3xl font-light text-slate-800 sm:text-4xl md:mb-5 lg:text-5xl;
  }

  /* Glass Morphism */
  .glass-card {
    background: rgba(255, 255, 255, 0.97);
    backdrop-filter: blur(24px);
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    box-shadow:
      0 8px 40px rgba(0, 0, 0, 0.12),
      0 1px 4px rgba(0, 0, 0, 0.04),
      inset 0 1px 0 rgba(255, 255, 255, 0.6);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    scrollbar-width: none;
    -ms-overflow-style: none;
    @apply overflow-x-visible;
  }

  .glass-card:hover {
    box-shadow:
      0 16px 64px rgba(0, 0, 0, 0.15),
      0 4px 16px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
  }

  .content-card {
    background: rgba(255, 255, 255, 0.97);
    backdrop-filter: blur(24px);
    border-radius: 20px;
    border: 1px solid rgba(226, 232, 240, 0.6);
    box-shadow:
      0 4px 24px rgba(0, 0, 0, 0.08),
      0 1px 4px rgba(0, 0, 0, 0.04);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .content-card:hover {
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.12),
      0 4px 16px rgba(0, 0, 0, 0.08);
  }
</style>
