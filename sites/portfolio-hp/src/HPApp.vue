<script setup lang="ts">
  import { computed } from 'vue';
  const navItems = computed(() => {
    return [
      { href: '#experience', value: 'Experience' },
      { href: '/photography', value: 'Photography' },
    ];
  });
</script>

<template>
  <div class="relative h-full">
    <img
      src="/images/dji_fly_20240218_123500_93_1708290047743_photo_optimized.jpg"
      alt="Aerial real estate photography"
      class="fixed h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div class="relative z-10 min-h-screen">
      <!-- Navigation -->
      <nav
        class="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-lg"
      >
        <div class="mx-auto max-w-6xl px-6 py-4">
          <div class="flex items-center justify-between">
            <h1
              class="flex items-center font-mono text-lg font-medium text-slate-800"
            >
              henry.proctor
              <div
                class="ml-2 inline-block h-2 w-2 animate-pulse rounded-full bg-blue-500"
              ></div>
            </h1>
            <div class="flex space-x-6 text-sm">
              <a
                v-for="navItem in navItems"
                :key="navItem.value"
                :href="navItem.href"
                class="nav-link text-slate-700 transition-colors hover:text-blue-600"
              >
                {{ navItem.value }}
              </a>
            </div>
          </div>
        </div>
      </nav>
      <!-- Main Content Section -->
      <main class="mx-auto max-w-6xl py-10 sm:px-2 md:px-4 xl:bg-slate-800">
        <RouterView />
        <!-- Enhanced Footer -->
        <footer class="relative px-6 pt-8">
          <div class="mx-auto max-w-6xl">
            <div class="content-card p-6">
              <div class="flex items-center justify-between">
                <p class="font-mono text-xs text-slate-500">
                  © 2025 henry.proctor • built by
                  <a href="#" class="transition-colors hover:text-blue-600">
                    joseph.baranoski
                  </a>
                </p>
                <a
                  href="#contact"
                  class="footer-cta font-medium text-blue-600 transition-all duration-300 hover:text-blue-700"
                >
                  Let's talk. ✈️
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  </div>
</template>

<style>
  /* Solid Content Cards for Lower Sections */
  .content-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    border: 1px solid rgba(226, 232, 240, 0.5);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
  }

  .content-card:hover {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
</style>
