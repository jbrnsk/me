<script lang="ts" setup>
  import PixelDivider from '@/components/PixelDivider.vue';
</script>

<template>
  <main
    class="mx-auto max-w-screen-lg overflow-y-auto bg-black px-6 py-12 text-white"
  >
    <section class="space-y-4">
      <h2 class="text-cyber-teal font-cyber text-2xl">About Me</h2>
      <p class="text-gray-300">
        I'm a frontend engineer, game designer, and former mathematician with a
        love for expressive, interactive systems. My background spans from
        Fulbright-funded cosmology research in Berlin to building UI
        architectures for NFL data platforms and fintech products.
      </p>
      <p class="text-gray-300">
        I’ve worked with CubeSmart and Comcast, and contributed to several
        early-stage startups — including a year helping develop
        <a
          href="https://www.redbarnrobotics.com"
          target="_blank"
          class="text-cyber-pink hover:underline"
          tabindex="0"
        >
          {{ 'Red Barn Robotics' }}
        </a>
        <span>,</span>
        an autonomous weeding platform now backed by Y Combinator.
      </p>
    </section>
    <PixelDivider index="a" />
    <section>
      <h2
        class="font-cyber text-cyber-teal mb-8 text-xl uppercase tracking-widest"
      >
        Featured Work
      </h2>
      <div class="flex flex-col gap-y-4">
        <div
          class="space-y-2 rounded-md border border-neutral-700 bg-neutral-900 p-4"
        >
          <h3 class="text-cyber-pink text-lg font-semibold">
            Backstage AI Coaching Platform
          </h3>
          <p class="text-sm text-gray-400">
            Architected the modern frontend for a desktop-class AI coaching
            platform, built with Vue 3 + Electron. Integrated 1-on-1 live video
            sessions with ChatGPT-powered feedback and dynamic data
            visualizations.
          </p>
          <p class="text-xs text-gray-500">
            Tech: Vue 3, Pinia, Tailwind, Electron, WebRTC, Stripe
          </p>
          <a
            href="https://meetbackstage.com"
            target="_blank"
            class="text-cyber-teal hover:underline"
            tabindex="0"
          >
            Visit Site →
          </a>
        </div>
        <div
          class="space-y-2 rounded-md border border-neutral-700 bg-neutral-900 p-4"
        >
          <h3 class="text-cyber-pink text-lg font-semibold">
            NFL Draft Scouting Platform
          </h3>
          <p class="text-sm text-gray-400">
            Lead frontend engineer for a fully-featured data tool used by NFL
            teams. Designed UI and shipped Vue-based features for filtering,
            comparing, and analyzing thousands of scouting data points.
          </p>
          <p class="text-xs text-gray-500">
            Tech: Vue 3, Tailwind, AWS, GitLab CI/CD
          </p>
          <a
            href="https://nfldraft.sportsinfosolutions.com/home"
            target="_blank"
            class="text-cyber-teal hover:underline"
            tabindex="0"
          >
            View Site →
          </a>
        </div>
        <div
          class="space-y-2 rounded-md border border-neutral-700 bg-neutral-900 p-4"
        >
          <h3 class="text-cyber-pink text-lg font-semibold">
            ESPN Bet (formerly Barstool Sportsbook)
          </h3>
          <p class="text-sm text-gray-400">
            Core frontend developer on the original launch of Barstool
            Sportsbook. Led performance and data optimizations in a Vue 2
            codebase serving thousands of live users. This
            <a
              href="https://www.onlinebettingsites.com/reviews/barstool/"
              class="text-cyber-teal hover:underline"
              target="_blank"
              tabindex="0"
            >
              {{ 'archived review' }}
            </a>
            shows representative screenshots from that era.
          </p>
          <p class="text-xs text-gray-500">
            Tech: Vue 2, Vuex, Socket.IO, Webpack
          </p>
        </div>
      </div>
    </section>
    <PixelDivider index="b" />
    <section>
      <h2
        class="font-cyber text-cyber-teal mb-8 text-xl uppercase tracking-widest"
      >
        Game Dev & Teaching
      </h2>
      <p class="mb-8 text-gray-300">
        I’ve worked in web most recently, but games are where I started—and
        they’re still at the core of how I think.
      </p>
      <ul class="list-inside list-disc space-y-2 text-gray-300">
        <li class="section-card">
          Taught Unity, Swift, and game design to middle schoolers at
          <a
            href="https://www.helloworldcs.org"
            target="_blank"
            class="text-cyber-teal hover:underline"
            tabindex="0"
          >
            {{ 'Hello World' }}
          </a>
          in Austin (2022)
        </li>
        <li class="section-card">
          Created a game prototype for a turn-based tactical fighting game
          called
          <a
            href="https://github.com/jbrnsk/Upville"
            class="text-cyber-teal hover:underline"
            target="_blank"
            tabindex="0"
          >
            {{ 'Upville' }}
          </a>
          <span>, made in Unity and podcasted with a friend.</span>
        </li>
        <li class="section-card">
          Led a team of grad school classmates to build
          <a
            href="https://dl.acm.org/doi/10.1145/2793107.2810272"
            class="text-cyber-teal hover:underline"
            target="_blank"
            tabindex="0"
          >
            {{ 'Matsya' }}
          </a>
          <span>,</span>
          an award-winning graduate game recognized at ACM SIGGRAPH.
        </li>
        <li class="section-card">
          Published a Master's thesis on digital tools for board game
          prototyping
          <a
            href="https://researchdiscovery.drexel.edu/esploro/outputs/graduate/Prototype-Gamer-Effects-of-Digital-Prototyping/991014632327104721"
            class="text-cyber-teal hover:underline"
            target="_blank"
            tabindex="0"
          >
            {{ 'Prototype Gamer' }}
          </a>
          (Drexel, 2017)
        </li>
        <li class="section-card">
          Accredited playtester in 5 published board games. I also founded the
          <a
            href="https://www.meetup.com/berlin-board-gamers/"
            class="text-cyber-teal hover:underline"
            target="_blank"
            tabindex="0"
          >
            {{ 'Berlin Board Gamers' }}
          </a>
          <span>, a ~12,000 member community still thriving today.</span>
        </li>
      </ul>
    </section>
    <PixelDivider index="c" />
    <section>
      <div class="section-card">
        <h2
          class="font-cyber text-cyber-teal mb-8 text-xl uppercase tracking-widest"
        >
          Contact
        </h2>
        <ul class="contact-links space-y-1 text-gray-300">
          <li>
            <a href="mailto:me@josephbaranoski.com" aria-label="Email Joe">
              Email
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jbrnsk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              tabindex="0"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/joseph-baranoski-9765a549/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkeIn Profile"
              tabindex="0"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              class="text-cyber-green mt-4 flex items-center hover:underline"
              href="/docs/JosephBaranoski_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              tabindex="0"
            >
              <span class="-mr-1">⬇</span>
              Download Résumé
            </a>
          </li>
        </ul>
      </div>
    </section>
    <PixelDivider index="a" />
    <section class="human-bit">
      <h2
        class="font-cyber text-cyber-teal mb-8 text-xl uppercase tracking-widest"
      >
        The Human Bit
      </h2>
      <p class="text-gray-300">
        I live in Austin, Texas with my wife Adriana. We play games, build
        things, and try not to take any of it too seriously.
      </p>
      <div class="mx-auto mt-6 flex max-w-prose justify-center">
        <img
          src="/images/joe-and-adri.jpeg"
          alt="Joe and Adri"
          class="mt-4 max-w-sm rounded-xl shadow-md"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
  .section-card {
    background-color: rgba(255, 255, 255, 0.03);
    border-radius: 8px;
    color: #cccccc;
    margin-bottom: 0.75rem;
    padding: 0.75rem;
    @apply border border-neutral-700 bg-neutral-900;
  }

  .human-bit {
    font-style: italic;
    color: #cccccc;
    text-align: center;
    max-width: 60ch;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
  .contact-links a {
    display: block;
    margin: 0.5rem 0;
    font-family: 'Courier New', monospace;
    text-decoration: none;
    @apply text-cyber-pink;
  }

  .contact-links a:hover {
    text-decoration: underline;
  }
</style>
