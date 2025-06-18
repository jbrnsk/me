<script lang="ts" setup></script>

<template>
  <!-- Navigation Header -->
  <nav class="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-blue-500/20">
    <div class="mx-auto max-w-4xl px-6 py-4">
      <div class="flex items-center justify-between">
        <h1 class="font-display text-xl font-bold text-white">
          HENRY.PROCTOR
        </h1>
        <div class="flex space-x-6 text-sm font-medium">
          <a href="#about" class="nav-link text-blue-200 hover:text-white">ABOUT</a>
          <a href="#experience" class="nav-link text-blue-200 hover:text-white">EXPERIENCE</a>
          <a href="#aviation" class="nav-link text-blue-200 hover:text-white">AVIATION</a>
          <a href="#contact" class="nav-link text-blue-200 hover:text-white">CONTACT</a>
        </div>
      </div>
    </div>
  </nav>

  <main class="mx-auto max-w-4xl px-6 py-16">

    <!-- Hero Section -->
    <section class="animate-slide mb-20 text-center">
      <div class="mb-8">
        <h1 class="gradient-text mb-4 text-5xl font-bold font-display">
          HENRY PROCTOR IV
        </h1>
        <div class="flex items-center justify-center gap-3 text-xl font-semibold">
          <span class="text-blue-300">SALES LEADER</span>
          <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span class="text-purple-300">COMMERCIAL PILOT</span>
          <svg class="w-5 h-5 text-blue-400 animate-bounce-subtle" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
          </svg>
        </div>
      </div>

      <!-- Stats Dashboard -->
      <div class="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
        <div class="stat-card hover-scale rounded-xl p-6 from-blue-600 to-blue-700">
          <div class="font-display text-3xl font-bold text-white">340+</div>
          <div class="text-blue-100 text-sm font-medium uppercase tracking-wide">Flight Hours</div>
        </div>
        <div class="stat-card hover-scale rounded-xl p-6 from-green-600 to-emerald-700">
          <div class="font-display text-3xl font-bold text-white">$7M</div>
          <div class="text-green-100 text-sm font-medium uppercase tracking-wide">Monthly Revenue</div>
        </div>
        <div class="stat-card hover-scale rounded-xl p-6 from-purple-600 to-violet-700">
          <div class="font-display text-3xl font-bold text-white">75%</div>
          <div class="text-purple-100 text-sm font-medium uppercase tracking-wide">Close Rate</div>
        </div>
        <div class="stat-card hover-scale rounded-xl p-6 from-orange-600 to-red-700">
          <div class="font-display text-3xl font-bold text-white">10+</div>
          <div class="text-orange-100 text-sm font-medium uppercase tracking-wide">Years Experience</div>
        </div>
      </div>

      <p class="max-w-3xl mx-auto text-lg leading-relaxed text-blue-100">
        <strong class="text-white">Relationship-first sales leader</strong> with a decade of experience scaling
        territories across FinTech, Automotive, and Wellness sectors.
        <strong class="text-white">Certified commercial pilot</strong> bringing precision and strategic thinking
        to business operations.
      </p>
    </section>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 gap-16 lg:grid-cols-12">

      <!-- Main Content -->
      <div class="space-y-16 lg:col-span-8">

        <!-- Experience -->
        <section id="experience" class="fade-in-up">
          <div class="mb-8 flex items-center gap-4">
            <h2 class="font-display text-2xl font-bold text-white">EXPERIENCE</h2>
            <div class="section-badge">TRACK RECORD</div>
          </div>

          <div class="space-y-6">
            <div class="experience-card rounded-xl p-6">
              <div class="mb-4 flex items-start justify-between">
                <div>
                  <h3 class="font-display text-xl font-bold text-slate-900">Senior Customer Success Manager</h3>
                  <p class="font-semibold text-blue-600">PorchPass</p>
                </div>
                <span class="font-display text-sm font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">2024 – 2025</span>
              </div>
              <p class="mb-4 text-slate-700 leading-relaxed">
                <strong>Drove loan volume from $3M to $7M monthly in 90 days.</strong> Managing
                125+ dealership accounts across Texas and Oklahoma with
                full-cycle partnership ownership.
              </p>
              <div class="flex gap-3">
                                <span class="rounded-full bg-green-500 text-white px-4 py-2 text-sm font-bold">
                                    📈 133% GROWTH
                                </span>
                <span class="rounded-full bg-blue-500 text-white px-4 py-2 text-sm font-bold">
                                    🎯 125+ ACCOUNTS
                                </span>
              </div>
            </div>

            <div class="experience-card rounded-xl p-6">
              <div class="mb-4 flex items-start justify-between">
                <div>
                  <h3 class="font-display text-xl font-bold text-slate-900">Sales Manager & Flexologist</h3>
                  <p class="font-semibold text-purple-600">StretchLab</p>
                </div>
                <span class="font-display text-sm font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">2023 – 2024</span>
              </div>
              <p class="mb-4 text-slate-700 leading-relaxed">
                Managed $1.2M annual sales across two studios. Led 7-person
                team and achieved <strong>75% close rate—highest in district.</strong>
              </p>
              <div class="flex gap-3">
                                <span class="rounded-full bg-purple-500 text-white px-4 py-2 text-sm font-bold">
                                    🏆 DISTRICT LEADER
                                </span>
                <span class="rounded-full bg-orange-500 text-white px-4 py-2 text-sm font-bold">
                                    💰 $1.2M REVENUE
                                </span>
              </div>
            </div>

            <div class="experience-card rounded-xl p-6">
              <div class="mb-4 flex items-start justify-between">
                <div>
                  <h3 class="font-display text-xl font-bold text-slate-900">Senior Account Manager</h3>
                  <p class="font-semibold text-indigo-600">Otis Elevator Company</p>
                </div>
                <span class="font-display text-sm font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">2016 – 2020</span>
              </div>
              <p class="mb-4 text-slate-700 leading-relaxed">
                <strong>Top 3 performer in Midwest region.</strong> Managed 633 elevators, sold
                $4.3M in upgrades, maintained 95% customer retention.
              </p>
              <div class="flex gap-3">
                                <span class="rounded-full bg-yellow-500 text-white px-4 py-2 text-sm font-bold">
                                    🥉 TOP 3 REGIONAL
                                </span>
                <span class="rounded-full bg-green-500 text-white px-4 py-2 text-sm font-bold">
                                    ✅ 95% RETENTION
                                </span>
              </div>
            </div>
          </div>
        </section>

        <!-- Aviation Interests -->
        <section class="fade-in-up-delayed">
          <div class="mb-8 flex items-center gap-4">
            <h2 class="font-display text-2xl font-bold text-white">AVIATION INTERESTS</h2>
            <div class="section-badge">PASSION PROJECT</div>
          </div>

          <div class="rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 p-8 backdrop-blur-sm">
            <div class="flex items-center gap-3 mb-4">
              <h3 class="font-display text-xl font-bold text-white">DRONE PHOTOGRAPHY</h3>
              <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"></path>
              </svg>
            </div>
            <p class="text-blue-100 leading-relaxed mb-4">
              Exploring drone media production for real estate photography and
              events, applying commercial pilot precision to aerial content
              creation.
            </p>
            <a href="/photography" class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-lg transition-all hover:transform hover:scale-105">
              📸 VIEW AERIAL PORTFOLIO →
            </a>
          </div>
        </section>
      </div>

      <!-- Sidebar -->
      <aside class="space-y-8 lg:col-span-4 fade-in-up-delayed-2">

        <!-- Profile Image -->
        <div class="text-center">
          <div class="relative inline-block">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
              alt="Henry Proctor IV"
              class="mx-auto h-40 w-40 rounded-xl object-cover transition-all duration-500 hover:scale-105 border-4 border-blue-400/50"
            />
            <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
              <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        <!-- Contact -->
        <section id="contact" class="rounded-xl bg-slate-800/50 p-6 border border-blue-400/30">
          <h3 class="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
            CONTACT
            <div class="w-8 h-px bg-blue-400"></div>
          </h3>
          <div class="space-y-3">
            <a href="mailto:hproc725@gmail.com" class="contact-item flex items-center gap-3 text-blue-200 hover:text-white">
              <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                📧
              </div>
              <div>
                <div class="font-medium">Email</div>
                <div class="text-sm text-blue-300">hproc725@gmail.com</div>
              </div>
            </a>
            <a href="tel:216-633-8470" class="contact-item flex items-center gap-3 text-blue-200 hover:text-white">
              <div class="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                📞
              </div>
              <div>
                <div class="font-medium">Phone</div>
                <div class="text-sm text-blue-300">(216) 633-8470</div>
              </div>
            </a>
            <a href="#" class="contact-item flex items-center gap-3 text-blue-200 hover:text-white">
              <div class="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                💼
              </div>
              <div>
                <div class="font-medium">LinkedIn</div>
                <div class="text-sm text-blue-300">henry-proctor</div>
              </div>
            </a>
            <div class="flex items-center gap-3 text-blue-200">
              <div class="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                📍
              </div>
              <div>
                <div class="font-medium">Location</div>
                <div class="text-sm text-blue-300">San Antonio, Texas</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Aviation -->
        <section id="aviation" class="rounded-xl bg-slate-800/50 p-6 border border-blue-400/30">
          <h3 class="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
            AVIATION
            <div class="w-8 h-px bg-blue-400"></div>
          </h3>
          <div class="space-y-3">
            <div class="aviation-badge flex items-center justify-between bg-blue-600/20 p-3 rounded-lg border border-blue-400/30">
              <div class="flex items-center gap-2">
                <span>✈️</span>
                <span class="text-blue-100 font-medium">Private Pilot</span>
              </div>
              <span class="font-display font-bold text-blue-300">2021</span>
            </div>
            <div class="aviation-badge flex items-center justify-between bg-purple-600/20 p-3 rounded-lg border border-purple-400/30">
              <div class="flex items-center gap-2">
                <span>🎯</span>
                <span class="text-purple-100 font-medium">Instrument Rating</span>
              </div>
              <span class="font-display font-bold text-purple-300">2022</span>
            </div>
            <div class="aviation-badge flex items-center justify-between bg-green-600/20 p-3 rounded-lg border border-green-400/30">
              <div class="flex items-center gap-2">
                <span>🛩️</span>
                <span class="text-green-100 font-medium">Commercial SE</span>
              </div>
              <span class="font-display font-bold text-green-300">2023</span>
            </div>
            <div class="mt-4 p-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-lg border border-blue-400/50">
              <div class="flex items-center justify-between">
                <span class="font-bold text-white">TOTAL HOURS</span>
                <span class="font-display text-2xl font-bold text-blue-300">340+</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Education -->
        <section class="rounded-xl bg-slate-800/50 p-6 border border-blue-400/30">
          <h3 class="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
            EDUCATION
            <div class="w-8 h-px bg-blue-400"></div>
          </h3>
          <div class="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-4 rounded-lg border border-blue-400/30">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-lg">🎓</span>
              <span class="font-bold text-white">B.S. Exercise Science</span>
            </div>
            <p class="text-blue-200">Bowling Green State University</p>
            <p class="font-display text-blue-300 font-bold">2016</p>
          </div>
        </section>

        <!-- Philosophy -->
        <section class="rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 border border-purple-400/30">
          <h3 class="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
            PHILOSOPHY
            <div class="w-8 h-px bg-purple-400"></div>
          </h3>
          <p class="text-purple-100 leading-relaxed">
            <strong class="text-white">Former athlete</strong> with a passion for flight, connection, and
            high-performing teams. Best results come from genuine
            relationships and getting the work done right the first time.
          </p>
        </section>
      </aside>
    </div>

    <!-- Footer -->
    <footer class="mt-20 border-t border-blue-400/30 pt-8 text-center">
      <p class="font-display text-sm text-blue-300">
        © 2025 HENRY.PROCTOR • BUILT BY JOSEPH.BARANOSKI
      </p>
    </footer>
</template>

<style scoped>
  .font-display {
    font-family: 'Space Grotesk', sans-serif;
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

  @keyframes bounceSubtle {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-3px);
    }
  }

  @keyframes gradient {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
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
  .animate-bounce-subtle {
    animation: bounceSubtle 2s ease-in-out infinite;
  }

  /* Enhanced Hover Effects */
  .hover-scale {
    transition: all 0.3s ease;
  }

  .hover-scale:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
  }

  .stat-card {
    transition: all 0.3s ease;
    background: linear-gradient(135deg, var(--tw-gradient-stops));
  }

  .stat-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }

  .experience-card {
    position: relative;
    transition: all 0.4s ease;
    background: white;
    border: 2px solid transparent;
  }

  .experience-card:hover {
    transform: translateX(8px);
    border-color: #3b82f6;
    box-shadow: 0 15px 35px rgba(59, 130, 246, 0.1);
  }

  .contact-item {
    transition: all 0.3s ease;
  }

  .contact-item:hover {
    transform: translateX(4px);
    color: #3b82f6;
  }

  .aviation-badge {
    transition: all 0.3s ease;
  }

  .aviation-badge:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.2);
  }

  .gradient-text {
    background: linear-gradient(135deg, #1e293b 0%, #3b82f6 50%, #8b5cf6 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }

  .nav-link {
    position: relative;
    transition: all 0.3s ease;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    transition: all 0.3s ease;
    transform: translateX(-50%);
    border-radius: 2px;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .section-badge {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.025em;
  }
</style>
