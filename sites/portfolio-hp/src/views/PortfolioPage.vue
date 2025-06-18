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
          <h1 class="font-mono text-lg font-medium">henry.proctor</h1>
          <div class="flex space-x-6 text-sm">
            <a href="#about" class="hover-minimal text-accent">about</a>
            <a href="#experience" class="hover-minimal text-accent">
              experience
            </a>
            <a href="#aviation" class="hover-minimal text-accent">aviation</a>
            <a href="#contact" class="hover-minimal text-accent">contact</a>
          </div>
        </div>
      </div>
    </nav>

    <main class="mx-auto max-w-4xl px-6 py-16">
      <!-- Hero Section -->
      <section class="animate-slide mb-20">
        <div class="mb-8">
          <h1 class="mb-2 text-4xl font-light text-gray-900">
            Henry Proctor IV
          </h1>
          <p class="text-accent text-xl font-light">
            Sales Leader • Commercial Pilot
          </p>
        </div>

        <div class="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div class="text-center">
            <div class="font-mono text-2xl font-medium text-blue-600">340+</div>
            <div class="text-accent text-sm">flight hours</div>
          </div>
          <div class="text-center">
            <div class="font-mono text-2xl font-medium text-blue-600">$7M</div>
            <div class="text-accent text-sm">monthly revenue</div>
          </div>
          <div class="text-center">
            <div class="font-mono text-2xl font-medium text-blue-600">75%</div>
            <div class="text-accent text-sm">close rate</div>
          </div>
          <div class="text-center">
            <div class="font-mono text-2xl font-medium text-blue-600">10+</div>
            <div class="text-accent text-sm">years exp</div>
          </div>
        </div>

        <p class="max-w-3xl text-lg leading-relaxed text-gray-700">
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
          <section id="experience">
            <h2 class="mb-8 font-mono text-lg font-medium text-gray-900">
              experience
            </h2>
            <div class="space-y-8">
              <div class="section-hover -ml-4 rounded-r-lg p-4">
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
                  <span class="rounded bg-green-50 px-2 py-1 text-green-700">
                    133% growth
                  </span>
                  <span class="rounded bg-blue-50 px-2 py-1 text-blue-700">
                    125+ accounts
                  </span>
                </div>
              </div>

              <div class="section-hover -ml-4 rounded-r-lg p-4">
                <div class="mb-3 flex items-start justify-between">
                  <div>
                    <h3 class="font-medium text-gray-900">
                      Sales Manager & Flexologist
                    </h3>
                    <p class="font-medium text-blue-600">StretchLab</p>
                  </div>
                  <span class="text-accent font-mono text-sm">2023 – 2024</span>
                </div>
                <p class="mb-3 leading-relaxed text-gray-700">
                  Managed $1.2M annual sales across two studios. Led 7-person
                  team and achieved 75% close rate—highest in district.
                </p>
                <div class="flex gap-2 text-xs">
                  <span class="rounded bg-purple-50 px-2 py-1 text-purple-700">
                    district leader
                  </span>
                  <span class="rounded bg-orange-50 px-2 py-1 text-orange-700">
                    $1.2M revenue
                  </span>
                </div>
              </div>

              <div class="section-hover -ml-4 rounded-r-lg p-4">
                <div class="mb-3 flex items-start justify-between">
                  <div>
                    <h3 class="font-medium text-gray-900">
                      Senior Account Manager
                    </h3>
                    <p class="font-medium text-blue-600">
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
                  <span class="rounded bg-yellow-50 px-2 py-1 text-yellow-700">
                    top 3 regional
                  </span>
                  <span class="rounded bg-green-50 px-2 py-1 text-green-700">
                    95% retention
                  </span>
                </div>
              </div>
            </div>
          </section>

          <!-- Current Focus -->
          <section>
            <h2 class="mb-8 font-mono text-lg font-medium text-gray-900">
              aviation interests
            </h2>
            <div class="border-accent rounded-lg border p-6">
              <h3 class="mb-3 font-medium text-gray-900">Drone Photography</h3>
              <p class="leading-relaxed text-gray-700">
                Exploring drone media production for real estate photography and
                events, applying commercial pilot precision to aerial content
                creation.
              </p>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <aside class="space-y-12">
          <!-- Profile Image -->
          <div class="text-center">
            <img
              src="/images/henry-headshot.jpg"
              alt="Henry Proctor IV"
              class="mx-auto h-32 w-32 rounded-full object-cover object-center grayscale transition-all duration-300 hover:grayscale-0"
              style="object-position: center 10%"
            />
          </div>

          <!-- Contact -->
          <section id="contact">
            <h3 class="mb-4 font-mono text-sm font-medium text-gray-900">
              contact
            </h3>
            <div class="space-y-3 text-sm">
              <a
                href="mailto:hproc725@gmail.com"
                class="hover-minimal text-accent block"
              >
                hproc725@gmail.com
              </a>
              <a
                href="tel:216-633-8470"
                class="hover-minimal text-accent block"
              >
                (216) 633-8470
              </a>
              <a href="#" class="hover-minimal text-accent block">
                linkedin.com/in/henry-proctor
              </a>
              <p class="text-accent">san antonio, texas</p>
            </div>
          </section>

          <!-- Aviation -->
          <section id="aviation">
            <h3 class="mb-4 font-mono text-sm font-medium text-gray-900">
              aviation
            </h3>
            <div class="space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-accent">private pilot</span>
                <span class="font-mono text-gray-900">2021</span>
              </div>
              <div class="flex justify-between">
                <span class="text-accent">instrument rating</span>
                <span class="font-mono text-gray-900">2022</span>
              </div>
              <div class="flex justify-between">
                <span class="text-accent">commercial se</span>
                <span class="font-mono text-gray-900">2023</span>
              </div>
              <div class="border-accent mt-4 border-t pt-3">
                <div class="flex justify-between">
                  <span class="font-medium text-gray-900">total hours</span>
                  <span class="font-mono text-blue-600">340+</span>
                </div>
              </div>
            </div>
          </section>

          <!-- Education -->
          <section>
            <h3 class="mb-4 font-mono text-sm font-medium text-gray-900">
              education
            </h3>
            <div class="text-sm">
              <p class="font-medium text-gray-900">B.S. Exercise Science</p>
              <p class="text-accent">Bowling Green State University</p>
              <p class="text-accent font-mono">2016</p>
            </div>
          </section>

          <!-- Philosophy -->
          <section>
            <h3 class="mb-4 font-mono text-sm font-medium text-gray-900">
              philosophy
            </h3>
            <p class="text-accent text-sm leading-relaxed">
              Former athlete with a passion for flight, connection, and
              high-performing teams. Best results come from genuine
              relationships and not taking ourselves too seriously.
            </p>
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

<style scoped>
  .font-mono {
    font-family: 'JetBrains Mono', monospace;
  }
  body {
    font-family: 'Inter', sans-serif;
  }

  /* Smooth page load */
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

  .animate-fade {
    animation: fadeIn 0.8s ease-out;
  }
  .animate-slide {
    animation: slideUp 0.6s ease-out forwards;
  }

  /* Hover states */
  .hover-minimal {
    transition: all 0.2s ease;
  }

  .hover-minimal:hover {
    color: #1d4ed8;
    transform: translateX(2px);
  }

  .section-hover {
    transition: all 0.3s ease;
  }

  .section-hover:hover {
    background-color: #f8fafc;
    border-left: 3px solid #3b82f6;
    padding-left: 1.25rem;
  }

  /* Custom borders */
  .border-accent {
    border-color: #e2e8f0;
  }

  .text-accent {
    color: #64748b;
  }

  /* Grid lines effect */
  .grid-bg {
    background-image:
      linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
    background-size: 20px 20px;
  }

  @keyframes floatArrow {
    0%,
    100% {
      transform: translateY(0px) translateX(0px);
      opacity: 0.4;
    }
    50% {
      transform: translateY(-8px) translateX(15px);
      opacity: 0.8;
    }
  }

  .float-arrow {
    animation: floatArrow 4s ease-in-out infinite;
    clip-path: polygon(
      0% 50%,
      25% 0%,
      25% 35%,
      100% 35%,
      100% 65%,
      25% 65%,
      25% 100%
    );
  }
</style>
