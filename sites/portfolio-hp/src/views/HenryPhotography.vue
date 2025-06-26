<script lang="ts" setup></script>

<template>
  <!-- Navigation Header -->
  <nav
    class="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm"
  >
    <div class="mx-auto max-w-4xl px-6 py-4">
      <div class="flex items-center justify-between">
        <a
          href="/"
          class="font-mono text-lg font-medium text-slate-800 transition-colors hover:text-blue-600"
        >
          ← henry.proctor
        </a>
        <div class="flex items-center gap-2 text-sm text-gray-600">
          <svg
            class="h-4 w-4 text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            ></path>
          </svg>
          aerial photography
        </div>
      </div>
    </div>
  </nav>

  <main class="mx-auto max-w-4xl px-6 py-16">
    <!-- Header Section -->
    <section class="animate-slide mb-16 text-center">
      <h1 class="mb-4 text-4xl font-light text-gray-900">Aerial Photography</h1>
      <p class="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
        A personal passion project combining my love of flight with creative
        photography. Exploring unique perspectives from above in my free time.
      </p>

      <!-- Quick Stats -->
      <div class="mt-8 flex justify-center gap-8 text-sm">
        <div class="text-center">
          <div class="font-mono text-xl font-medium text-blue-600">340+</div>
          <div class="text-gray-500">flight hours</div>
        </div>
        <div class="text-center">
          <div class="font-mono text-xl font-medium text-green-600">📷</div>
          <div class="text-gray-500">hobby pilot</div>
        </div>
        <div class="text-center">
          <div class="font-mono text-xl font-medium text-purple-600">TX</div>
          <div class="text-gray-500">based</div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="fade-in-up mb-16">
      <h2
        class="mb-8 flex items-center gap-2 font-mono text-lg font-medium text-gray-900"
      >
        what i enjoy shooting
        <div
          class="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent"
        ></div>
      </h2>

      <div class="grid gap-6 md:grid-cols-3">
        <div
          class="rounded-lg border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          <div class="mb-4 text-center">
            <div
              class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600"
            >
              🏠
            </div>
          </div>
          <h3 class="mb-2 font-medium text-gray-900">
            Properties & Architecture
          </h3>
          <p class="text-sm text-gray-600">
            Love capturing homes and buildings from angles you can't see from
            the ground. There's something fascinating about the geometry and
            scale from above.
          </p>
        </div>

        <div
          class="rounded-lg border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          <div class="mb-4 text-center">
            <div
              class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600"
            >
              🌄
            </div>
          </div>
          <h3 class="mb-2 font-medium text-gray-900">Landscapes & Nature</h3>
          <p class="text-sm text-gray-600">
            Texas has incredible landscapes that look completely different from
            above. Hill Country and coastal areas offer amazing opportunities
            for aerial shots.
          </p>
        </div>

        <div
          class="rounded-lg border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          <div class="mb-4 text-center">
            <div
              class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600"
            >
              🎯
            </div>
          </div>
          <h3 class="mb-2 font-medium text-gray-900">Creative Experiments</h3>
          <p class="text-sm text-gray-600">
            Always trying new techniques and perspectives. The intersection of
            my pilot training and creative interests makes for some interesting
            compositions.
          </p>
        </div>
      </div>
    </section>

    <!-- Portfolio Gallery -->
    <section class="fade-in-up-delayed mb-16">
      <h2
        class="mb-8 flex items-center gap-2 font-mono text-lg font-medium text-gray-900"
      >
        portfolio
        <div
          class="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent"
        ></div>
      </h2>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <!-- Placeholder images - replace with Henry's actual photos -->
        <div
          class="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:shadow-xl"
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
          class="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:shadow-xl"
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
          class="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:shadow-xl"
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
          class="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:shadow-xl"
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
          class="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:shadow-xl"
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
          class="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:shadow-xl"
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
          class="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:shadow-xl"
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
          class="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:shadow-xl"
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
    </section>

    <!-- Contact Section -->
    <section
      class="fade-in-up-delayed-2 rounded-lg border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 text-center"
    >
      <h2 class="mb-4 text-2xl font-light text-gray-900">
        Always Learning & Exploring
      </h2>
      <p class="mx-auto mb-6 max-w-2xl text-gray-600">
        Aviation and photography are two of my biggest passions. If you're
        interested in chatting about either (or want to see more shots), feel
        free to reach out.
      </p>

      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="mailto:hproc725@gmail.com"
          class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
        >
          📧 Say Hello
        </a>
        <a
          href="/"
          class="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          ← Back to Portfolio
        </a>
      </div>

      <div class="mt-6 text-sm text-gray-600">
        <p>Just a pilot who loves taking photos from unique perspectives</p>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="mt-16 border-t border-gray-200 bg-white py-8">
    <div class="mx-auto max-w-4xl px-6 text-center">
      <p class="font-mono text-xs text-gray-500">
        © 2025 henry.proctor • aerial photography • built by joseph.baranoski
      </p>
    </div>
  </footer>
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
  .animate-fade {
    animation: fadeIn 0.8s ease-out;
  }
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
