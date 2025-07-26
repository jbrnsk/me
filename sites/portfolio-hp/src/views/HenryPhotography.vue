<script lang="ts" setup>
  import { HenryPage } from 'src/components';
  import { Icon } from '@iconify/vue';
</script>

<template>
  <HenryPage has-back-button back-link="/">
    <!-- Header Section -->
    <section class="animate-slide py-4 lg:py-8">
      <div class="glass-card mx-auto p-6 text-center md:p-12">
        <h1 class="hero-title">Aerial Photography</h1>
        <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
          A personal passion project combining my love of flight with creative
          photography. Exploring unique perspectives from above in my free time.
        </p>
        <!-- Quick Stats -->
        <div class="mt-8 flex items-center justify-center gap-8 text-sm">
          <div class="flex flex-col items-center text-center">
            <div class="font-mono text-2xl font-semibold text-blue-600">
              340+
            </div>
            <div class="text-gray-600">flight hours</div>
          </div>
          <div class="flex flex-col items-center text-center">
            <div class="font-mono text-2xl font-semibold text-green-600">
              <Icon icon="lucide:camera" class="mb-1 h-8 w-8" />
            </div>
            <div class="text-gray-600">hobby pilot</div>
          </div>
          <div class="flex flex-col items-center text-center">
            <div class="font-mono text-2xl font-semibold text-purple-600">
              TX
            </div>
            <div class="text-gray-600">based</div>
          </div>
        </div>
      </div>
    </section>
    <!-- Services Section -->
    <section class="fade-in-up py-4 lg:py-8">
      <div class="grid gap-8 text-center md:grid-cols-3">
        <div
          class="g rounded-lg border border-gray-200 bg-white p-6 transition-all"
        >
          <div class="mb-4 text-center">
            <div
              class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600"
            >
              <Icon icon="mdi:home-city-outline" class="h-5 w-5" />
            </div>
          </div>
          <h3 class="mb-2 font-medium text-slate-900">
            Properties & Architecture
          </h3>
          <p class="text-sm text-slate-600">
            Homes and buildings look different from above. Aerial shots show
            scale and layout you can’t see on the ground.
          </p>
        </div>
        <div
          class="rounded-lg border border-gray-200 bg-white p-6 transition-all"
        >
          <div class="mb-4 text-center">
            <div
              class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600"
            >
              <Icon icon="mdi:landscape" class="h-5 w-5" />
            </div>
          </div>
          <h3 class="mb-2 font-medium text-slate-900">Landscapes & Nature</h3>
          <p class="text-sm text-slate-600">
            Texas terrain looks different from above. Hill Country, coastlines,
            and fields stand out in ways you can’t see below.
          </p>
        </div>
        <div
          class="rounded-lg border border-gray-200 bg-white p-6 transition-all"
        >
          <div class="mb-4 text-center">
            <div
              class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600"
            >
              <Icon icon="mdi:clipboard-text-outline" class="h-5 w-5" />
            </div>
          </div>
          <h3 class="mb-2 font-medium text-gray-900">Events & Inspections</h3>
          <p class="text-sm text-gray-600">
            From special events to site checkups, aerial views cover more
            ground. It’s the easiest way to see the full picture.
          </p>
        </div>
      </div>
    </section>
    <!-- Portfolio Gallery -->
    <section class="fade-in-up-delayed py-4 lg:py-8">
      <div class="glass-card mx-auto p-6 md:p-12">
        <h2 class="section-heading">Gallery</h2>
        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            class="group relative mx-auto aspect-[4/3] max-w-lg overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:shadow-xl"
          >
            <img
              src="/images/dji_fly_20240218_123500_93_1708290047743_photo_optimized.jpg"
              alt="Aerial real estate photography"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
            >
              <div class="absolute bottom-4 left-4 text-white">
                <p class="text-sm font-medium">Residential Property</p>
                <p class="text-xs text-white/80">Austin, TX</p>
              </div>
            </div>
          </div>
          <div
            class="group relative mx-auto aspect-[4/3] max-w-lg overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:shadow-xl"
          >
            <img
              src="/images/dji_fly_20240217_142300_63_1708218134249_pano_optimized.jpg"
              alt="Aerial landscape photography"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
            >
              <div class="absolute bottom-4 left-4 text-white">
                <p class="text-sm font-medium">Natural Landscape</p>
                <p class="text-xs text-white/80">Hill Country, TX</p>
              </div>
            </div>
          </div>
          <div
            class="group relative mx-auto aspect-[4/3] max-w-lg overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:shadow-xl"
          >
            <img
              src="/images/dji_fly_20240303_130744_130_1709477833365_photo_optimized.jpg"
              alt="Aerial event photography"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
            >
              <div class="absolute bottom-4 left-4 text-white">
                <p class="text-sm font-medium">Corporate Event</p>
                <p class="text-xs text-white/80">San Antonio, TX</p>
              </div>
            </div>
          </div>
          <div
            class="group relative mx-auto aspect-[4/3] max-w-lg overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:shadow-xl"
          >
            <img
              src="/images/dji_fly_20240329_122446_213_1711667602744_pano_optimized.jpg"
              alt="Aerial urban photography"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
            >
              <div class="absolute bottom-4 left-4 text-white">
                <p class="text-sm font-medium">Urban Development</p>
                <p class="text-xs text-white/80">Dallas, TX</p>
              </div>
            </div>
          </div>
          <div
            class="group relative mx-auto aspect-[4/3] max-w-lg overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:shadow-xl"
          >
            <img
              src="/images/dji_fly_20240329_123730_224_1711667803569_pano_optimized.jpg"
              alt="Aerial coastal photography"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
            >
              <div class="absolute bottom-4 left-4 text-white">
                <p class="text-sm font-medium">Coastal Property</p>
                <p class="text-xs text-white/80">Gulf Coast, TX</p>
              </div>
            </div>
          </div>
          <div
            class="group relative mx-auto aspect-[4/3] max-w-lg overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:shadow-xl"
          >
            <img
              src="/images/dji_fly_20240412_125256_247_1712865767972_pano_optimized.jpg"
              alt="Aerial construction photography"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
            >
              <div class="absolute bottom-4 left-4 text-white">
                <p class="text-sm font-medium">Development Progress</p>
                <p class="text-xs text-white/80">Austin, TX</p>
              </div>
            </div>
          </div>
          <div
            class="group relative mx-auto aspect-[4/3] max-w-lg overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:shadow-xl"
          >
            <img
              src="/images/dji_fly_20240417_093348_303_1713460718142_photo.jpg"
              alt="Aerial construction photography"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
            >
              <div class="absolute bottom-4 left-4 text-white">
                <p class="text-sm font-medium">Development Progress</p>
                <p class="text-xs text-white/80">Austin, TX</p>
              </div>
            </div>
          </div>
          <div
            class="group relative mx-auto aspect-[4/3] max-w-lg overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:shadow-xl"
          >
            <img
              src="/images/dji_fly_20241030_172628_519_1730331388591_photo.jpg"
              alt="Aerial construction photography"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
            >
              <div class="absolute bottom-4 left-4 text-white">
                <p class="text-sm font-medium">Development Progress</p>
                <p class="text-xs text-white/80">Austin, TX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Section -->
    <section class="fade-in-up-delayed-2 py-4 lg:py-8">
      <div class="glass-card mx-auto p-6 text-center md:p-12">
        <h2 class="mb-4 text-2xl font-light text-slate-900">
          Always Learning & Exploring
        </h2>
        <p class="mx-auto mb-6 max-w-2xl text-slate-600">
          Aviation and photography are two of my biggest passions. If you're
          interested in chatting about either (or want to see more shots), feel
          free to reach out.
        </p>
        <div class="flex flex-row flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hproc725@gmail.com"
            class="primary-button whitespace-nowrap"
          >
            <Icon icon="lucide:mail" class="h-5 w-5" />
            Say Hello
          </a>
          <RouterLink to="/" class="secondary-button whitespace-nowrap">
            ← Back to Home
          </RouterLink>
        </div>
        <div class="mt-6 text-sm text-slate-600">
          <p>Just a pilot who loves taking photos from unique perspectives</p>
        </div>
      </div>
    </section>
  </HenryPage>
</template>

<style>
  /* Load Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Animation Classes */

  .animate-slide {
    animation: slideUp 0.6s ease-out forwards;
  }
  .fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  .fade-in-up-delayed {
    animation: fadeInUp 0.8s ease-out 0.2s forwards;
    opacity: 0;
  }
  .fade-in-up-delayed-2 {
    animation: fadeInUp 0.8s ease-out 0.4s forwards;
    opacity: 0;
  }
  .fade-in-up-delayed-3 {
    animation: fadeInUp 0.8s ease-out 0.6s forwards;
    opacity: 0;
  }
</style>
