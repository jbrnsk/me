<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { RouterLink } from 'vue-router';
  import { Icon } from '@iconify/vue';

  const navOpen = ref(false);
  interface INavItem {
    to: string;
    value: string;
    isAnchor: boolean;
  }
  const props = defineProps<{
    navItems?: INavItem[];
    hasBackButton?: boolean;
    backLink?: string;
  }>();

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
  <div class="relative z-10 min-h-screen">
    <!-- Enhanced Navigation -->
    <nav
      class="fixed top-0 z-50 w-full border-b border-white/10 bg-white/90 backdrop-blur-xl transition-all duration-300"
    >
      <div
        class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <component
          class="flex items-center gap-1"
          :to="backLink"
          :is="hasBackButton ? RouterLink : 'div'"
          :tabindex="hasBackButton ? 0 : null"
        >
          <Icon v-if="hasBackButton" icon="tabler:arrow-left" class="h-5 w-5" />
          <h1
            class="flex items-center font-mono text-lg font-medium text-slate-800"
          >
            henry.proctor
            <div
              class="ml-2 inline-block h-2 w-2 animate-pulse rounded-full bg-blue-500"
            ></div>
          </h1>
        </component>
        <!-- Desktop Nav -->
        <div class="hidden items-center gap-8 md:flex">
          <template v-for="navItem in navItems" :key="navItem.value">
            <a
              v-if="navItem.isAnchor"
              :href="navItem.to"
              tabindex="0"
              class="nav-link relative text-slate-700 transition-all duration-300 hover:text-blue-600"
            >
              {{ navItem.value }}
            </a>
            <RouterLink
              v-else
              :to="navItem.to"
              tabindex="0"
              class="nav-link relative text-slate-700 transition-all duration-300 hover:text-blue-600"
            >
              {{ navItem.value }}
            </RouterLink>
          </template>
        </div>
        <!-- Mobile Nav -->
        <div class="flex items-center md:hidden">
          <button
            v-if="navItems?.length"
            class="hamburger pointer flex h-6 w-6 items-center justify-center rounded-md hover:border-gray-400 hover:bg-gray-200"
            tabindex="0"
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
              <template v-for="navItem in navItems" :key="navItem.value">
                <a
                  v-if="navItem.isAnchor"
                  :href="navItem.to"
                  tabindex="0"
                  class="relative w-full text-center text-slate-700 transition-all duration-300 hover:text-blue-600"
                  @click="toggleMenu"
                >
                  {{ navItem.value }}
                </a>
                <RouterLink
                  v-else
                  :to="navItem.to"
                  class="w-full text-center text-slate-700 transition-colors duration-200 hover:text-blue-600"
                  tabindex="0"
                  @click="toggleMenu"
                >
                  {{ navItem.value }}
                </RouterLink>
              </template>
            </div>
          </Transition>
        </div>
      </div>
    </nav>
    <!-- Main Content with Enhanced Container -->
    <main
      class="mx-auto max-w-6xl px-4 pb-6 pt-20 lg:px-8 lg:pb-10 lg:pt-24 xl:bg-slate-900/95 xl:backdrop-blur-sm"
    >
      <slot></slot>
      <!-- Enhanced Footer -->
      <footer class="site-footer relative pt-4 lg:pt-8">
        <div class="mx-auto max-w-6xl">
          <div class="content-card p-6">
            <div class="flex items-center justify-between">
              <p
                class="flex flex-col gap-1 font-mono text-xs text-slate-500 sm:flex-row sm:gap-2"
              >
                <span>© 2025 henry.proctor</span>
                <span class="hidden sm:inline">•</span>
                <span>
                  built by
                  <a
                    tabindex="0"
                    href="https://github.com/jbrnsk/me/blob/main/sites/portfolio-hp/README.md"
                    target="_blank"
                    class="footer-link text-blue-600 transition-colors"
                  >
                    joseph.baranoski
                  </a>
                </span>
              </p>
              <a
                tabindex="0"
                href="mailto:hproc725@gmail.com"
                class="footer-cta font-base group ml-auto flex items-center gap-2 text-blue-600 transition-all duration-300 hover:text-blue-700 sm:ml-0"
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
</template>

<style>
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
