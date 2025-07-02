<script setup lang="ts">
  import { throttle } from 'lodash-es';
  import { onMounted } from 'vue';

  onMounted(() => {
    animateYearsExp();
    animateRevenue();
    animateCloseRate();
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
  <!-- Hero Section -->
  <section class="relative px-6 py-8">
    <div class="mx-auto max-w-6xl">
      <div class="glass-card mx-auto p-12 text-center">
        <h1 class="hero-title mb-4 text-5xl font-light text-slate-800">
          Henry Proctor IV
        </h1>
        <p
          class="mb-8 flex items-center justify-center gap-3 text-xl text-slate-600"
        >
          Sales Leader
          <span
            class="inline-block h-1 w-1 animate-pulse rounded-full bg-blue-500"
          ></span>
          Commercial Pilot
          <svg
            class="float-animation h-5 w-5 text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
            ></path>
          </svg>
        </p>
        <!-- Colorful Stats Grid -->
        <div class="mb-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div
            class="stat-bubble-blue transition-all duration-300 hover:scale-105"
            @mouseenter="animateYearsExp"
          >
            <div
              class="font-mono text-2xl font-bold text-blue-700"
              id="years-exp"
            >
              10+
            </div>
            <div class="text-sm text-blue-600">years exp</div>
          </div>
          <div
            class="stat-bubble-green transition-all duration-300 hover:scale-105"
            @mouseenter="animateRevenue"
          >
            <div
              class="font-mono text-2xl font-bold text-green-700"
              id="revenue"
            >
              $7M
            </div>
            <div class="text-sm text-green-600">monthly revenue</div>
          </div>
          <div
            class="stat-bubble-purple transition-all duration-300 hover:scale-105"
            @mouseenter="animateCloseRate"
          >
            <div
              class="font-mono text-2xl font-bold text-purple-700"
              id="close-rate"
            >
              75%
            </div>
            <div class="text-sm text-purple-600">close rate</div>
          </div>
          <div
            class="stat-bubble-orange transition-all duration-300 hover:scale-105"
            @mouseenter="animateAppsRate"
          >
            <div
              class="font-mono text-2xl font-bold text-orange-700"
              id="apps-rate"
            >
              500+
            </div>
            <div class="text-sm text-orange-600">apps in 6 months</div>
          </div>
        </div>
        <p class="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
          Strategic sales leader with 10+ years driving growth across FinTech,
          aviation, and wellness sectors. Military spouse bringing analytical
          precision and relationship-focused leadership to scale high-performing
          teams and execute revenue-generating strategies across diverse
          markets.
        </p>
      </div>
    </div>
  </section>
  <!-- Main Content Grid -->
  <section id="experience" class="relative px-6 py-8">
    <div class="mx-auto max-w-6xl">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <!-- Main Experience Content -->
        <div class="lg:col-span-2">
          <div class="content-card p-12">
            <!-- Section Header -->
            <h2 class="section-title">Experience</h2>
            <!-- Timeline Container -->
            <div class="timeline-container">
              <div class="timeline-line"></div>
              <!-- Experience Items -->
              <div class="experience-item">
                <div class="timeline-dot"></div>
                <div class="mb-4 flex items-start justify-between">
                  <div class="flex-1">
                    <div class="company-name">PorchPass</div>
                    <h3 class="role-title">Senior Customer Success Manager</h3>
                  </div>
                  <div class="time-period">2024 – 2025</div>
                </div>
                <p class="description">
                  Drove loan volume from $3M to $7M monthly in 90 days. Managing
                  125+ dealership accounts across Texas and Oklahoma with
                  full-cycle partnership ownership.
                </p>
                <div class="metrics-container">
                  <span class="metric-tag metric-primary">133% Growth</span>
                  <span class="metric-tag metric-secondary">125+ Accounts</span>
                </div>
              </div>
              <div class="experience-item">
                <div class="timeline-dot"></div>
                <div class="mb-4 flex items-start justify-between">
                  <div class="flex-1">
                    <div class="company-name">StretchLab</div>
                    <h3 class="role-title">Sales Manager & Flexologist</h3>
                  </div>
                  <div class="time-period">2023 – 2024</div>
                </div>
                <p class="description">
                  Managed $1.2M annual sales across two studios. Led 7-person
                  team and achieved 75% close rate—highest in district.
                </p>
                <div class="metrics-container">
                  <span class="metric-tag metric-primary">$1.2M Revenue</span>
                  <span class="metric-tag metric-secondary">
                    District Leader
                  </span>
                </div>
              </div>
              <div class="experience-item">
                <div class="timeline-dot"></div>
                <div class="mb-4 flex items-start justify-between">
                  <div class="flex-1">
                    <div class="company-name">Otis Elevator Company</div>
                    <h3 class="role-title">Senior Account Manager</h3>
                  </div>
                  <div class="time-period">2016 – 2020</div>
                </div>
                <p class="description">
                  Top 3 performer in Midwest region. Managed 633 elevators, sold
                  $4.3M in upgrades, maintained 95% customer retention.
                </p>
                <div class="metrics-container">
                  <span class="metric-tag metric-primary">$4.3M Sales</span>
                  <span class="metric-tag metric-secondary">95% Retention</span>
                  <span class="metric-tag metric-secondary">
                    Top 3 Regional
                  </span>
                </div>
              </div>
            </div>
            <!-- Download Resume Button -->
            <div class="mt-16 text-center">
              <a
                href="/docs/Resume-Henry Proctor IV 2025.pdf"
                download
                class="download-btn"
              >
                <svg
                  class="download-icon h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <!-- Unified Sidebar -->
        <div class="content-card space-y-8 p-8">
          <!-- Profile -->
          <div class="text-center">
            <div
              class="relative mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full"
            >
              <img
                src="/images/henry-headshot.jpg"
                alt="Henry Proctor IV"
                class="h-full w-full object-cover grayscale transition-all duration-500 hover:scale-105 hover:grayscale-0"
              />
            </div>
            <h3 class="mb-2 font-medium text-slate-800">Henry Proctor IV</h3>
            <p class="text-sm text-slate-600">
              Sales Leader & Commercial Pilot
            </p>
          </div>

          <!-- Contact -->
          <div class="sidebar-section">
            <h3
              class="mb-4 flex items-center gap-2 text-lg font-medium text-slate-800"
            >
              <span class="text-xl">📞</span>
              Contact
            </h3>
            <div class="space-y-3 text-sm">
              <a
                href="mailto:hproc725@gmail.com"
                class="contact-link flex items-center gap-2 text-slate-600 transition-colors hover:text-blue-600"
              >
                📧 hproc725@gmail.com
              </a>
              <a
                href="tel:216-633-8470"
                class="contact-link flex items-center gap-2 text-slate-600 transition-colors hover:text-blue-600"
              >
                📞 (216) 633-8470
              </a>
              <a
                href="#"
                class="contact-link flex items-center gap-2 text-slate-600 transition-colors hover:text-blue-600"
              >
                💼 linkedin.com/in/henry-proctor
              </a>
              <p class="flex items-center gap-2 text-slate-600">
                📍 San Antonio, Texas
              </p>
            </div>
          </div>

          <!-- Flight + Media -->
          <div class="sidebar-section">
            <h3
              class="mb-4 flex items-center gap-2 text-lg font-medium text-slate-800"
            >
              <span class="text-xl">✈️</span>
              Flight + Media
            </h3>
            <div class="space-y-4">
              <!-- Aviation credentials -->
              <div class="space-y-3 text-sm">
                <div class="flex items-center justify-between">
                  <span class="text-slate-600">Private Pilot</span>
                  <span
                    class="rounded bg-blue-100 px-2 py-1 font-mono text-xs text-blue-700"
                  >
                    2021
                  </span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-600">Instrument Rating</span>
                  <span
                    class="rounded bg-blue-100 px-2 py-1 font-mono text-xs text-blue-700"
                  >
                    2022
                  </span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-600">Commercial SE</span>
                  <span
                    class="rounded bg-blue-100 px-2 py-1 font-mono text-xs text-blue-700"
                  >
                    2023
                  </span>
                </div>
              </div>
            </div>

            <!-- Philosophy -->
            <div class="sidebar-section sidebar-card">
              <h3
                class="mb-4 flex items-center gap-2 text-lg font-medium text-slate-800"
              >
                <span class="text-xl">🎯</span>
                Philosophy
              </h3>
              <div
                class="hover-expand rounded-lg border border-green-100 bg-white/60 p-4 backdrop-blur-sm"
              >
                <p class="text-sm leading-relaxed text-slate-600">
                  Blending the grit of sport, precision of flight, and strategy
                  of business—with wisdom and a hunger to learn, growth is my
                  constant pursuit.
                </p>
              </div>
            </div>

            <!-- Education -->
            <div class="sidebar-section sidebar-card">
              <h3
                class="mb-4 flex items-center gap-2 text-lg font-medium text-slate-800"
              >
                <span class="text-xl">🎓</span>
                Education
              </h3>
              <div
                class="hover-expand rounded-lg border border-green-100 bg-white/60 p-4 text-sm backdrop-blur-sm"
              >
                <p class="font-medium text-slate-800">B.S. Exercise Science</p>
                <p class="text-slate-600">Bowling Green State University</p>
                <p class="font-mono text-slate-600">2016</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Drone Photography Section -->
  <section class="relative px-6 py-8">
    <div class="mx-auto">
      <div class="content-card glass-card p-8">
        <h2
          class="mb-6 flex items-center gap-3 text-2xl font-light text-slate-800"
        >
          aerial photography
        </h2>
        <div class="grid items-center gap-6 md:grid-cols-2">
          <div>
            <p class="mb-4 text-lg leading-relaxed text-slate-600">
              Combining commercial pilot precision with creative vision to
              capture unique perspectives from above. Specializing in real
              estate photography and event coverage across Texas.
            </p>
            <p class="mb-6 text-slate-600">
              Licensed drone operator applying the same attention to detail from
              aviation to aerial media production.
            </p>
            <a
              href="/photography"
              class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
            >
              📷 View Portfolio
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div class="relative">
            <div
              class="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-purple-100"
            >
              <img
                src="/images/dji_fly_20240218_123500_93_1708290047743_photo_optimized.jpg"
                alt="Aerial real estate photography"
                class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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

  .float-animation {
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translateY(-2px);
    }
    50% {
      transform: translateY(2px);
    }
    100% {
      transform: translateY(-2px);
    }
  }
  /* Timeline Styles */
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

  .timeline-dot {
    position: absolute;
    left: 6px;
    top: 8px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: white;
    border: 3px solid #3b82f6;
    z-index: 10;
    transition: all 0.3s ease;
  }

  .experience-item:hover .timeline-dot {
    transform: scale(1.2);
    border-color: #1d4ed8;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
  }

  /* Experience Item Styles */
  .experience-item {
    position: relative;
    padding-left: 40px;
    margin-bottom: 48px;
    transition: all 0.3s ease;
  }

  .experience-item:last-child {
    margin-bottom: 0;
  }

  .experience-item:hover {
    transform: translateX(8px);
  }

  /* Company and Role Hierarchy */
  .company-name {
    font-size: 0.875rem;
    font-weight: 600;
    color: #3b82f6;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .role-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 8px;
    line-height: 1.3;
  }

  .time-period {
    font-family: ui-monospace, SFMono-Regular, monospace;
    font-size: 0.875rem;
    color: #64748b;
    font-weight: 500;
  }

  .description {
    font-size: 1rem;
    line-height: 1.7;
    color: #475569;
    margin: 16px 0 20px 0;
  }

  /* Unified Metric Tags */
  .metrics-container {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .metric-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.025em;
    transition: all 0.3s ease;
  }

  /* Primary metrics (revenue, growth) */
  .metric-primary {
    background: linear-gradient(135deg, #dbeafe, #bfdbfe);
    color: #1e40af;
    border: 1px solid rgba(59, 130, 246, 0.2);
  }

  /* Secondary metrics (accounts, retention) */
  .metric-secondary {
    background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
    color: #475569;
    border: 1px solid rgba(148, 163, 184, 0.2);
  }

  .metric-tag:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* Download Button */
  .download-btn {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    border-radius: 12px;
    padding: 16px 32px;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 16px rgba(59, 130, 246, 0.2);
  }

  .download-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
    background: linear-gradient(135deg, #1d4ed8, #1e40af);
  }

  .download-icon {
    transition: transform 0.3s ease;
  }

  .download-btn:hover .download-icon {
    transform: translateY(2px);
  }

  /* Section Header */
  .section-title {
    font-size: 1.75rem;
    font-weight: 300;
    color: #1e293b;
    margin-bottom: 32px;
    letter-spacing: -0.025em;
  }
  /* Sidebar Section Spacing */
  .sidebar-section {
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid rgba(226, 232, 240, 0.3);
  }

  .sidebar-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  /* Sidebar Enhancements */
  .sidebar-card .hover-expand {
    transition: all 0.3s ease;
    cursor: pointer;
    background: rgba(248, 250, 252, 0.8);
    border: 1px solid rgba(226, 232, 240, 0.4);
  }

  .sidebar-card .hover-expand:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border-color: rgba(59, 130, 246, 0.3);
    background: rgba(255, 255, 255, 0.9);
  }

  /* Footer CTA Animation */
  .footer-cta:hover {
    transform: translateX(3px);
  }

  /* Quote Block Serif Font */
  .quote-block p {
    font-family: Georgia, 'Times New Roman', serif;
  }

  /* Frosted Glass Effect - Reserved for Hero */
  .glass-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .glass-card:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
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
