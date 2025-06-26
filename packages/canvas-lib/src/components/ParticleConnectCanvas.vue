<script lang="ts" setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  const countParticles = ref(null);
  let stats = null;
  let animationId = null;

  const particlesConfig = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  const initializeParticles = () => {
    // Initialize particles.js
    particlesJS('particles-js', particlesConfig);

    // Initialize Stats
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);

    // Start the update loop
    update();
  };

  const update = () => {
    stats.begin();
    stats.end();

    if (
      window.pJSDom &&
      window.pJSDom[0] &&
      window.pJSDom[0].pJS.particles &&
      window.pJSDom[0].pJS.particles.array
    ) {
      countParticles.value.innerText =
        window.pJSDom[0].pJS.particles.array.length;
    }

    animationId = requestAnimationFrame(update);
  };

  const cleanup = () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    if (stats && stats.domElement && stats.domElement.parentNode) {
      stats.domElement.parentNode.removeChild(stats.domElement);
    }
  };

  onMounted(() => {
    initializeParticles();
  });

  onUnmounted(() => {
    cleanup();
  });
</script>

<template>
  <div id="particles-js"></div>
  <!-- stats - count particles -->
  <div class="count-particles">
    <span class="js-count-particles">--</span>
    particles
  </div>
</template>

<style></style>
