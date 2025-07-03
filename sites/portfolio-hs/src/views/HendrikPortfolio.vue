<template>
  <div class="relative">
    <!-- Language Toggle - Top Right -->
    <div class="fixed right-4 top-4 z-50">
      <div
        class="mr-4 flex overflow-hidden rounded-lg border border-white/10 bg-black/20 backdrop-blur-md"
      >
        <button
          @click="setLanguage('en')"
          :class="[
            'px-3 py-2 text-sm font-medium transition-all duration-300',
            currentLanguage === 'en'
              ? 'border-r border-emerald-400/50 bg-emerald-500/30 text-emerald-300'
              : 'text-white/70 hover:bg-white/10 hover:text-white',
          ]"
        >
          EN
        </button>
        <button
          @click="setLanguage('de')"
          :class="[
            'px-3 py-2 text-sm font-medium transition-all duration-300',
            currentLanguage === 'de'
              ? 'border-l border-emerald-400/50 bg-emerald-500/30 text-emerald-300'
              : 'text-white/70 hover:bg-white/10 hover:text-white',
          ]"
        >
          DE
        </button>
      </div>
    </div>

    <!-- Mobile Menu Button -->
    <button
      @click="mobileMenuOpen = !mobileMenuOpen"
      class="fixed left-4 top-4 z-50 rounded-lg border border-white/10 bg-black/20 p-3 backdrop-blur-md lg:hidden"
    >
      <svg
        class="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <!-- Mobile Menu Overlay -->
    <div
      v-if="mobileMenuOpen"
      @click="mobileMenuOpen = false"
      class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
    ></div>

    <!-- Left Sidebar -->
    <div
      :class="[
        'z-50 flex flex-col border-r border-white/10 bg-black/20 p-8 backdrop-blur-md',
        'lg:fixed lg:h-full lg:w-80',
        'fixed h-full w-80 transition-transform duration-300',
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
      ]"
    >
      <!-- Profile -->
      <div class="mb-12 text-center">
        <div
          class="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-emerald-400/30 to-teal-600/30"
        >
          <div
            class="flex h-24 w-24 items-center justify-center rounded-full bg-white/10"
          >
            <svg
              class="h-12 w-12 text-white/50"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <h1 class="mb-2 text-2xl font-bold text-white">Hendrik Strache</h1>
        <p class="text-lg text-emerald-300">{{ t('profile.title') }}</p>
        <p class="mt-1 text-sm text-white/60">Austin, TX</p>
      </div>

      <!-- Navigation -->
      <nav class="flex-1">
        <ul class="space-y-4">
          <li>
            <button
              @click="scrollToSection('overview')"
              :class="navButtonClass('overview')"
            >
              <span class="flex items-center">
                <svg
                  class="mr-3 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                {{ t('nav.overview') }}
              </span>
            </button>
          </li>
          <li>
            <button
              @click="scrollToSection('projects')"
              :class="navButtonClass('projects')"
            >
              <span class="flex items-center">
                <svg
                  class="mr-3 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                {{ t('nav.projects') }}
              </span>
            </button>
          </li>
          <li>
            <button
              @click="scrollToSection('contact')"
              :class="navButtonClass('contact')"
            >
              <span class="flex items-center">
                <svg
                  class="mr-3 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {{ t('nav.contact') }}
              </span>
            </button>
          </li>
        </ul>
      </nav>

      <!-- Download Resume -->
      <div class="mt-auto pt-8">
        <button
          @click="downloadResume"
          class="mb-6 w-full transform rounded-lg border border-emerald-400/50 bg-emerald-500/20 px-6 py-3 text-emerald-300 transition-all duration-300 hover:scale-105 hover:bg-emerald-500/30"
        >
          <span class="flex items-center justify-center">
            <svg
              class="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {{ t('sidebar.downloadResume') }}
          </span>
        </button>

        <!-- Social Links -->
        <div class="flex justify-center space-x-4">
          <a
            href="#"
            class="text-white/50 transition-colors duration-300 hover:text-emerald-300"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            class="text-white/50 transition-colors duration-300 hover:text-emerald-300"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div
      :class="[
        'transition-all duration-300',
        'lg:ml-80',
        mobileMenuOpen ? 'blur-sm' : '',
      ]"
    >
      <!-- Overview Section -->
      <section id="overview" class="flex min-h-screen items-center p-6 lg:p-12">
        <div class="mx-auto w-full max-w-4xl">
          <div
            class="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-md lg:p-12"
          >
            <h2 class="mb-8 text-4xl font-bold text-white">
              {{ t('overview.title') }}
            </h2>
            <div class="space-y-6 text-lg leading-relaxed text-white/80">
              <p>{{ t('overview.description1') }}</p>
              <p>{{ t('overview.description2') }}</p>

              <div class="mt-12 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 class="mb-4 text-xl font-semibold text-emerald-300">
                    {{ t('overview.expertise.title') }}
                  </h3>
                  <ul class="space-y-2 text-white/70">
                    <li
                      v-for="item in t('overview.expertise.items')"
                      :key="item"
                    >
                      • {{ item }}
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="mb-4 text-xl font-semibold text-emerald-300">
                    {{ t('overview.industries.title') }}
                  </h3>
                  <ul class="space-y-2 text-white/70">
                    <li
                      v-for="item in t('overview.industries.items')"
                      :key="item"
                    >
                      • {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section
        id="projects"
        class="flex min-h-screen flex-col justify-center px-6 py-8"
      >
        <div class="mx-auto w-full max-w-6xl">
          <div
            class="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-md"
          >
            <h2 class="mb-6 text-center text-3xl font-bold text-white">
              {{ t('projects.title') }}
            </h2>
            <div class="grid gap-4 lg:grid-cols-2">
              <!-- Project 1 -->
              <div
                class="group transform overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 hover:scale-[1.02] hover:bg-white/10"
              >
                <div
                  class="relative h-36 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-cyan-400/30"
                >
                  <div class="absolute inset-0 bg-black/40"></div>
                  <div
                    class="absolute left-2 top-2 rounded-lg bg-white/10 px-2 py-1 backdrop-blur-sm lg:left-4 lg:top-4 lg:px-3"
                  >
                    <span class="text-xs font-semibold text-white lg:text-sm">
                      DB InfraGO
                    </span>
                  </div>
                </div>

                <div class="p-5">
                  <h3 class="mb-2 text-lg font-bold text-white">
                    {{ t('projects.project1.title') }}
                  </h3>
                  <p class="mb-3 text-sm leading-relaxed text-white/70">
                    {{ t('projects.project1.description') }}
                  </p>

                  <div class="mb-3 space-y-1 text-sm">
                    <div class="flex items-center">
                      <span class="text-white/60">
                        {{ t('projects.industry') }}:
                      </span>
                      <span class="ml-2 text-white">
                        {{ t('projects.project1.industry') }}
                      </span>
                    </div>
                    <div class="flex items-center">
                      <span class="text-white/60">
                        {{ t('projects.budget') }}:
                      </span>
                      <span class="ml-2 text-white">€70M</span>
                    </div>
                  </div>

                  <div class="border-t border-white/10 pt-3">
                    <h4 class="mb-2 text-sm font-semibold text-emerald-300">
                      {{ t('projects.myRole') }}:
                    </h4>
                    <p class="text-sm leading-relaxed text-white/70">
                      {{ t('projects.project1.role') }}
                    </p>
                  </div>

                  <button
                    class="mt-3 w-full rounded border border-blue-400/50 bg-blue-600/20 py-2 text-sm text-blue-300 hover:bg-blue-600/30"
                  >
                    {{ t('projects.viewCaseStudy') }}
                  </button>
                </div>
              </div>

              <!-- Project 2 -->
              <div
                class="group transform overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 hover:scale-[1.02] hover:bg-white/10"
              >
                <div
                  class="relative h-36 bg-gradient-to-br from-emerald-600/30 via-green-500/30 to-teal-400/30"
                >
                  <div class="absolute inset-0 bg-black/40"></div>
                  <div
                    class="absolute left-2 top-2 rounded-lg bg-white/10 px-2 py-1 backdrop-blur-sm lg:left-4 lg:top-4 lg:px-3"
                  >
                    <span class="text-xs font-semibold text-white lg:text-sm">
                      PorchPass
                    </span>
                  </div>
                </div>

                <div class="p-5">
                  <h3 class="mb-2 text-lg font-bold text-white">
                    {{ t('projects.project2.title') }}
                  </h3>
                  <p class="mb-3 text-sm leading-relaxed text-white/70">
                    {{ t('projects.project2.description') }}
                  </p>

                  <div class="mb-3 space-y-1 text-sm">
                    <div class="flex items-center">
                      <span class="text-white/60">
                        {{ t('projects.industry') }}:
                      </span>
                      <span class="ml-2 text-white">
                        {{ t('projects.project2.industry') }}
                      </span>
                    </div>
                    <div class="flex items-center">
                      <span class="text-white/60">
                        {{ t('projects.impact') }}:
                      </span>
                      <span class="ml-2 text-white">
                        {{ t('projects.project2.impact') }}
                      </span>
                    </div>
                  </div>

                  <div class="border-t border-white/10 pt-3">
                    <h4 class="mb-2 text-sm font-semibold text-emerald-300">
                      {{ t('projects.myRole') }}:
                    </h4>
                    <p class="text-sm leading-relaxed text-white/70">
                      {{ t('projects.project2.role') }}
                    </p>
                  </div>

                  <button
                    class="mt-3 w-full rounded border border-emerald-400/50 bg-emerald-600/20 py-2 text-sm text-emerald-300 hover:bg-emerald-600/30"
                  >
                    {{ t('projects.viewCaseStudy') }}
                  </button>
                </div>
              </div>

              <!-- Project 3 -->
              <div
                class="group transform overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 hover:scale-[1.02] hover:bg-white/10"
              >
                <div
                  class="relative h-36 bg-gradient-to-br from-orange-600/30 via-red-500/30 to-pink-400/30"
                >
                  <div class="absolute inset-0 bg-black/40"></div>
                  <div
                    class="absolute left-2 top-2 rounded-lg bg-white/10 px-2 py-1 backdrop-blur-sm lg:left-4 lg:top-4 lg:px-3"
                  >
                    <span class="text-xs font-semibold text-white lg:text-sm">
                      BridgingIT
                    </span>
                  </div>
                </div>

                <div class="p-5">
                  <h3 class="mb-2 text-lg font-bold text-white">
                    {{ t('projects.project3.title') }}
                  </h3>
                  <p class="mb-3 text-sm leading-relaxed text-white/70">
                    {{ t('projects.project3.description') }}
                  </p>

                  <div class="mb-3 space-y-1 text-sm">
                    <div class="flex items-center">
                      <span class="text-white/60">
                        {{ t('projects.industry') }}:
                      </span>
                      <span class="ml-2 text-white">
                        {{ t('projects.project3.industry') }}
                      </span>
                    </div>
                    <div class="flex items-center">
                      <span class="text-white/60">
                        {{ t('projects.costReduction') }}:
                      </span>
                      <span class="ml-2 text-white">20%</span>
                    </div>
                  </div>

                  <div class="border-t border-white/10 pt-3">
                    <h4 class="mb-2 text-sm font-semibold text-emerald-300">
                      {{ t('projects.myRole') }}:
                    </h4>
                    <p class="text-sm leading-relaxed text-white/70">
                      {{ t('projects.project3.role') }}
                    </p>
                  </div>

                  <button
                    class="mt-3 w-full rounded border border-orange-400/50 bg-orange-600/20 py-2 text-sm text-orange-300 hover:bg-orange-600/30"
                  >
                    {{ t('projects.viewCaseStudy') }}
                  </button>
                </div>
              </div>

              <!-- Project 4 -->
              <div
                class="group transform overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 hover:scale-[1.02] hover:bg-white/10"
              >
                <div
                  class="relative h-36 bg-gradient-to-br from-purple-600/30 via-indigo-500/30 to-blue-400/30"
                >
                  <div class="absolute inset-0 bg-black/40"></div>
                  <div
                    class="absolute left-2 top-2 rounded-lg bg-white/10 px-2 py-1 backdrop-blur-sm lg:left-4 lg:top-4 lg:px-3"
                  >
                    <span class="text-xs font-semibold text-white lg:text-sm">
                      Magna Telemotive
                    </span>
                  </div>
                </div>

                <div class="p-5">
                  <h3 class="mb-2 text-lg font-bold text-white">
                    {{ t('projects.project4.title') }}
                  </h3>
                  <p class="mb-3 text-sm leading-relaxed text-white/70">
                    {{ t('projects.project4.description') }}
                  </p>

                  <div class="mb-3 space-y-1 text-sm">
                    <div class="flex items-center">
                      <span class="text-white/60">
                        {{ t('projects.industry') }}:
                      </span>
                      <span class="ml-2 text-white">
                        {{ t('projects.project4.industry') }}
                      </span>
                    </div>
                    <div class="flex items-center">
                      <span class="text-white/60">
                        {{ t('projects.profitIncrease') }}:
                      </span>
                      <span class="ml-2 text-white">26%</span>
                    </div>
                  </div>

                  <div class="border-t border-white/10 pt-3">
                    <h4 class="mb-2 text-sm font-semibold text-emerald-300">
                      {{ t('projects.myRole') }}:
                    </h4>
                    <p class="text-sm leading-relaxed text-white/70">
                      {{ t('projects.project4.role') }}
                    </p>
                  </div>

                  <button
                    class="mt-3 w-full rounded border border-purple-400/50 bg-purple-600/20 py-2 text-sm text-purple-300 hover:bg-purple-600/30"
                  >
                    {{ t('projects.viewCaseStudy') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="flex min-h-screen items-center p-6 lg:p-12">
        <div class="mx-auto w-full max-w-4xl">
          <div
            class="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-md lg:p-12"
          >
            <h2 class="mb-8 text-4xl font-bold text-white">
              {{ t('contact.title') }}
            </h2>
            <div class="grid gap-12 md:grid-cols-2">
              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20"
                  >
                    <svg
                      class="h-6 w-6 text-emerald-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-white/60">
                      {{ t('contact.location') }}
                    </p>
                    <p class="text-lg text-white">Austin, Texas</p>
                  </div>
                </div>
              </div>

              <div class="space-y-6">
                <p class="text-lg leading-relaxed text-white/80">
                  {{ t('contact.description1') }}
                </p>
                <p class="text-white/80">
                  {{ t('contact.description2') }}
                </p>

                <div class="pt-6">
                  <button
                    @click="downloadResume"
                    class="transform rounded-lg border border-emerald-400/50 bg-emerald-500/20 px-8 py-3 text-emerald-300 transition-colors duration-300 hover:scale-105 hover:bg-emerald-500/30"
                  >
                    {{ t('contact.downloadResume') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue';

  const activeSection = ref('overview');
  const mobileMenuOpen = ref(false);
  const scrollTimeout = ref();
  const currentLanguage = ref('en');

  // Translation object
  const translations = {
    en: {
      profile: {
        title: 'Product Manager',
      },
      nav: {
        overview: 'Overview',
        projects: 'Projects',
        contact: 'Contact',
      },
      sidebar: {
        downloadResume: 'Download Resume',
      },
      overview: {
        title: 'Professional Overview',
        description1:
          'Experienced Product Manager with 7+ years of expertise developing data-driven software products in transportation, manufacturing and technology industries.',
        description2:
          'Proven in shaping roadmaps, leading cross-functional teams, and driving innovative solutions from concept to launch.',
        expertise: {
          title: 'Core Expertise',
          items: [
            'Product Strategy & Roadmaps',
            'Data Engineering & Architecture',
            'Cross-Functional Team Leadership',
            'SaaS & Cloud-Native Solutions',
          ],
        },
        industries: {
          title: 'Industries',
          items: [
            'FinTech & Financial Services',
            'Transportation & Logistics',
            'Manufacturing & Semiconductors',
            'Enterprise Software',
          ],
        },
      },
      projects: {
        title: 'Featured Projects',
        industry: 'Industry',
        budget: 'Budget',
        impact: 'Impact',
        costReduction: 'Cost Reduction',
        profitIncrease: 'Profit Increase',
        myRole: 'My Role',
        viewCaseStudy: 'View Full Case Study',
        project1: {
          title: 'Digital Twin: Real-Time Rail Network',
          description:
            'Creation of a "Google Maps for trains"—a real-time digital twin of national rail infrastructure.',
          industry: 'Transportation',
          role: 'Senior PM leading core team, managing multi-million budget, unifying product vision.',
        },
        project2: {
          title: 'FinTech Data Platform & Analytics',
          description:
            "Built company's first comprehensive data platform enabling BI and real-time reporting.",
          industry: 'FinTech',
          impact: '95% Effort Reduction',
          role: 'Developed roadmap workstreams, aligned executive requirements with technical execution.',
        },
        project3: {
          title: 'Digital Twin Factory Platform',
          description:
            "Product strategy for semiconductor manufacturer's digital twin factory with unified visibility.",
          industry: 'Manufacturing',
          role: 'Led product strategy with redesigned data lake architecture, optimized factory processes.',
        },
        project4: {
          title: 'B2B EV Charging SaaS Platform',
          description:
            'Led development of B2B SaaS analyzing 18M+ charging transactions across 23 countries.',
          industry: 'Automotive/EV',
          role: 'Led agile team of 7, implemented data-driven processes, conducted customer analytics.',
        },
      },
      contact: {
        title: 'Get In Touch',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        description1:
          "I'm always interested in discussing new opportunities, innovative product challenges, and ways to leverage data-driven solutions.",
        description2:
          "Whether you're looking for a product leader or want to explore collaboration opportunities, let's connect.",
        downloadResume: 'Download Resume',
      },
    },
    de: {
      profile: {
        title: 'Product Manager',
      },
      nav: {
        overview: 'Überblick',
        projects: 'Projekte',
        contact: 'Kontakt',
      },
      sidebar: {
        downloadResume: 'Lebenslauf herunterladen',
      },
      overview: {
        title: 'Beruflicher Überblick',
        description1:
          'Erfahrener Product Manager mit über 7 Jahren Expertise in der Entwicklung datengetriebener Software-Produkte in Transport-, Fertigungs- und Technologiebranchen.',
        description2:
          'Bewährt in der Gestaltung von Roadmaps, Führung funktionsübergreifender Teams und der Entwicklung innovativer Lösungen von der Konzeption bis zur Markteinführung.',
        expertise: {
          title: 'Kernkompetenzen',
          items: [
            'Produktstrategie & Roadmaps',
            'Datenarchitektur & Engineering',
            'Funktionsübergreifende Teamführung',
            'SaaS & Cloud-Native Lösungen',
          ],
        },
        industries: {
          title: 'Branchen',
          items: [
            'FinTech & Finanzdienstleistungen',
            'Transport & Logistik',
            'Fertigung & Halbleiter',
            'Unternehmenssoftware',
          ],
        },
      },
      projects: {
        title: 'Ausgewählte Projekte',
        industry: 'Branche',
        budget: 'Budget',
        impact: 'Auswirkung',
        costReduction: 'Kosteneinsparung',
        profitIncrease: 'Gewinnsteigerung',
        myRole: 'Meine Rolle',
        viewCaseStudy: 'Vollständige Fallstudie ansehen',
        project1: {
          title: 'Digital Twin: Echtzeit-Bahnnetzwerk',
          description:
            'Entwicklung eines "Google Maps für Züge" - ein digitaler Echtzeit-Zwilling der nationalen Bahninfrastruktur.',
          industry: 'Transport',
          role: 'Senior PM, der das Kernteam leitet, mehrere Millionen Budget verwaltet und die Produktvision vereint.',
        },
        project2: {
          title: 'FinTech Datenplattform & Analytics',
          description:
            'Entwicklung der ersten umfassenden Datenplattform des Unternehmens für BI und Echtzeit-Reporting.',
          industry: 'FinTech',
          impact: '95% Aufwandsreduktion',
          role: 'Entwicklung von Roadmap-Workstreams, Abstimmung von Führungsanforderungen mit technischer Umsetzung.',
        },
        project3: {
          title: 'Digital Twin Fabrikplattform',
          description:
            'Produktstrategie für die Digital Twin Fabrik eines Halbleiterherstellers mit einheitlicher Sichtbarkeit.',
          industry: 'Fertigung',
          role: 'Leitete Produktstrategie mit neugestalteter Data Lake Architektur und optimierten Fabrikprozessen.',
        },
        project4: {
          title: 'B2B E-Ladestation SaaS Platform',
          description:
            'Leitete Entwicklung einer B2B SaaS zur Analyse von über 18 Mio. Ladevorgängen in 23 Ländern.',
          industry: 'Automotive/E-Mobilität',
          role: 'Leitete agiles 7er-Team, implementierte datengetriebene Prozesse, führte Kundenanalysen durch.',
        },
      },
      contact: {
        title: 'Kontakt aufnehmen',
        email: 'E-Mail',
        phone: 'Telefon',
        location: 'Standort',
        description1:
          'Ich bin immer interessiert an Diskussionen über neue Möglichkeiten, innovative Produktherausforderungen und Wege zur Nutzung datengetriebener Lösungen.',
        description2:
          'Ob Sie einen Produktleiter suchen oder Kooperationsmöglichkeiten erkunden möchten, lassen Sie uns in Kontakt treten.',
        downloadResume: 'Lebenslauf herunterladen',
      },
    },
  };

  // Translation function
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLanguage.value];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  // Language management
  const setLanguage = (lang) => {
    currentLanguage.value = lang;
    // Store in memory (replacing localStorage functionality)
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('preferred-language', lang);
      } catch (e) {
        // Fallback if localStorage is not available
        console.log('Language preference stored in memory:', lang);
      }
    }
  };

  // Load language preference
  const loadLanguagePreference = () => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('preferred-language');
        if (saved && (saved === 'en' || saved === 'de')) {
          currentLanguage.value = saved;
        }
      } catch (e) {
        // Fallback to browser language detection
        const browserLang = navigator.language?.slice(0, 2);
        if (browserLang === 'de') {
          currentLanguage.value = 'de';
        }
      }
    }
  };

  const navButtonClass = (section) => {
    const baseClass =
      'w-full text-left px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-105';
    const activeClass =
      'bg-emerald-500/30 text-white border border-emerald-400/50 shadow-lg shadow-emerald-500/20';
    const inactiveClass =
      'text-white/70 hover:text-white hover:bg-white/10 border border-transparent';

    return `${baseClass} ${activeSection.value === section ? activeClass : inactiveClass}`;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      mobileMenuOpen.value = false; // Close mobile menu when navigating
    }
  };

  const handleScroll = () => {
    if (scrollTimeout.value) return;

    scrollTimeout.value = setTimeout(() => {
      const sections = ['overview', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let current = 'overview';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            current = sectionId;
            break;
          }
        }
      }

      if (activeSection.value !== current) {
        activeSection.value = current;
      }

      scrollTimeout.value = null;
    }, 50);
  };

  const downloadResume = () => {
    console.log('Downloading resume...');
  };

  onMounted(() => {
    loadLanguagePreference();
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Force initial check
    setTimeout(() => {
      handleScroll();
    }, 100);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<style scoped>
  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(16, 185, 129, 0.3);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(16, 185, 129, 0.5);
  }
</style>
