<script setup lang="ts">
  import { throttle } from 'lodash-es';
  import { computed, onMounted, ref } from 'vue';
  import { Icon } from '@iconify/vue';
  import { HenryPage } from 'src/components';
  const isVisible = ref(false);

  const navItems = computed(() => [
    { to: '#experience', value: 'Experience', isAnchor: true },
    { to: '/photography', value: 'Photography', isAnchor: false },
  ]);

  const experiences = [
    {
      id: 'porchpass',
      company: 'PorchPass',
      role: 'Senior Customer Success Manager',
      period: '2024 – 2025',
      description:
        'Drove loan volume from $3M to $7M monthly in 90 days. Managing 125+ dealership accounts across Texas and Oklahoma with full-cycle partnership ownership.',
      metrics: [
        { label: '133% Growth', type: 'primary' },
        { label: '125+ Accounts', type: 'secondary' },
      ],
    },
    {
      id: 'stretchlab',
      company: 'StretchLab',
      role: 'Sales Manager & Flexologist',
      period: '2023 – 2024',
      description:
        'Managed $1.2M annual sales across two studios. Led 7-person team and achieved 75% close rate—highest in district.',
      metrics: [
        { label: '$1.2M Revenue', type: 'primary' },
        { label: 'District Leader', type: 'secondary' },
      ],
    },
    {
      id: 'f45',
      company: 'F45 Training',
      role: 'Sales Manager & Coach',
      period: '2020 – 2023',
      description:
        'Directed sales across three gyms, adding $1.7M revenue and growing membership 45% in six months. Managed retention for 650+ active members.',
      metrics: [
        { label: '45% Growth', type: 'primary' },
        { label: '$1.7M Sales', type: 'secondary' },
      ],
    },
    {
      id: 'otis',
      company: 'Otis Elevator Company',
      role: 'Senior Account Manager',
      period: '2016 – 2020',
      description:
        'Top 3 performer in Midwest region. Managed 633 elevators, sold $4.3M in upgrades, maintained 95% customer retention.',
      metrics: [
        { label: '$4.3M Sales', type: 'primary' },
        { label: '95% Retention', type: 'secondary' },
        { label: 'Top 3 Regional', type: 'tertiary' },
      ],
    },
  ];

  onMounted(() => {
    // Trigger entrance animations
    setTimeout(() => {
      isVisible.value = true;
    }, 100);

    // Initialize stat animations
    animateYearsExp();
    animateRevenue();
    animateCloseRate();
    animateAppsRate();

    // Setup intersection observer for scroll animations
    setupScrollAnimations();
  });

  const animateNumber = (
    elementId: string,
    target: number,
    suffix: string = '',
  ) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    let current = 0;
    const increment = target / 40;
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
    }, 40);
  };

  // Optimized animation functions
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
    () => animateNumber('apps-rate', 125, '+'),
    2000,
    {
      leading: true,
      trailing: false,
    },
  );

  const setupScrollAnimations = () => {
    // Animate all panels on load
    const panels = document.querySelectorAll(
      '.content-card, .site-footer, .glass-card:not(.animate-fade-in)',
    );
    panels.forEach((panel, index) => {
      panel.classList.add('animate-fade-in');
    });
  };

  function expandHeroDescription() {
    document.getElementById('short-text').style.display = 'none';
    document.getElementById('full-text').style.display = 'inline';
  }

  function collapseHeroDescription() {
    document.getElementById('short-text').style.display = 'inline';
    document.getElementById('full-text').style.display = 'none';
  }

  function timelineDotClass(index: number) {
    const colors = [
      'border-4 border-blue-400 shadow-[0_0_0_4px_rgba(59,130,246,0.2)]',
      'border-4 border-green-400 shadow-[0_0_0_4px_rgba(16,185,129,0.2)]',
      'border-4 border-purple-400 shadow-[0_0_0_4px_rgba(168,85,247,0.2)]',
      'border-4 border-orange-400 shadow-[0_0_0_4px_rgba(249,115,22,0.2)]',
    ];
    return colors[index % colors.length];
  }

  function timelineCompHeadingClass(index: number) {
    const colors = [
      'text-blue-600',
      'text-green-600',

      'text-purple-600',
      'text-orange-600',
    ];
    return colors[index % colors.length];
  }

  function metricClass(type) {
    switch (type) {
      case 'primary':
        return 'bg-blue-50 text-blue-600 border border-blue-200';
      case 'secondary':
        return 'bg-slate-50 text-slate-600 border border-slate-200';
      case 'tertiary':
        return 'bg-purple-50 text-purple-600 border border-purple-200';
      default:
        return 'bg-gray-50 text-gray-500 border border-gray-200';
    }
  }
</script>

<template>
  <HenryPage :nav-items="navItems" key="portfolio">
    <!-- Hero Section -->
    <section class="relative py-4 lg:py-8">
      <div class="mx-auto max-w-6xl">
        <div
          class="glass-card mx-auto p-6 text-center md:p-12"
          :class="{ 'animate-fade-in': isVisible }"
        >
          <h1 class="hero-title">Henry Proctor IV</h1>
          <div class="title-rotator mb-4 md:mb-8">
            <div class="title-slide">
              Sales Leader
              <span
                class="status-dot inline-block h-1 w-1 animate-pulse rounded-full bg-blue-500"
              ></span>
              Commercial Pilot
              <svg
                class="float-animation h-4 w-4 text-blue-500 md:h-5 md:w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                ></path>
              </svg>
            </div>
            <div class="title-slide">
              Territory Manager
              <span
                class="status-dot inline-block h-1 w-1 animate-pulse rounded-full bg-blue-500"
              ></span>
              Client Relations
            </div>
            <div class="title-slide">Strategic Business Growth</div>
          </div>
          <!-- Stats Grid -->
          <div
            class="stats-grid mx-auto mb-5 grid max-w-[360px] grid-cols-2 items-center justify-center gap-3 sm:max-w-[450px] md:mb-8 md:max-w-full md:grid-cols-4 md:gap-5"
          >
            <div
              class="stat-bubble stat-bubble-blue group"
              @mouseenter="animateYearsExp"
            >
              <div class="stat-number text-blue-700" id="years-exp">10+</div>
              <div class="stat-label text-blue-600">years exp</div>
            </div>
            <div
              class="stat-bubble stat-bubble-green group"
              @mouseenter="animateRevenue"
            >
              <div class="stat-number text-green-700" id="revenue">$7M</div>
              <div class="stat-label text-green-600">monthly revenue</div>
            </div>
            <div
              class="stat-bubble stat-bubble-purple group"
              @mouseenter="animateCloseRate"
            >
              <div class="stat-number text-purple-700" id="close-rate">75%</div>
              <div class="stat-label text-purple-600">close rate</div>
            </div>
            <div
              class="stat-bubble stat-bubble-orange group"
              @mouseenter="animateAppsRate"
            >
              <div class="stat-number text-orange-700" id="apps-rate">125+</div>
              <div class="stat-label text-orange-600">accounts</div>
            </div>
          </div>
          <p
            class="mx-auto max-w-2xl px-4 text-sm font-light leading-snug text-slate-600 sm:max-w-lg md:max-w-3xl md:text-lg md:leading-relaxed"
          >
            <span id="short-text" class="inline-block md:hidden">
              Strategic sales leader with 10+ years driving growth across
              FinTech, aviation, elevator, and wellness sectors.
              <button
                @click="expandHeroDescription"
                class="text-blue-600 underline"
              >
                More
              </button>
            </span>
            <span id="full-text" class="hidden md:inline-block">
              Strategic sales leader with 10+ years driving growth across
              FinTech, aviation, elevator, and wellness sectors.
              <br class="inline-block md:hidden" />
              <br class="inline-block md:hidden" />
              Military spouse bringing analytical precision and
              relationship-focused leadership to scale high-performing teams and
              execute revenue-generating strategies across diverse markets.
              <button
                @click="collapseHeroDescription"
                class="inline-block text-blue-600 underline md:hidden"
              >
                Less
              </button>
            </span>
          </p>
        </div>
      </div>
    </section>
    <!-- Main Content Grid -->
    <section id="experience" class="relative py-4 lg:py-8">
      <div class="mx-auto max-w-6xl">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
          <!-- Experience Content -->
          <div class="grow lg:col-span-2">
            <div
              class="content-card relative flex h-full flex-col overflow-hidden p-6 md:p-12"
            >
              <h2 class="section-heading">Experience</h2>
              <div class="timeline-container mb-[68px] sm:mb-32 lg:mb-28">
                <div class="timeline-line"></div>
                <div
                  v-for="(experience, expIndex) in experiences"
                  :key="experience.id"
                  class="group relative mb-8 pl-10 last:mb-0 md:pl-12 lg:mb-12"
                >
                  <div
                    :class="timelineDotClass(expIndex)"
                    class="absolute left-[6px] top-[5px] z-10 h-[14px] w-[14px] rounded-full bg-white transition-all duration-300 ease-in-out"
                  ></div>
                  <div class="flex items-start justify-between sm:mb-2 lg:mb-2">
                    <div class="flex-1">
                      <h4
                        :class="timelineCompHeadingClass(expIndex)"
                        class="mb-1 text-sm font-light uppercase tracking-wide lg:text-base"
                      >
                        {{ experience.company }}
                      </h4>
                      <h3
                        class="text-lg leading-snug text-slate-700 lg:text-xl"
                      >
                        {{ experience.role }}
                      </h3>
                    </div>
                    <div class="time-period text-sm lg:text-base">
                      {{ experience.period }}
                    </div>
                  </div>
                  <p
                    class="mb-4 flex flex-wrap gap-3 text-sm font-light leading-relaxed text-slate-600 sm:text-base lg:mb-5"
                  >
                    {{ experience.description }}
                  </p>
                  <div class="flex flex-wrap gap-3">
                    <span
                      v-for="metric in experience.metrics"
                      :class="metricClass(metric.type)"
                      class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-transform duration-300 ease-in-out hover:-translate-y-[2px]"
                    >
                      {{ metric.label }}
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="download-container absolute bottom-0 z-10 -mx-6 flex w-full justify-center justify-self-end py-4 sm:py-8 md:-mx-12 lg:py-10"
              >
                <a
                  href="/docs/Resume-Henry Proctor IV 2025.pdf"
                  download
                  tabindex="0"
                  class="primary-button"
                >
                  <Icon icon="tabler:download" class="h-5 w-5" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          <!-- Sidebar -->
          <div
            class="content-card flex flex-col gap-4 p-6 sm:grid-cols-2 md:p-8 lg:flex lg:flex-col"
          >
            <!-- Profile Image -->
            <div
              class="relative mx-auto mb-8 h-48 max-w-48 overflow-hidden rounded-xl"
            >
              <img
                src="/images/henry-headshot.png"
                alt="Henry Proctor IV"
                style="transform: translateZ(0.1px)"
                class="h-full w-full object-fill grayscale transition-all duration-500 hover:scale-125 hover:grayscale-0"
                loading="lazy"
              />
            </div>
            <div
              class="mx-auto grid w-full max-w-[800px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4 lg:flex lg:flex-col lg:gap-8"
            >
              <!-- Contact Section -->
              <div class="sidebar-section order-1 !pb-3 lg:!pb-7">
                <h3
                  class="sidebar-title mb-3 flex items-center gap-2 text-lg font-medium text-slate-700"
                >
                  <Icon
                    icon="mdi:account-box"
                    class="-mt-[1px] text-xl text-slate-700"
                  />
                  Contact
                </h3>
                <div class="space-y-4 text-sm">
                  <a
                    href="mailto:hproc725@gmail.com"
                    class="contact-link group"
                    tabindex="0"
                  >
                    <Icon
                      icon="mdi:email-outline"
                      class="-mt-[1px] text-xl text-slate-700"
                    />
                    <span class="contact-text">hproc725@gmail.com</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/henry-proctor-iv-47431489/"
                    class="contact-link group"
                    target="_blank"
                    tabindex="0"
                  >
                    <Icon
                      icon="mdi:linkedin"
                      class="-mt-[1px] text-xl text-blue-700"
                    />
                    <span class="contact-text">
                      linkedin.com/in/henry-proctor
                    </span>
                  </a>
                  <div class="contact-item">
                    <Icon
                      icon="mdi:map-marker"
                      class="-mt-[1px] text-xl text-rose-600"
                    />
                    <span class="contact-text">San Antonio, Texas</span>
                  </div>
                </div>
              </div>
              <!-- Philosophy Section -->
              <div class="order-2 pb-2 sm:order-4 lg:order-2">
                <h3
                  class="sidebar-title mb-4 flex items-center gap-2 text-lg font-medium text-slate-800"
                >
                  <Icon
                    icon="mdi:leaf"
                    class="-mt-[1px] text-xl text-emerald-600"
                  />

                  Philosophy
                </h3>
                <div class="philosophy-card">
                  <p class="text-sm leading-relaxed text-slate-600">
                    Blending the grit of sport, precision of flight, and
                    strategy of business—with wisdom and a hunger to learn,
                    growth is my constant pursuit.
                  </p>
                </div>
              </div>
              <!-- Education Section -->
              <div class="order-3 pb-2 sm:order-4 lg:order-3">
                <h3
                  class="sidebar-title mb-4 flex items-center gap-2 text-lg font-medium text-slate-800"
                >
                  <Icon
                    icon="mdi:school"
                    class="-mt-[1px] text-xl text-slate-700"
                  />
                  Education
                </h3>
                <div class="education-card">
                  <p class="font-medium text-slate-800">
                    B.S. Exercise Science
                  </p>
                  <p class="text-slate-600">Bowling Green State University</p>
                  <p class="font-mono text-slate-600">2016</p>
                </div>
              </div>
              <!-- Flight + Media Section -->
              <div
                class="sidebar-section order-4 !border-none !pb-2 sm:order-2 sm:!border-solid sm:!pb-4 lg:order-4 lg:!border-none lg:!pb-2"
              >
                <h3
                  class="sidebar-title mb-4 flex items-center gap-2 text-lg font-medium text-slate-800"
                >
                  <Icon
                    icon="mdi:airplane"
                    class="-mt-[1px] text-xl text-sky-500"
                  />
                  Flight + Media
                </h3>
                <div class="space-y-4 pl-4">
                  <div class="space-y-3 text-sm">
                    <div class="credential-item">
                      <span class="text-slate-600">Private Pilot</span>
                      <span class="credential-badge">2021</span>
                    </div>
                    <div class="credential-item">
                      <span class="text-slate-600">Instrument Rating</span>
                      <span class="credential-badge">2022</span>
                    </div>
                    <div class="credential-item">
                      <span class="text-slate-600">Commercial SE</span>
                      <span class="credential-badge">2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Photography Section -->
    <section class="relative py-4 lg:py-8">
      <div class="mx-auto">
        <div class="content-card glass-card p-6 md:p-12">
          <h2 class="section-heading sm:!mb-6">Aerial Photography</h2>
          <div
            class="mb-4 grid items-center gap-6 sm:mb-0 sm:gap-8 lg:grid-cols-2"
          >
            <div class="flex h-full flex-col items-start gap-3 lg:gap-6">
              <p
                class="text-sm text-slate-600 sm:text-base sm:text-slate-700 lg:mt-4"
              >
                Commercial pilot meets creative eye - combining aviation
                precision with a passion for unique perspectives, I specialize
                in real estate and event photography across Texas.
              </p>
              <p class="text-xs italic text-slate-600 sm:text-sm">
                Licensed drone operator applying the same attention to detail
                from flight to aerial media production.
              </p>
              <RouterLink
                to="/photography"
                class="primary-button mx-auto mt-2 sm:mt-4"
                tabindex="0"
              >
                <Icon icon="mdi:camera" class="h-5 w-5" />
                <span>View Photography</span>
                <svg
                  class="btn-arrow h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </RouterLink>
            </div>
            <div class="duration-400 relative mx-auto rounded-2xl shadow-2xl">
              <div
                class="aspect-[3/2] max-h-[280px] overflow-hidden rounded-2xl"
              >
                <img
                  src="/images/dji_fly_20241030_172628_519_1730331388591_photo.jpg"
                  alt="Aerial real estate photography"
                  class="h-full w-full object-cover object-[center_40%] transition-transform duration-1000 ease-in-out hover:-translate-y-5 hover:translate-x-10 hover:scale-125"
                  loading="lazy"
                  style="will-change: transform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </HenryPage>
</template>

<style>
  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(32px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(-3px);
    }
    50% {
      transform: translateY(3px);
    }
  }

  .animate-fade-in {
    animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .float-animation {
    animation: float 3s ease-in-out infinite;
  }

  .title-rotator {
    position: relative;
    scrollbar-width: none;
    -ms-overflow-style: none;
    @apply h-6 overflow-y-hidden overflow-x-visible py-2 md:h-8;
  }

  .title-slide {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    transform: translateY(100%);
    animation: slideTitles 12s infinite;
    scrollbar-width: none;
    -ms-overflow-style: none;
    @apply flex items-center justify-center gap-2 overflow-x-visible whitespace-nowrap text-sm font-light text-slate-600 sm:text-base md:gap-3 md:text-xl;
  }

  /* Offset the start of each slide */
  .title-slide:nth-child(2) {
    animation-delay: 4s;
  }
  .title-slide:nth-child(3) {
    animation-delay: 8s;
  }

  @keyframes slideTitles {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    5% {
      transform: translateY(0);
      opacity: 1;
    }
    32% {
      transform: translateY(0);
      opacity: 1;
    }
    37% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(-100%);
      opacity: 0;
    }
  }

  /* Stat Bubbles */
  .stat-bubble {
    backdrop-filter: blur(20px);
    border-radius: 20px;
    text-align: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    @apply py-3 md:py-5;
  }

  .stat-bubble::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.05)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .stat-bubble:hover::before {
    opacity: 1;
  }

  .stat-bubble-blue {
    background: rgba(239, 246, 255, 0.8);
    border: 2px solid rgba(59, 130, 246, 0.3);
    box-shadow: 0 8px 32px rgba(59, 130, 246, 0.15);
  }

  .stat-bubble-green {
    background: rgba(240, 253, 244, 0.8);
    border: 2px solid rgba(16, 185, 129, 0.3);
    box-shadow: 0 8px 32px rgba(16, 185, 129, 0.15);
  }

  .stat-bubble-purple {
    background: rgba(250, 245, 255, 0.8);
    border: 2px solid rgba(139, 92, 246, 0.3);
    box-shadow: 0 8px 32px rgba(139, 92, 246, 0.15);
  }

  .stat-bubble-orange {
    background: rgba(255, 247, 237, 0.8);
    border: 2px solid rgba(249, 115, 22, 0.3);
    box-shadow: 0 8px 32px rgba(249, 115, 22, 0.15);
  }

  .stat-bubble:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2);
  }

  .stat-number {
    @apply font-mono text-lg font-bold sm:text-2xl;
  }

  .stat-label {
    @apply whitespace-nowrap text-xs font-light sm:text-sm;
  }

  /* Timeline */
  .timeline-container {
    position: relative;
  }

  .timeline-line {
    position: absolute;
    left: 12px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #3b82f6, #8b5cf6, #06b6d4);
    opacity: 0.3;
  }

  /* Contact Links */
  .contact-link {
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 12px;
    text-decoration: none;
    color: #64748b;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .contact-link:hover {
    background: rgba(59, 130, 246, 0.05);
    color: #3b82f6;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #64748b;
  }

  .contact-text {
    transition: color 0.3s ease;
  }

  /* Credential Items */
  .credential-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .credential-badge {
    background: rgba(239, 246, 255, 0.6);
    color: #1e40af;
    font-family: ui-monospace, SFMono-Regular, monospace;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 2px 12px;
    border-radius: 16px;
    border: 1px solid rgba(59, 130, 246, 0.3);
    transition: all 0.3s ease;
  }

  .credential-item:hover .credential-badge {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
  }

  /* Sidebar Cards */
  .sidebar-section {
    border-bottom: 1px solid rgba(226, 232, 240, 0.4);
    @apply pb-4;
  }

  .download-container {
    background: rgba(239, 245, 250, 0.9);
    border: 1px solid rgba(226, 232, 240, 0.4);
  }

  .philosophy-card,
  .education-card {
    background: rgba(248, 250, 252, 0.9);
    border: 2px solid rgba(226, 232, 240, 0.4);
    border-radius: 16px;
    padding: 20px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .philosophy-card::before,
  .education-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #10b981, #f59e0b);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  .philosophy-card:hover::before,
  .education-card:hover::before {
    transform: scaleX(1);
  }

  .philosophy-card:hover,
  .education-card:hover {
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  /* Company and Role Styling (Reverted) */
  .time-period {
    font-family: ui-monospace, SFMono-Regular, monospace;
    font-size: 0.875rem;
    color: #64748b;
    font-weight: 500;
  }

  /* Performance Optimizations */
  * {
    will-change: auto;
  }

  .stat-bubble:hover,
  .contact-link:hover {
    will-change: transform;
  }

  /* Accessibility Enhancements */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Focus States */
  .contact-link:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
</style>
