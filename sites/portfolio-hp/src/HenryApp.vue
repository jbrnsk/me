<script setup lang="ts"></script>

<template>
  <div class="relative h-full">
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

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #10b981, #f59e0b);
    transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .site-footer {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .footer-link {
    position: relative;
  }

  .footer-link::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 1px;
    background: currentColor;
    transition: width 0.3s ease;
  }

  .footer-link:hover::after {
    width: 100%;
  }
</style>
