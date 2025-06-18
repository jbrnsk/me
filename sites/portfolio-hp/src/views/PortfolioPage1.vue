<script lang="ts" setup>
  import { ContactLink, PixelDivider, SectionCard } from 'src/components';
</script>

<template>
  <div class="animate-fade">
    <!-- Navigation Header -->
    <nav
      class="border-accent sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm"
    >
      <div class="mx-auto max-w-4xl px-6 py-4">
        <div class="flex items-center justify-between">
          <h1 class="relative font-mono text-lg font-medium text-slate-800">
            henry.proctor
            <div
              class="absolute -right-4 -top-1 h-2 w-2 animate-pulse rounded-full bg-blue-500"
            ></div>
          </h1>
          <div class="flex space-x-6 text-sm">
            <a href="#about" class="hover-minimal text-accent nav-link">
              about
            </a>
            <a href="#experience" class="hover-minimal text-accent nav-link">
              experience
            </a>
            <a href="#aviation" class="hover-minimal text-accent nav-link">
              aviation
            </a>
            <a href="#contact" class="hover-minimal text-accent nav-link">
              contact
            </a>
          </div>
        </div>
      </div>
    </nav>

    <main class="mx-auto max-w-4xl px-6 py-16">
      <!-- Hero Section -->
      <section class="animate-slide relative mb-20">
        <div class="relative z-10 mb-8">
          <h1 class="hero-title mb-2 text-4xl font-light text-gray-900">
            Henry Proctor IV
          </h1>
          <p class="text-accent flex items-center gap-2 text-xl font-light">
            Sales Leader
            <span
              class="inline-block h-1 w-1 animate-pulse rounded-full bg-blue-500"
            ></span>
            Commercial Pilot
            <svg
              class="animate-bounce-subtle h-4 w-4 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
              ></path>
            </svg>
          </p>
        </div>

        <div class="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div class="stat-card text-center">
            <div class="font-mono text-2xl font-medium text-blue-600">340+</div>
            <div class="text-accent text-sm">flight hours</div>
          </div>
          <div class="stat-card text-center">
            <div class="font-mono text-2xl font-medium text-green-600">$7M</div>
            <div class="text-accent text-sm">monthly revenue</div>
          </div>
          <div class="stat-card text-center">
            <div class="font-mono text-2xl font-medium text-purple-600">
              75%
            </div>
            <div class="text-accent text-sm">close rate</div>
          </div>
          <div class="stat-card text-center">
            <div class="font-mono text-2xl font-medium text-orange-600">
              10+
            </div>
            <div class="text-accent text-sm">years exp</div>
          </div>
        </div>

        <p class="fade-in-up max-w-3xl text-lg leading-relaxed text-gray-700">
          Relationship-first sales leader with a decade of experience scaling
          territories across FinTech, Automotive, and Wellness sectors.
          Certified commercial pilot bringing precision and strategic thinking
          to business operations.
        </p>
      </section>

      <!-- Two Column Layout -->
      <div class="grid grid-cols-1 gap-16 lg:grid-cols-3">
        <!-- Main Content -->
        <div class="space-y-16 lg:col-span-2">
          <!-- Experience -->
          <section id="experience" class="fade-in-up">
            <h2
              class="mb-8 flex items-center gap-2 font-mono text-lg font-medium text-gray-900"
            >
              experience
              <div
                class="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent"
              ></div>
            </h2>
            <div class="space-y-8">
              <div class="section-hover experience-card -ml-4 rounded-r-lg p-4">
                <div class="mb-3 flex items-start justify-between">
                  <div>
                    <h3 class="font-medium text-gray-900">
                      Senior Customer Success Manager
                    </h3>
                    <p class="font-medium text-blue-600">PorchPass</p>
                  </div>
                  <span class="text-accent font-mono text-sm">2024 – 2025</span>
                </div>
                <p class="mb-3 leading-relaxed text-gray-700">
                  Drove loan volume from $3M to $7M monthly in 90 days. Managing
                  125+ dealership accounts across Texas and Oklahoma with
                  full-cycle partnership ownership.
                </p>
                <div class="flex gap-2 text-xs">
                  <span
                    class="tag-hover rounded-full border border-green-200 bg-green-50 px-3 py-1 text-green-700"
                  >
                    133% growth
                  </span>
                  <span
                    class="tag-hover rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-blue-700"
                  >
                    125+ accounts
                  </span>
                </div>
              </div>

              <div class="section-hover experience-card -ml-4 rounded-r-lg p-4">
                <div class="mb-3 flex items-start justify-between">
                  <div>
                    <h3 class="font-medium text-gray-900">
                      Sales Manager & Flexologist
                    </h3>
                    <p class="font-medium text-purple-600">StretchLab</p>
                  </div>
                  <span class="text-accent font-mono text-sm">2023 – 2024</span>
                </div>
                <p class="mb-3 leading-relaxed text-gray-700">
                  Managed $1.2M annual sales across two studios. Led 7-person
                  team and achieved 75% close rate—highest in district.
                </p>
                <div class="flex gap-2 text-xs">
                  <span
                    class="tag-hover rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-purple-700"
                  >
                    district leader
                  </span>
                  <span
                    class="tag-hover rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-orange-700"
                  >
                    $1.2M revenue
                  </span>
                </div>
              </div>

              <div class="section-hover experience-card -ml-4 rounded-r-lg p-4">
                <div class="mb-3 flex items-start justify-between">
                  <div>
                    <h3 class="font-medium text-gray-900">
                      Senior Account Manager
                    </h3>
                    <p class="font-medium text-indigo-600">
                      Otis Elevator Company
                    </p>
                  </div>
                  <span class="text-accent font-mono text-sm">2016 – 2020</span>
                </div>
                <p class="mb-3 leading-relaxed text-gray-700">
                  Top 3 performer in Midwest region. Managed 633 elevators, sold
                  $4.3M in upgrades, maintained 95% customer retention.
                </p>
                <div class="flex gap-2 text-xs">
                  <span
                    class="tag-hover rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-yellow-700"
                  >
                    top 3 regional
                  </span>
                  <span
                    class="tag-hover rounded-full border border-green-200 bg-green-50 px-3 py-1 text-green-700"
                  >
                    95% retention
                  </span>
                </div>
              </div>
            </div>
          </section>

          <!-- Current Focus -->
          <section class="fade-in-up">
            <h2
              class="mb-8 flex items-center gap-2 font-mono text-lg font-medium text-gray-900"
            >
              aviation interests
              <div
                class="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent"
              ></div>
            </h2>
            <div
              class="border-accent hover-lift rounded-lg border bg-gradient-to-br from-blue-50/50 to-white p-6"
            >
              <h3
                class="mb-3 flex items-center gap-2 font-medium text-gray-900"
              >
                Drone Photography
                <svg
                  class="h-4 w-4 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  ></path>
                </svg>
              </h3>
              <p class="leading-relaxed text-gray-700">
                Exploring drone media production for real estate photography and
                events, applying commercial pilot precision to aerial content
                creation.
              </p>
              <div class="mt-4">
                <a
                  href="/photography"
                  class="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-sm text-blue-700 transition-colors hover:bg-blue-100"
                >
                  📷 See aerial work
                </a>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <aside class="fade-in-up space-y-12">
          <!-- Profile Image -->
          <div class="text-center">
            <div
              class="relative mx-auto h-32 w-32 overflow-hidden rounded-full"
            >
              <img
                src="/images/henry-headshot.jpg"
                alt="Henry Proctor IV"
                class="profile-img grayscale transition-all duration-500 hover:scale-105 hover:grayscale-0"
                style="
                  width: 250px;
                  height: 250px;
                  object-fit: cover;
                  object-position: -30px 0;
                  transform: translateZ(0);
                "
              />
            </div>
          </div>

          <!-- Contact -->
          <section id="contact">
            <h3
              class="mb-4 flex items-center gap-2 font-mono text-sm font-medium text-gray-900"
            >
              contact
              <div
                class="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent"
              ></div>
            </h3>
            <div class="space-y-3 text-sm">
              <a
                href="mailto:hproc725@gmail.com"
                class="hover-minimal text-accent contact-link block"
              >
                📧 hproc725@gmail.com
              </a>
              <a
                href="tel:216-633-8470"
                class="hover-minimal text-accent contact-link block"
              >
                📞 (216) 633-8470
              </a>
              <a href="#" class="hover-minimal text-accent contact-link block">
                💼 linkedin.com/in/henry-proctor
              </a>
              <p class="text-accent flex items-center gap-1">
                📍 san antonio, texas
              </p>
            </div>
          </section>

          <!-- Aviation -->
          <section id="aviation">
            <h3
              class="mb-4 flex items-center gap-2 font-mono text-sm font-medium text-gray-900"
            >
              aviation
              <div
                class="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent"
              ></div>
            </h3>
            <div class="space-y-3 text-sm">
              <div class="aviation-item flex items-center justify-between">
                <span class="text-accent">✈️ private pilot</span>
                <span
                  class="rounded bg-blue-50 px-2 py-1 font-mono text-gray-900"
                >
                  2021
                </span>
              </div>
              <div class="aviation-item flex items-center justify-between">
                <span class="text-accent">🎯 instrument rating</span>
                <span
                  class="rounded bg-blue-50 px-2 py-1 font-mono text-gray-900"
                >
                  2022
                </span>
              </div>
              <div class="aviation-item flex items-center justify-between">
                <span class="text-accent">🛩️ commercial se</span>
                <span
                  class="rounded bg-blue-50 px-2 py-1 font-mono text-gray-900"
                >
                  2023
                </span>
              </div>
              <div class="border-accent mt-4 border-t pt-3">
                <div class="flex items-center justify-between">
                  <span class="font-medium text-gray-900">total hours</span>
                  <span class="font-mono text-lg font-bold text-blue-600">
                    340+
                  </span>
                </div>
              </div>
            </div>
          </section>

          <!-- Education -->
          <section>
            <h3
              class="mb-4 flex items-center gap-2 font-mono text-sm font-medium text-gray-900"
            >
              education
              <div
                class="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent"
              ></div>
            </h3>
            <div class="hover-lift rounded-lg bg-gray-50 p-4 text-sm">
              <p class="font-medium text-gray-900">🎓 B.S. Exercise Science</p>
              <p class="text-accent">Bowling Green State University</p>
              <p class="text-accent font-mono">2016</p>
            </div>
          </section>

          <!-- Philosophy -->
          <section>
            <h3
              class="mb-4 flex items-center gap-2 font-mono text-sm font-medium text-gray-900"
            >
              philosophy
              <div
                class="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent"
              ></div>
            </h3>
            <div
              class="hover-lift rounded-lg border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-4"
            >
              <p class="text-accent text-sm leading-relaxed">
                🏃‍♂️ Former athlete with a passion for flight, connection, and
                high-performing teams. Best results come from genuine
                relationships and doing the work right the first time.
              </p>
            </div>
          </section>
        </aside>
      </div>

      <!-- Footer -->
      <footer class="border-accent mt-20 border-t pt-8 text-center">
        <p class="text-accent font-mono text-xs">
          © 2025 henry.proctor • built by joseph.baranoski
        </p>
      </footer>
    </main>
  </div>
</template>

<style>
  .font-mono {
    font-family: 'JetBrains Mono', monospace;
  }
  body {
    font-family: 'Inter', sans-serif;
  }

  /* Enhanced Animations */
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

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-10px) rotate(2deg);
    }
  }

  @keyframes floatDelayed {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-8px) rotate(-2deg);
    }
  }

  @keyframes bounceSubtle {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-3px);
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
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-float-delayed {
    animation: floatDelayed 8s ease-in-out infinite;
  }
  .animate-bounce-subtle {
    animation: bounceSubtle 2s ease-in-out infinite;
  }
  .fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  /* Enhanced Hover Effects */
  .hover-minimal {
    transition: all 0.3s ease;
    position: relative;
  }

  .hover-minimal:hover {
    color: #1d4ed8;
    transform: translateX(4px);
  }

  .section-hover {
    transition: all 0.4s ease;
    position: relative;
  }

  .section-hover:hover {
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    border-left: 3px solid #3b82f6;
    padding-left: 1.25rem;
    transform: translateX(2px);
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.05);
  }

  .stat-card {
    transition: all 0.3s ease;
    cursor: default;
  }

  .stat-card:hover {
    transform: translateY(-2px);
  }

  .experience-card {
    position: relative;
  }

  .tag-hover {
    transition: all 0.2s ease;
  }

  .tag-hover:hover {
    transform: translateY(-1px);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  }

  .contact-link {
    transition: all 0.3s ease;
    padding: 4px 0;
    border-radius: 4px;
  }

  .contact-link:hover {
    background-color: rgba(59, 130, 246, 0.05);
    padding-left: 8px;
  }

  .aviation-item {
    transition: all 0.2s ease;
    padding: 2px 0;
    border-radius: 4px;
  }

  .aviation-item:hover {
    background-color: rgba(59, 130, 246, 0.05);
    transform: translateX(2px);
  }

  .hover-lift {
    transition: all 0.3s ease;
  }

  .hover-lift:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  }

  .profile-img {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .hero-title {
    background: linear-gradient(135deg, #1f2937 0%, #3b82f6 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

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
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  /* Custom borders */
  .border-accent {
    border-color: #e2e8f0;
  }
  .text-accent {
    color: #64748b;
  }
</style>
