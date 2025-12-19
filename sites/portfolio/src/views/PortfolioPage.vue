<script lang="ts" setup>
  import { ContactLink, PixelDivider, SectionCard } from 'src/components';
</script>

<template>
  <main
    class="mx-auto max-w-screen-lg overflow-y-auto bg-black px-6 py-12 text-white"
  >
    <!-- hidden h1 for SEO/a11y -->
    <h1 class="sr-only">
      Joseph Baranoski — Software Engineer & Creative Technologist
    </h1>
    <!-- ABOUT -->
    <section class="space-y-4">
      <h2 class="text-cyber-teal font-cyber text-2xl">About Me</h2>
      <p class="text-gray-300">
        I’m a frontend engineer and creative technologist with a decade of
        experience designing and scaling expressive, high-performance web
        systems. I bridge design and engineering—equally comfortable shaping a
        product from first commit or stabilizing and clarifying complex,
        inherited codebases.
      </p>
      <p class="text-gray-300">
        My path runs from Fulbright-funded research in Berlin to leading UI work
        for NFL data tools and fintech products. I’ve shipped across startups
        and enterprise, with a steady focus on craft, autonomy, and honest
        collaboration.
      </p>
    </section>
    <PixelDivider index="a" />
    <!-- CURRENT FOCUS (Consulting) -->
    <section>
      <h2
        class="font-cyber text-cyber-teal mb-8 text-xl uppercase tracking-widest"
      >
        Current Focus — Consulting
      </h2>
      <p class="mb-8 block text-gray-300">
        Recent consulting and contract work focused on frontend architecture,
        performance, and developer experience.
      </p>
      <div class="space-y-3">
        <div class="rounded-md border border-neutral-700 bg-neutral-900 p-4">
          <h3 class="text-cyber-pink text-base font-semibold">
            AAA Club Alliance
          </h3>
          <p class="text-sm text-gray-400">
            Led a technical audit and documentation effort for a vendor-built
            Sitecore XM Cloud + Next.js codebase; established repository and
            Confluence standards; contributed analytics and integration planning
            to stabilize ongoing development.
          </p>
          <a
            href="https://cluballiance.aaa.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-cyber-teal hover:underline"
            tabindex="0"
          >
            Visit Site →
          </a>
        </div>
        <div class="rounded-md border border-neutral-700 bg-neutral-900 p-4">
          <h3 class="text-cyber-pink text-base font-semibold">Make the Play</h3>
          <p class="text-sm text-gray-400">
            Partnered with founders on a Unity-based baseball training platform
            to assess the technical foundation, align design and development
            priorities, and plan the next phase of implementation; supported and
            accelerated the onboarding of a senior Unity engineer.
          </p>
          <a
            href="https://maketheplay.io"
            target="_blank"
            rel="noopener noreferrer"
            class="text-cyber-teal hover:underline"
            tabindex="0"
          >
            Visit Site →
          </a>
        </div>
        <div class="rounded-md border border-neutral-700 bg-neutral-900 p-4">
          <h3 class="text-cyber-pink text-base font-semibold">
            Accent Capital
          </h3>
          <p class="text-sm text-gray-400">
            Built the brand and web presence from the ground up—logo and visual
            system, responsive Vue 3 + Tailwind site, and AWS deployment (Route
            53 / S3 / CloudFront), full ownership from brand to production, with
            a documented, maintainable repo and near-perfect Lighthouse scores.
          </p>
          <a
            href="https://accentcapitalmanagement.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-cyber-teal hover:underline"
            tabindex="0"
          >
            Visit Site →
          </a>
        </div>
      </div>
    </section>
    <PixelDivider index="b" />
    <!-- FEATURED WORK -->
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
            Led the modern frontend for a desktop-class coaching product (Vue 3
            + Electron) with live video, GPT-powered feedback, and interactive
            data views.
          </p>
          <p class="text-xs text-gray-500">
            Tech: Vue 3, Pinia, Tailwind, Electron, WebRTC, Stripe
          </p>
          <a
            href="https://meetbackstage.com"
            target="_blank"
            rel="noopener noreferrer"
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
            Lead frontend engineer on a data tool used by NFL teams; shipped Vue
            features for fast filtering/comparison of thousands of scouting
            signals.
          </p>
          <p class="text-xs text-gray-500">
            Tech: Vue 3, Tailwind, AWS, GitLab CI/CD
          </p>
          <a
            href="https://nfldraft.sportsinfosolutions.com/home"
            target="_blank"
            rel="noopener noreferrer"
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
            Core frontend on the original Barstool Sportsbook launch; focused on
            performance and live-data UX at scale.
          </p>
          <p class="text-xs text-gray-500">
            Tech: Vue 2, Vuex, Socket.IO, Webpack
          </p>
          <a
            href="https://www.onlinebettingsites.com/reviews/barstool/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-cyber-teal hover:underline"
            tabindex="0"
          >
            Archived review →
          </a>
        </div>
      </div>
    </section>
    <PixelDivider index="c" />
    <!-- GAME DEV & TEACHING -->
    <section>
      <h2
        class="font-cyber text-cyber-teal mb-8 text-xl uppercase tracking-widest"
      >
        Game Dev & Teaching
      </h2>
      <p class="mb-8 text-gray-300">
        Web pays the bills; games shaped how I think.
      </p>
      <ul class="list-inside list-disc space-y-2 text-gray-300">
        <SectionCard component="li">
          Taught Unity, Swift, and game design at
          <a
            href="https://www.helloworldcs.org"
            target="_blank"
            rel="noopener noreferrer"
            class="text-cyber-teal hover:underline"
            tabindex="0"
          >
            {{ 'Hello World' }}
          </a>
          (2022).
        </SectionCard>
        <SectionCard component="li">
          Prototype:
          <a
            href="https://github.com/jbrnsk/Upville"
            target="_blank"
            rel="noopener noreferrer"
            class="text-cyber-teal hover:underline"
            tabindex="0"
          >
            {{ 'Upville' }}
          </a>
          —a turn-based Unity tactics game; podcasted the design process.
        </SectionCard>
        <SectionCard component="li">
          <a
            href="https://dl.acm.org/doi/10.1145/2793107.2810272"
            target="_blank"
            rel="noopener noreferrer"
            class="text-cyber-teal hover:underline"
            tabindex="0"
          >
            {{ 'Matsya' }}
          </a>
          —award-winning grad project at ACM SIGGRAPH.
        </SectionCard>
        <SectionCard component="li">
          <span>
            Master’s thesis on digital prototyping tools for board games:
          </span>
          <a
            href="https://researchdiscovery.drexel.edu/esploro/outputs/graduate/Prototype-Gamer-Effects-of-Digital-Prototyping/991014632327104721"
            target="_blank"
            rel="noopener noreferrer"
            class="text-cyber-teal hover:underline"
            tabindex="0"
          >
            {{ 'Prototype Gamer' }}
          </a>
          <span>.</span>
        </SectionCard>
        <SectionCard component="li">
          Accredited playtester (5 published games); founded
          <a
            href="https://www.meetup.com/berlin-board-gamers/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-cyber-teal hover:underline"
            tabindex="0"
          >
            {{ 'Berlin Board Gamers' }}
          </a>
          (~12,000 members).
        </SectionCard>
      </ul>
    </section>

    <PixelDivider index="a" />

    <!-- CONTACT -->
    <section>
      <SectionCard component="div">
        <h2
          class="font-cyber text-cyber-teal mb-4 text-xl uppercase tracking-widest"
        >
          Contact
        </h2>
        <ul class="contact-links space-y-1 text-gray-300">
          <li>
            <ContactLink
              class="mt-0"
              ariaLabel="Email Joseph"
              href="mailto:me@josephbaranoski.com"
            >
              Email
            </ContactLink>
          </li>
          <li>
            <ContactLink
              ariaLabel="GitHub Profile"
              href="https://github.com/jbrnsk"
            >
              GitHub
            </ContactLink>
          </li>
          <li>
            <ContactLink
              ariaLabel="LinkedIn"
              href="https://www.linkedin.com/in/joseph-baranoski-9765a549/"
            >
              LinkedIn
            </ContactLink>
          </li>
          <li>
            <ContactLink
              ariaLabel="Download Résumé"
              href="/docs/JosephBaranoski_Resume.pdf"
              download
            >
              <span class="mr-1">⬇</span>
              Download Résumé
            </ContactLink>
          </li>
        </ul>
      </SectionCard>
    </section>
    <PixelDivider index="a" />
    <!-- HUMAN BIT -->
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
          loading="lazy"
          width="640"
          height="640"
        />
      </div>
    </section>

    <p class="font-cyber text-cyber-blue text-xxs mt-16 text-center">
      © 2025 Joseph Baranoski ·
      <a
        class="underline"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/jbrnsk/me"
      >
        Source Code on GitHub
      </a>
    </p>
  </main>
</template>

<style>
  .human-bit {
    font-style: italic;
    color: #cccccc;
    text-align: center;
    max-width: 60ch;
    margin: 0 auto;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>
