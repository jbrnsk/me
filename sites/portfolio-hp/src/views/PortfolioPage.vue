<script lang="ts" setup>
  import { ContactLink, PixelDivider, SectionCard } from 'src/components';
</script>

<template>
  <main
    class="animate-fade-in mx-auto max-w-screen-lg bg-white px-6 py-12 font-sans text-gray-900"
  >
    <!-- Top layout: 2-column -->
    <section class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
      <!-- Sidebar -->
      <aside class="animate-swoop-in-left space-y-6 text-sm md:col-span-1">
        <img
          src="/images/henry-headshot.jpg"
          alt="Henry Proctor IV"
          class="w-full rounded-lg object-cover shadow-md"
        />
        <div>
          <h1 class="text-xl font-bold">Henry Proctor IV</h1>
          <p class="font-medium text-indigo-600">
            Customer Success Lead & Pilot
          </p>
        </div>
        <div class="space-y-1">
          <h2 class="text-sm font-semibold text-gray-700">Contact</h2>
          <ContactLink ariaLabel="Email Henry" href="mailto:hproc725@gmail.com">
            Email
          </ContactLink>
          <ContactLink
            ariaLabel="GitHub Profile"
            href="https://github.com/henry-placeholder"
          >
            GitHub
          </ContactLink>
          <ContactLink
            ariaLabel="LinkedIn"
            href="https://linkedin.com/in/henry-placeholder"
          >
            LinkedIn
          </ContactLink>
        </div>
        <div class="mt-6 italic text-gray-600">
          <h2 class="mb-2 text-sm font-semibold text-gray-700">
            The Human Bit
          </h2>
          <p>
            I’m a certified pilot and former athlete with a deep love for
            flight, connection, and high-performing teams. I try not to take any
            of it too seriously.
          </p>
        </div>
      </aside>

      <!-- Main Content -->
      <div class="animate-swoop-in-right space-y-12 md:col-span-2">
        <section>
          <h2 class="mb-4 text-lg font-bold text-indigo-600">About Me</h2>
          <p class="text-gray-700">
            I’m a relationship-first sales leader with over a decade of
            experience in Fintech, Automotive, and Wellness sectors. I’ve led
            high-performing teams, launched studios, and helped grow territories
            from $3M to $7M+ in just months.
          </p>
          <p class="mt-4 text-gray-700">
            I’m also a certified commercial pilot with over 340 hours logged in
            the cockpit. I’m currently exploring drone media production for real
            estate and events.
          </p>
        </section>

        <PixelDivider index="a" />

        <section>
          <h2 class="mb-4 text-lg font-bold text-indigo-600">Experience</h2>
          <div class="space-y-4">
            <SectionCard component="div">
              <h3 class="font-semibold text-gray-800">
                PorchPass – Senior Customer Success Manager
              </h3>
              <p class="text-sm text-gray-600">Dec 2024 – Present</p>
              <p class="mt-1 text-sm text-gray-700">
                Drove loan volume from $3M to $7M/mo in 90 days. Managed 125+
                dealership accounts across Texas and Oklahoma, owning outreach,
                onboarding, and activation.
              </p>
            </SectionCard>
            <SectionCard component="div">
              <h3 class="font-semibold text-gray-800">
                StretchLab – Sales Manager & Flexologist
              </h3>
              <p class="text-sm text-gray-600">Sep 2023 – Dec 2024</p>
              <p class="mt-1 text-sm text-gray-700">
                Oversaw $1.2M in sales, led 7-person team, and hit 75% close
                rate—the highest in the district.
              </p>
            </SectionCard>
            <SectionCard component="div">
              <h3 class="font-semibold text-gray-800">
                Otis Elevator Co – Senior Account Manager
              </h3>
              <p class="text-sm text-gray-600">2016 – 2020</p>
              <p class="mt-1 text-sm text-gray-700">
                Top 3 in Midwest region. Managed 633 elevators, sold $4.3M in
                upgrades, and maintained 95% customer retention.
              </p>
            </SectionCard>
          </div>
        </section>

        <PixelDivider index="b" />

        <section>
          <h2 class="mb-4 text-lg font-bold text-indigo-600">
            Flight & Future
          </h2>
          <p class="text-gray-700">
            I hold a Commercial Single-Engine license with Instrument Rating and
            over 340 hours of flight time.
          </p>
          <p class="mt-2 text-gray-700">
            I’m currently building a drone services business, specializing in
            real estate photography, video production, and aerial content.
          </p>
        </section>
      </div>
    </section>

    <p class="mt-12 text-center text-xs text-gray-400">
      © 2025 Henry Proctor IV · Built by Joseph Baranoski
    </p>
  </main>
</template>

<style scoped>
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes swoop-in-left {
    0% {
      transform: translateX(-40px) skewX(-10deg);
      opacity: 0;
    }
    100% {
      transform: translateX(0) skewX(0deg);
      opacity: 1;
    }
  }

  @keyframes swoop-in-right {
    0% {
      transform: translateX(40px) skewX(10deg);
      opacity: 0;
    }
    100% {
      transform: translateX(0) skewX(0deg);
      opacity: 1;
    }
  }

  .animate-fade-in {
    animation: fade-in 0.6s ease-out forwards;
  }

  .animate-swoop-in-left {
    animation: swoop-in-left 0.8s ease-out forwards;
  }

  .animate-swoop-in-right {
    animation: swoop-in-right 0.8s ease-out forwards;
  }
</style>
