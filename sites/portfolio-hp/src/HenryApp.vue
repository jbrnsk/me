<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue';
  import { RouterLink } from 'vue-router';
  import { Icon } from '@iconify/vue';

  const navOpen = ref(false);

  const navItems = computed(() => {
    return [
      { href: '#experience', value: 'Experience' },
      { href: '/photography', value: 'Photography' },
    ];
  });

  function toggleMenu() {
    navOpen.value = !navOpen.value;
  }

  // Smooth scroll for navigation
  onMounted(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  });
</script>

<template>
  <div class="relative h-full">
    <!-- Enhanced Background with Overlay -->
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
    <div class="relative z-10 min-h-screen">
      <!-- Enhanced Navigation -->
      <nav
        class="sticky top-0 z-50 border-b border-white/10 bg-white/90 backdrop-blur-xl transition-all duration-300"
      >
        <div
          class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        >
          <h1
            class="nav-logo flex items-center font-mono text-lg font-medium text-slate-800"
          >
            henry.proctor
            <div
              class="ml-2 inline-block h-2 w-2 animate-pulse rounded-full bg-blue-500"
            ></div>
          </h1>
          <!-- Desktop Nav -->
          <div class="hidden items-center gap-8 md:flex">
            <RouterLink
              v-for="navItem in navItems"
              :key="navItem.value"
              :to="navItem.href"
              class="nav-link relative text-slate-700 transition-all duration-300 hover:text-blue-600"
            >
              {{ navItem.value }}
            </RouterLink>
          </div>
          <!-- Mobile Nav -->
          <div class="flex items-center md:hidden">
            <button
              class="hamburger pointer flex h-6 w-6 items-center justify-center rounded-md hover:border-gray-400 hover:bg-gray-200"
              @click="toggleMenu"
            >
              <Icon icon="heroicons-outline:menu" width="20" />
            </button>
            <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-4"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-4"
            >
              <div
                v-if="navOpen"
                class="absolute right-0 top-[60px] z-50 flex w-full flex-col items-center gap-6 rounded-b-lg bg-slate-50 p-8 text-lg font-medium shadow-lg"
              >
                <RouterLink
                  @click="toggleMenu"
                  v-for="navItem in navItems"
                  :key="navItem.value"
                  :to="navItem.href"
                  class="w-full text-center text-slate-700 transition-colors duration-200 hover:text-blue-600"
                >
                  {{ navItem.value }}
                </RouterLink>
              </div>
            </Transition>
          </div>
        </div>
      </nav>
      <!-- Main Content with Enhanced Container -->
      <main
        class="mx-auto max-w-6xl px-4 py-6 lg:px-8 lg:py-10 xl:bg-slate-900/95 xl:backdrop-blur-sm"
      >
        <RouterView />
        <!-- Enhanced Footer -->
        <footer class="site-footer relative pt-3 lg:pt-8">
          <div class="mx-auto max-w-6xl">
            <div class="content-card p-6">
              <div class="flex items-center justify-between">
                <p class="font-mono text-xs text-slate-500">
                  © 2025 henry.proctor • built by
                  <a
                    href="#"
                    class="footer-link transition-colors hover:text-blue-600"
                  >
                    joseph.baranoski
                  </a>
                </p>
                <a
                  href="#contact"
                  class="footer-cta group flex items-center gap-2 font-medium text-blue-600 transition-all duration-300 hover:text-blue-700"
                >
                  Let's talk.
                  <span
                    class="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    ✈️
                  </span>
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

  .nav-logo {
    transition: transform 0.3s ease;
  }

  .nav-logo:hover {
    transform: scale(1.02);
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
