<script lang="ts" setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  // Template refs
  const countParticles = ref<HTMLElement | null>(null);

  // Variables
  let stats: any = null;
  let animationId: number | null = null;

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

  // Load stats.js only (since particles.js is now in index.html)

  const initializeParticles = async () => {
    try {
      // Initialize particles.js (should be immediately available)
      (window as any).particlesJS('particles-js', particlesConfig);

      // Initialize Stats
      stats = new (window as any).Stats();
      stats.setMode(0);
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.left = '0px';
      stats.domElement.style.top = '0px';
      document.body.appendChild(stats.domElement);

      // Start the update loop
      update();
    } catch (error) {
      console.error('Failed to load stats.js:', error);
    }
  };

  const update = () => {
    if (stats) {
      stats.begin();
      stats.end();
    }

    if (
      (window as any).pJSDom &&
      (window as any).pJSDom[0] &&
      (window as any).pJSDom[0].pJS.particles &&
      (window as any).pJSDom[0].pJS.particles.array &&
      countParticles.value
    ) {
      countParticles.value.innerText = (
        window as any
      ).pJSDom[0].pJS.particles.array.length.toString();
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
    // Clean up particles
    if ((window as any).pJSDom && (window as any).pJSDom[0]) {
      (window as any).pJSDom[0].pJS.fn.vendors.destroypJS();
      (window as any).pJSDom = [];
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
  <div class="particles-container">
    <div id="particles-js"></div>
  </div>
</template>

<style scoped>
  .particles-container {
    position: fixed;
    width: 100%;
    height: 100vh;
  }

  /* ---- particles.js container ---- */
  #particles-js {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2f5d4e;
    background-image: url('');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

  /* ---- stats.js ---- */
  .count-particles {
    background: #000022;
    position: absolute;
    top: 48px;
    left: 0;
    width: 80px;
    color: #13e8e9;
    font-size: 0.8em;
    text-align: left;
    text-indent: 4px;
    line-height: 14px;
    padding-bottom: 2px;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
    border-radius: 0 0 3px 3px;
    -webkit-user-select: none;
    margin-top: 5px;
    margin-left: 5px;
  }

  .js-count-particles {
    font-size: 1.1em;
  }
</style>

<style>
  /* Global styles */
  body {
    margin: 0;
    font:
      normal 75% Arial,
      Helvetica,
      sans-serif;
  }

  canvas {
    display: block;
    vertical-align: bottom;
  }

  #stats {
    border-radius: 3px 3px 0 0 !important;
    overflow: hidden !important;
    -webkit-user-select: none !important;
    margin-top: 5px !important;
    margin-left: 5px !important;
  }
</style>
