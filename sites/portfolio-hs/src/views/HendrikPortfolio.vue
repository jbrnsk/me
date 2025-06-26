<script setup lang="ts">
  import { throttle } from 'lodash-es';
  import { onMounted } from 'vue';

  onMounted(() => {
    animateRevenue();
    animateAppsRate();
  });

  const animateNumber = (
    elementId: string,
    target: number,
    suffix: string = '',
  ) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      let displayValue = '';
      if (suffix === 'M') {
        displayValue = `$${Math.floor(current)}M`;
      } else if (suffix === '%') {
        displayValue = `${Math.floor(current)}%`;
      } else if (suffix === '+') {
        displayValue = `${Math.floor(current)}+`;
      } else {
        displayValue = `${Math.floor(current)}+`;
      }

      element.textContent = displayValue;
    }, 50);
  };

  const animateYearsExp = throttle(() => animateNumber('years-exp', 10), 2000, {
    leading: true,
    trailing: false,
  });
  const animateRevenue = throttle(
    () => animateNumber('revenue', 7, 'M'),
    2000,
    {
      leading: true,
      trailing: false,
    },
  );
  const animateCloseRate = throttle(
    () => animateNumber('close-rate', 75, '%'),
    2000,
    {
      leading: true,
      trailing: false,
    },
  );
  const animateAppsRate = throttle(
    () => animateNumber('apps-rate', 500, '+'),
    2000,
    {
      leading: true,
      trailing: false,
    },
  );
</script>

<template>
  <!-- Main Content -->
  <div class="pointer-events-none relative z-10 min-h-screen">
    <!-- Navigation -->
    <nav
      class="sticky top-0 z-50 border-b border-gray-200 bg-white/60 backdrop-blur-lg"
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
              href="#experience"
              class="nav-link text-slate-700 transition-colors hover:text-blue-600"
            >
              Experience
            </a>
            <a
              href="/photography"
              class="nav-link text-slate-700 transition-colors hover:text-blue-600"
            >
              Photography
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <!--    <div class="py-10 sm:px-2 md:px-4">-->
    <!--      <section class="relative px-6 py-10">-->
    <!--        <div class="mx-auto max-w-6xl">-->
    <!--          <div class="glass-card mx-auto max-w-4xl p-12 text-center">-->
    <!--            <h1 class="hero-title mb-4 text-5xl font-light text-slate-800">-->
    <!--              Henry Proctor IV-->
    <!--            </h1>-->
    <!--            <p-->
    <!--              class="mb-8 flex items-center justify-center gap-3 text-xl text-slate-600"-->
    <!--            >-->
    <!--              Sales Leader-->
    <!--              <span-->
    <!--                class="inline-block h-1 w-1 animate-pulse rounded-full bg-blue-500"-->
    <!--              ></span>-->
    <!--              Commercial Pilot-->
    <!--              <svg-->
    <!--                class="h-5 w-5 text-blue-500"-->
    <!--                fill="currentColor"-->
    <!--                viewBox="0 0 20 20"-->
    <!--              >-->
    <!--                <path-->
    <!--                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"-->
    <!--                ></path>-->
    <!--              </svg>-->
    <!--            </p>-->

    <!--            &lt;!&ndash; Colorful Stats Grid &ndash;&gt;-->
    <!--            <div class="mb-8 grid grid-cols-2 gap-6 md:grid-cols-4">-->
    <!--              <div-->
    <!--                class="stat-bubble-blue cursor-pointer transition-all duration-300 hover:scale-105"-->
    <!--                @mouseenter="animateYearsExp"-->
    <!--              >-->
    <!--                <div-->
    <!--                  class="font-mono text-2xl font-bold text-blue-700"-->
    <!--                  id="years-exp"-->
    <!--                >-->
    <!--                  10+-->
    <!--                </div>-->
    <!--                <div class="text-sm text-blue-600">years exp</div>-->
    <!--              </div>-->
    <!--              <div-->
    <!--                class="stat-bubble-green cursor-pointer transition-all duration-300 hover:scale-105"-->
    <!--                @mouseenter="animateRevenue"-->
    <!--              >-->
    <!--                <div-->
    <!--                  class="font-mono text-2xl font-bold text-green-700"-->
    <!--                  id="revenue"-->
    <!--                >-->
    <!--                  $7M-->
    <!--                </div>-->
    <!--                <div class="text-sm text-green-600">monthly revenue</div>-->
    <!--              </div>-->

    <!--              <div-->
    <!--                class="stat-bubble-purple cursor-pointer transition-all duration-300 hover:scale-105"-->
    <!--                @mouseenter="animateCloseRate"-->
    <!--              >-->
    <!--                <div-->
    <!--                  class="font-mono text-2xl font-bold text-purple-700"-->
    <!--                  id="close-rate"-->
    <!--                >-->
    <!--                  75%-->
    <!--                </div>-->
    <!--                <div class="text-sm text-purple-600">close rate</div>-->
    <!--              </div>-->

    <!--              <div-->
    <!--                class="stat-bubble-orange cursor-pointer transition-all duration-300 hover:scale-105"-->
    <!--                @mouseenter="animateAppsRate"-->
    <!--              >-->
    <!--                <div-->
    <!--                  class="font-mono text-2xl font-bold text-orange-700"-->
    <!--                  id="apps-rate"-->
    <!--                >-->
    <!--                  500+-->
    <!--                </div>-->
    <!--                <div class="text-sm text-orange-600">apps in 6 months</div>-->
    <!--              </div>-->
    <!--            </div>-->

    <!--            <p class="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">-->
    <!--              Strategic sales leader with 10+ years driving growth across-->
    <!--              FinTech, aviation, and wellness sectors. Military spouse bringing-->
    <!--              analytical precision and relationship-focused leadership to scale-->
    <!--              high-performing teams and execute revenue-generating strategies-->
    <!--              across diverse markets.-->
    <!--            </p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </section>-->

    <!--      &lt;!&ndash; Main Content Grid &ndash;&gt;-->
    <!--      <section id="experience" class="relative px-6 py-16">-->
    <!--        <div class="mx-auto max-w-6xl">-->
    <!--          <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">-->
    <!--            &lt;!&ndash; Main Experience Content &ndash;&gt;-->
    <!--            <div class="lg:col-span-2">-->
    <!--              <div class="content-card p-8">-->
    <!--                &lt;!&ndash; Aligned header with timeline &ndash;&gt;-->
    <!--                <div class="mb-8 flex items-start gap-6">-->
    <!--                  <div class="timeline-line"></div>-->
    <!--                  <h2-->
    <!--                    class="flex items-center gap-3 text-2xl font-light text-slate-800"-->
    <!--                  >-->
    <!--                    <span class="text-3xl">🛩️</span>-->
    <!--                    Experience Timeline-->
    <!--                  </h2>-->
    <!--                </div>-->

    <!--                <div class="relative pl-6">-->
    <!--                  &lt;!&ndash; Animated timeline line &ndash;&gt;-->
    <!--                  <div class="timeline-connector"></div>-->

    <!--                  <div class="space-y-8">-->
    <!--                    <div class="experience-item group">-->
    <!--                      <div class="timeline-dot timeline-dot-active"></div>-->
    <!--                      <div class="mb-3 flex items-start justify-between">-->
    <!--                        <div class="flex items-start gap-3">-->
    <!--                          <div-->
    <!--                            class="company-icon company-icon-blue"-->
    <!--                            title="PorchPass"-->
    <!--                          >-->
    <!--                            PP-->
    <!--                          </div>-->
    <!--                          <div>-->
    <!--                            <h3-->
    <!--                              class="font-medium text-slate-800 transition-colors group-hover:text-blue-600"-->
    <!--                            >-->
    <!--                              Senior Customer Success Manager-->
    <!--                            </h3>-->
    <!--                            <p class="font-medium text-blue-600">PorchPass</p>-->
    <!--                          </div>-->
    <!--                        </div>-->
    <!--                        <span class="font-mono text-sm text-slate-500">-->
    <!--                          2024 – 2025-->
    <!--                        </span>-->
    <!--                      </div>-->
    <!--                      <p class="mb-4 ml-12 leading-relaxed text-slate-600">-->
    <!--                        Drove loan volume from $3M to $7M monthly in 90 days.-->
    <!--                        Managing 125+ dealership accounts across Texas and-->
    <!--                        Oklahoma with full-cycle partnership ownership.-->
    <!--                      </p>-->
    <!--                      <div class="ml-12 flex gap-2 text-xs">-->
    <!--                        <span-->
    <!--                          class="achievement-tag rounded-full bg-green-100 px-3 py-1 text-green-700"-->
    <!--                        >-->
    <!--                          133% growth-->
    <!--                        </span>-->
    <!--                        <span-->
    <!--                          class="achievement-tag rounded-full bg-blue-100 px-3 py-1 text-blue-700"-->
    <!--                        >-->
    <!--                          125+ accounts-->
    <!--                        </span>-->
    <!--                      </div>-->
    <!--                    </div>-->

    <!--                    <div class="experience-item group">-->
    <!--                      <div class="timeline-dot"></div>-->
    <!--                      <div class="mb-3 flex items-start justify-between">-->
    <!--                        <div class="flex items-start gap-3">-->
    <!--                          <div-->
    <!--                            class="company-icon company-icon-purple"-->
    <!--                            title="StretchLab"-->
    <!--                          >-->
    <!--                            SL-->
    <!--                          </div>-->
    <!--                          <div>-->
    <!--                            <h3-->
    <!--                              class="font-medium text-slate-800 transition-colors group-hover:text-purple-600"-->
    <!--                            >-->
    <!--                              Sales Manager & Flexologist-->
    <!--                            </h3>-->
    <!--                            <p class="font-medium text-purple-600">-->
    <!--                              StretchLab-->
    <!--                            </p>-->
    <!--                          </div>-->
    <!--                        </div>-->
    <!--                        <span class="font-mono text-sm text-slate-500">-->
    <!--                          2023 – 2024-->
    <!--                        </span>-->
    <!--                      </div>-->
    <!--                      <p class="mb-4 ml-12 leading-relaxed text-slate-600">-->
    <!--                        Managed $1.2M annual sales across two studios. Led-->
    <!--                        7-person team and achieved 75% close rate—highest in-->
    <!--                        district.-->
    <!--                      </p>-->
    <!--                      <div class="ml-12 flex gap-2 text-xs">-->
    <!--                        <span-->
    <!--                          class="achievement-tag rounded-full bg-purple-100 px-3 py-1 text-purple-700"-->
    <!--                        >-->
    <!--                          district leader-->
    <!--                        </span>-->
    <!--                        <span-->
    <!--                          class="achievement-tag rounded-full bg-orange-100 px-3 py-1 text-orange-700"-->
    <!--                        >-->
    <!--                          $1.2M revenue-->
    <!--                        </span>-->
    <!--                      </div>-->
    <!--                    </div>-->

    <!--                    <div class="experience-item group">-->
    <!--                      <div class="timeline-dot"></div>-->
    <!--                      <div class="mb-3 flex items-start justify-between">-->
    <!--                        <div class="flex items-start gap-3">-->
    <!--                          <div-->
    <!--                            class="company-icon company-icon-indigo"-->
    <!--                            title="Otis Elevator Company"-->
    <!--                          >-->
    <!--                            OE-->
    <!--                          </div>-->
    <!--                          <div>-->
    <!--                            <h3-->
    <!--                              class="font-medium text-slate-800 transition-colors group-hover:text-indigo-600"-->
    <!--                            >-->
    <!--                              Senior Account Manager-->
    <!--                            </h3>-->
    <!--                            <p class="font-medium text-indigo-600">-->
    <!--                              Otis Elevator Company-->
    <!--                            </p>-->
    <!--                          </div>-->
    <!--                        </div>-->
    <!--                        <span class="font-mono text-sm text-slate-500">-->
    <!--                          2016 – 2020-->
    <!--                        </span>-->
    <!--                      </div>-->
    <!--                      <p class="mb-4 ml-12 leading-relaxed text-slate-600">-->
    <!--                        Top 3 performer in Midwest region. Managed 633-->
    <!--                        elevators, sold $4.3M in upgrades, maintained 95%-->
    <!--                        customer retention.-->
    <!--                      </p>-->
    <!--                      <div class="ml-12 flex gap-2 text-xs">-->
    <!--                        <span-->
    <!--                          class="achievement-tag rounded-full bg-yellow-100 px-3 py-1 text-yellow-700"-->
    <!--                        >-->
    <!--                          top 3 regional-->
    <!--                        </span>-->
    <!--                        <span-->
    <!--                          class="achievement-tag rounded-full bg-green-100 px-3 py-1 text-green-700"-->
    <!--                        >-->
    <!--                          95% retention-->
    <!--                        </span>-->
    <!--                      </div>-->
    <!--                    </div>-->
    <!--                  </div>-->
    <!--                </div>-->

    <!--                &lt;!&ndash; Download Resume Button &ndash;&gt;-->
    <!--                <div class="mt-8 text-center">-->
    <!--                  <a-->
    <!--                    href="/henry-proctor-resume.pdf"-->
    <!--                    download-->
    <!--                    class="download-btn group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"-->
    <!--                  >-->
    <!--                    <svg-->
    <!--                      class="download-icon h-5 w-5 transition-transform duration-300 group-hover:translate-y-1"-->
    <!--                      fill="currentColor"-->
    <!--                      viewBox="0 0 20 20"-->
    <!--                    >-->
    <!--                      <path-->
    <!--                        fill-rule="evenodd"-->
    <!--                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"-->
    <!--                        clip-rule="evenodd"-->
    <!--                      ></path>-->
    <!--                    </svg>-->
    <!--                    <span class="download-text">Download Resume</span>-->
    <!--                    <div class="download-pulse"></div>-->
    <!--                  </a>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->

    <!--            &lt;!&ndash; Unified Sidebar &ndash;&gt;-->
    <!--            <div class="stat-bubble-blue space-y-8 p-8">-->
    <!--              &lt;!&ndash; Profile &ndash;&gt;-->
    <!--              <div class="text-center">-->
    <!--                <div-->
    <!--                  class="relative mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full"-->
    <!--                >-->
    <!--                  <img-->
    <!--                    src="/images/henry-headshot.jpg"-->
    <!--                    alt="Henry Proctor IV"-->
    <!--                    class="h-full w-full object-cover grayscale transition-all duration-500 hover:scale-105 hover:grayscale-0"-->
    <!--                  />-->
    <!--                </div>-->
    <!--                <h3 class="mb-2 font-medium text-slate-800">-->
    <!--                  Henry Proctor IV-->
    <!--                </h3>-->
    <!--                <p class="text-sm text-slate-600">-->
    <!--                  Sales Leader & Commercial Pilot-->
    <!--                </p>-->
    <!--              </div>-->

    <!--              &lt;!&ndash; Contact &ndash;&gt;-->
    <!--              <div class="sidebar-section">-->
    <!--                <h3-->
    <!--                  class="mb-4 flex items-center gap-2 text-lg font-medium text-slate-800"-->
    <!--                >-->
    <!--                  <span class="text-xl">📞</span>-->
    <!--                  Contact-->
    <!--                </h3>-->
    <!--                <div class="space-y-3 text-sm">-->
    <!--                  <a-->
    <!--                    href="mailto:hproc725@gmail.com"-->
    <!--                    class="contact-link flex items-center gap-2 text-slate-600 transition-colors hover:text-blue-600"-->
    <!--                  >-->
    <!--                    📧 hproc725@gmail.com-->
    <!--                  </a>-->
    <!--                  <a-->
    <!--                    href="tel:216-633-8470"-->
    <!--                    class="contact-link flex items-center gap-2 text-slate-600 transition-colors hover:text-blue-600"-->
    <!--                  >-->
    <!--                    📞 (216) 633-8470-->
    <!--                  </a>-->
    <!--                  <a-->
    <!--                    href="#"-->
    <!--                    class="contact-link flex items-center gap-2 text-slate-600 transition-colors hover:text-blue-600"-->
    <!--                  >-->
    <!--                    💼 linkedin.com/in/henry-proctor-->
    <!--                  </a>-->
    <!--                  <p class="flex items-center gap-2 text-slate-600">-->
    <!--                    📍 San Antonio, Texas-->
    <!--                  </p>-->
    <!--                </div>-->
    <!--              </div>-->

    <!--              &lt;!&ndash; Flight + Media &ndash;&gt;-->
    <!--              <div class="sidebar-section">-->
    <!--                <h3-->
    <!--                  class="mb-4 flex items-center gap-2 text-lg font-medium text-slate-800"-->
    <!--                >-->
    <!--                  <span class="text-xl">✈️</span>-->
    <!--                  Flight + Media-->
    <!--                </h3>-->
    <!--                <div class="space-y-4">-->
    <!--                  &lt;!&ndash; Aviation credentials &ndash;&gt;-->
    <!--                  <div class="space-y-3 text-sm">-->
    <!--                    <div class="flex items-center justify-between">-->
    <!--                      <span class="text-slate-600">Private Pilot</span>-->
    <!--                      <span-->
    <!--                        class="rounded bg-blue-100 px-2 py-1 font-mono text-xs text-blue-700"-->
    <!--                      >-->
    <!--                        2021-->
    <!--                      </span>-->
    <!--                    </div>-->
    <!--                    <div class="flex items-center justify-between">-->
    <!--                      <span class="text-slate-600">Instrument Rating</span>-->
    <!--                      <span-->
    <!--                        class="rounded bg-blue-100 px-2 py-1 font-mono text-xs text-blue-700"-->
    <!--                      >-->
    <!--                        2022-->
    <!--                      </span>-->
    <!--                    </div>-->
    <!--                    <div class="flex items-center justify-between">-->
    <!--                      <span class="text-slate-600">Commercial SE</span>-->
    <!--                      <span-->
    <!--                        class="rounded bg-blue-100 px-2 py-1 font-mono text-xs text-blue-700"-->
    <!--                      >-->
    <!--                        2023-->
    <!--                      </span>-->
    <!--                    </div>-->
    <!--                  </div>-->
    <!--                </div>-->

    <!--                &lt;!&ndash; Philosophy &ndash;&gt;-->
    <!--                <div class="sidebar-section sidebar-card">-->
    <!--                  <h3-->
    <!--                    class="mb-4 flex items-center gap-2 text-lg font-medium text-slate-800"-->
    <!--                  >-->
    <!--                    <span class="text-xl">🎯</span>-->
    <!--                    Philosophy-->
    <!--                  </h3>-->
    <!--                  <div-->
    <!--                    class="hover-expand rounded-lg border border-green-100 bg-white/60 p-4 backdrop-blur-sm"-->
    <!--                  >-->
    <!--                    <p class="text-sm leading-relaxed text-slate-600">-->
    <!--                      Blending the grit of sport, precision of flight, and-->
    <!--                      strategy of business—with wisdom and a hunger to learn,-->
    <!--                      growth is my constant pursuit.-->
    <!--                    </p>-->
    <!--                  </div>-->
    <!--                </div>-->

    <!--                &lt;!&ndash; Education &ndash;&gt;-->
    <!--                <div class="sidebar-section sidebar-card">-->
    <!--                  <h3-->
    <!--                    class="mb-4 flex items-center gap-2 text-lg font-medium text-slate-800"-->
    <!--                  >-->
    <!--                    <span class="text-xl">🎓</span>-->
    <!--                    Education-->
    <!--                  </h3>-->
    <!--                  <div-->
    <!--                    class="hover-expand rounded-lg border border-green-100 bg-white/60 p-4 text-sm backdrop-blur-sm"-->
    <!--                  >-->
    <!--                    <p class="font-medium text-slate-800">-->
    <!--                      B.S. Exercise Science-->
    <!--                    </p>-->
    <!--                    <p class="text-slate-600">Bowling Green State University</p>-->
    <!--                    <p class="font-mono text-slate-600">2016</p>-->
    <!--                  </div>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </section>-->

    <!--      &lt;!&ndash; Drone Photography Section &ndash;&gt;-->
    <!--      <section class="relative px-6 py-16">-->
    <!--        <div class="mx-auto max-w-4xl">-->
    <!--          <div class="content-card p-8">-->
    <!--            <h2-->
    <!--              class="mb-6 flex items-center gap-3 text-2xl font-light text-slate-800"-->
    <!--            >-->
    <!--              <span class="text-3xl">📷</span>-->
    <!--              Aerial Photography-->
    <!--            </h2>-->
    <!--            <div class="grid items-center gap-6 md:grid-cols-2">-->
    <!--              <div>-->
    <!--                <p class="mb-4 text-lg leading-relaxed text-slate-600">-->
    <!--                  Combining commercial pilot precision with creative vision to-->
    <!--                  capture unique perspectives from above. Specializing in real-->
    <!--                  estate photography and event coverage across Texas.-->
    <!--                </p>-->
    <!--                <p class="mb-6 text-slate-600">-->
    <!--                  Licensed drone operator applying the same attention to detail-->
    <!--                  from aviation to aerial media production.-->
    <!--                </p>-->
    <!--                <a-->
    <!--                  href="/photography"-->
    <!--                  class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"-->
    <!--                >-->
    <!--                  📷 View Portfolio-->
    <!--                  <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">-->
    <!--                    <path-->
    <!--                      fill-rule="evenodd"-->
    <!--                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"-->
    <!--                      clip-rule="evenodd"-->
    <!--                    ></path>-->
    <!--                  </svg>-->
    <!--                </a>-->
    <!--              </div>-->
    <!--              <div class="relative">-->
    <!--                <div-->
    <!--                  class="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-purple-100"-->
    <!--                >-->
    <!--                  <img-->
    <!--                    src="/images/dji_fly_20240218_123500_93_1708290047743_photo_optimized.jpg"-->
    <!--                    alt="Aerial real estate photography"-->
    <!--                    class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"-->
    <!--                  />-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </section>-->
    <!--    </div>-->
    <!-- Enhanced Footer -->
    <!--    <footer class="relative px-6 py-8">-->
    <!--      <div class="mx-auto max-w-6xl">-->
    <!--        <div class="content-card p-6">-->
    <!--          <div class="flex items-center justify-between">-->
    <!--            <p class="font-mono text-xs text-slate-500">-->
    <!--              © 2025 henry.proctor • built by-->
    <!--              <a href="#" class="transition-colors hover:text-blue-600">-->
    <!--                joseph.baranoski-->
    <!--              </a>-->
    <!--            </p>-->
    <!--            <a-->
    <!--              href="#contact"-->
    <!--              class="footer-cta font-medium text-blue-600 transition-all duration-300 hover:text-blue-700"-->
    <!--            >-->
    <!--              Let's talk. ✈️-->
    <!--            </a>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </footer>-->
  </div>
</template>

<style>
  /* Download Button Animation */
  .download-btn {
    position: relative;
    overflow: hidden;
  }

  .download-btn:hover .download-icon {
    animation: downloadBounce 0.6s ease-in-out;
  }

  .download-pulse {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s ease;
  }

  .download-btn:hover .download-pulse {
    width: 200px;
    height: 200px;
    opacity: 0;
  }

  @keyframes downloadBounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(4px);
    }
  }

  /* Timeline Elements */
  .timeline-line {
    width: 4px;
    height: 60px;
    background: linear-gradient(180deg, #059669 0%, #10b981 50%, #059669 100%);
    border-radius: 2px;
    flex-shrink: 0;
  }

  .timeline-connector {
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      180deg,
      rgba(59, 130, 246, 0.3) 0%,
      rgba(59, 130, 246, 0.6) 50%,
      rgba(59, 130, 246, 0.3) 100%
    );
    animation: timelinePulse 3s ease-in-out infinite;
  }

  .timeline-dot {
    position: absolute;
    left: 2px;
    top: 8px;
    width: 12px;
    height: 12px;
    background: white;
    border: 2px solid #e2e8f0;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .timeline-dot-active {
    border-color: #3b82f6;
    background: #3b82f6;
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.4);
  }

  .experience-item:hover .timeline-dot {
    border-color: #3b82f6;
    transform: scale(1.2);
  }

  @keyframes timelinePulse {
    0%,
    100% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
  }

  /* Company Icons with Brand Colors */
  .company-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 12px;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  .company-icon-blue {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  }

  .company-icon-purple {
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  }

  .company-icon-indigo {
    background: linear-gradient(135deg, #6366f1, #4f46e5);
  }

  .company-icon:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  /* Sidebar Section Spacing */
  .sidebar-section {
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .sidebar-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  /* Footer CTA Animation */
  .footer-cta:hover {
    transform: translateX(3px);
  }

  /* Quote Block Serif Font */
  .quote-block p {
    font-family: Georgia, 'Times New Roman', serif;
  }

  /* Quote Block */
  .quote-block {
    position: relative;
  }

  .quote-block::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 4rem;
    color: rgba(59, 130, 246, 0.2);
    font-family: serif;
  }

  /* Sidebar Enhancements */
  .sidebar-card .hover-expand {
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .sidebar-card .hover-expand:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: rgba(59, 130, 246, 0.3);
  }

  /* Frosted Glass Effect - Reserved for Hero */
  .glass-card {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .glass-card:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  /* Solid Content Cards for Lower Sections */
  .content-card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    border: 1px solid rgba(226, 232, 240, 0.5);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
  }

  .content-card:hover {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }

  /* Subdued Colorful Stat Bubbles */
  .stat-bubble-blue {
    background: rgba(239, 246, 255, 0.6);
    backdrop-filter: blur(15px);
    border-radius: 16px;
    border: 1px solid rgba(59, 130, 246, 0.3);
    padding: 1.5rem 1rem;
    text-align: center;
    box-shadow: 0 4px 16px rgba(59, 130, 246, 0.1);
  }

  .stat-bubble-green {
    background: rgba(240, 253, 244, 0.6);
    backdrop-filter: blur(15px);
    border-radius: 16px;
    border: 1px solid rgba(16, 185, 129, 0.3);
    padding: 1.5rem 1rem;
    text-align: center;
    box-shadow: 0 4px 16px rgba(16, 185, 129, 0.1);
  }

  .stat-bubble-purple {
    background: rgba(250, 245, 255, 0.6);
    backdrop-filter: blur(15px);
    border-radius: 16px;
    border: 1px solid rgba(139, 92, 246, 0.3);
    padding: 1.5rem 1rem;
    text-align: center;
    box-shadow: 0 4px 16px rgba(139, 92, 246, 0.1);
  }

  .stat-bubble-orange {
    background: rgba(255, 247, 237, 0.6);
    backdrop-filter: blur(15px);
    border-radius: 16px;
    border: 1px solid rgba(249, 115, 22, 0.3);
    padding: 1.5rem 1rem;
    text-align: center;
    box-shadow: 0 4px 16px rgba(249, 115, 22, 0.1);
  }

  .stat-bubble-blue:hover,
  .stat-bubble-green:hover,
  .stat-bubble-purple:hover,
  .stat-bubble-orange:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  /* Experience Items */
  .experience-item {
    position: relative;
    padding: 1.5rem 0;
    transition: all 0.2s ease;
  }

  .experience-item:hover {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 1.5rem;
    margin: 0 -1.5rem;
  }

  /* Achievement Tags */
  .achievement-tag {
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
  }

  .achievement-tag:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  /* Contact Links */
  .contact-link {
    padding: 0.5rem 0;
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .contact-link:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(4px);
  }

  /* Hero Title */
  .hero-title {
    background: linear-gradient(135deg, #1e293b 0%, #3b82f6 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Navigation */
  .nav-link {
    position: relative;
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

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .glass-card {
    animation: fadeIn 0.6s ease-out forwards;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
    }

    .glass-card {
      padding: 1.5rem;
    }

    .timeline-connector {
      left: 6px;
    }

    .timeline-dot {
      left: 0;
    }

    .company-icon {
      width: 32px;
      height: 32px;
      font-size: 10px;
    }

    .experience-item .ml-12 {
      margin-left: 2.5rem;
    }
  }
</style>
