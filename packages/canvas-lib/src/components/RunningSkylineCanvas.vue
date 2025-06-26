<template>
  <div class="cityscape-container fixed">
    <canvas
      ref="canvas"
      @mousemove="onMouseMove"
      :width="canvasWidth"
      :height="canvasHeight"
    ></canvas>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  const canvas = ref(null);
  const canvasWidth = ref(800);
  const canvasHeight = ref(600);

  let ctx = null;
  let skylines = [];
  let dt = 1;
  let animationId = null;
  let mouse = { x: 0, y: 0 };

  // Building class
  class Building {
    constructor(config) {
      this.reset(config);
    }

    reset(config) {
      this.layer = config.layer;
      this.x = config.x;
      this.y = config.y;
      this.width = config.width;
      this.height = config.height;
      this.color = config.color;
      this.slantedTop = Math.floor(Math.random() * 10) === 0;
      this.slantedTopHeight = this.width / (Math.random() * 2 + 2);
      this.slantedTopDirection = Math.round(Math.random()) === 0;
      this.spireTop = Math.floor(Math.random() * 15) === 0;
      this.spireTopWidth =
        Math.random() * (this.width * 0.07 - this.width * 0.01) +
        this.width * 0.01;
      this.spireTopHeight = Math.random() * 10 + 10;
      this.antennaTop = !this.spireTop && Math.floor(Math.random() * 10) === 0;
      this.antennaTopWidth = this.layer / 2;
      this.antennaTopHeight = Math.random() * 15 + 5;
    }

    render() {
      ctx.fillStyle = ctx.strokeStyle = this.color;
      ctx.lineWidth = 2;

      // Main building rectangle
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.fill();
      ctx.stroke();

      // Slanted top
      if (this.slantedTop) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.width, this.y);
        if (this.slantedTopDirection) {
          ctx.lineTo(this.x + this.width, this.y - this.slantedTopHeight);
        } else {
          ctx.lineTo(this.x, this.y - this.slantedTopHeight);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }

      // Spire top
      if (this.spireTop) {
        ctx.beginPath();
        ctx.moveTo(this.x + this.width / 2, this.y - this.spireTopHeight);
        ctx.lineTo(this.x + this.width / 2 + this.spireTopWidth, this.y);
        ctx.lineTo(this.x + this.width / 2 - this.spireTopWidth, this.y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }

      // Antenna top
      if (this.antennaTop) {
        ctx.beginPath();
        ctx.moveTo(this.x + this.width / 2, this.y - this.antennaTopHeight);
        ctx.lineTo(this.x + this.width / 2, this.y);
        ctx.lineWidth = this.antennaTopWidth;
        ctx.stroke();
      }
    }
  }

  // Skyline class
  class Skyline {
    constructor(config) {
      this.x = 0;
      this.buildings = [];
      this.layer = config.layer;
      this.width = {
        min: config.width.min,
        max: config.width.max,
      };
      this.height = {
        min: config.height.min,
        max: config.height.max,
      };
      this.speed = config.speed;
      this.color = config.color;
      this.populate();
    }

    populate() {
      let totalWidth = 0;
      while (totalWidth <= canvasWidth.value + this.width.max * 2) {
        const newWidth = Math.round(
          Math.random() * (this.width.max - this.width.min) + this.width.min,
        );
        const newHeight = Math.round(
          Math.random() * (this.height.max - this.height.min) + this.height.min,
        );

        this.buildings.push(
          new Building({
            layer: this.layer,
            x:
              this.buildings.length === 0
                ? 0
                : this.buildings[this.buildings.length - 1].x +
                  this.buildings[this.buildings.length - 1].width,
            y: canvasHeight.value - newHeight,
            width: newWidth,
            height: newHeight,
            color: this.color,
          }),
        );
        totalWidth += newWidth;
      }
    }

    update() {
      this.x -= mouse.x * this.speed * dt;

      const firstBuilding = this.buildings[0];
      if (firstBuilding.width + firstBuilding.x + this.x < 0) {
        const newWidth = Math.round(
          Math.random() * (this.width.max - this.width.min) + this.width.min,
        );
        const newHeight = Math.round(
          Math.random() * (this.height.max - this.height.min) + this.height.min,
        );
        const lastBuilding = this.buildings[this.buildings.length - 1];

        firstBuilding.reset({
          layer: this.layer,
          x: lastBuilding.x + lastBuilding.width,
          y: canvasHeight.value - newHeight,
          width: newWidth,
          height: newHeight,
          color: this.color,
        });

        this.buildings.push(this.buildings.shift());
      }
    }

    render() {
      ctx.save();
      ctx.translate(this.x, ((canvasHeight.value - mouse.y) / 20) * this.layer);

      for (let i = this.buildings.length - 1; i >= 0; i--) {
        this.buildings[i].render();
      }

      ctx.restore();
    }
  }

  const setup = () => {
    // Initialize mouse position
    mouse.x = canvasWidth.value / 10;
    mouse.y = canvasHeight.value;

    // Create skylines
    for (let i = 4; i >= 0; i--) {
      skylines.push(
        new Skyline({
          layer: i + 1,
          width: {
            min: (i + 1) * 30,
            max: (i + 1) * 40,
          },
          height: {
            min: 150 - i * 35,
            max: 300 - i * 35,
          },
          speed: (i + 1) * 0.003,
          color: `hsl(200, ${(i + 1) * 1 + 10}%, ${75 - i * 13}%)`,
        }),
      );
    }
  };

  const clear = () => {
    ctx.clearRect(0, 0, canvasWidth.value, canvasHeight.value);
  };

  const update = () => {
    // Delta time calculation (simplified)
    dt = 1;

    for (let i = skylines.length - 1; i >= 0; i--) {
      skylines[i].update();
    }
  };

  const draw = () => {
    for (let i = skylines.length - 1; i >= 0; i--) {
      skylines[i].render();
    }
  };

  const animate = () => {
    clear();
    update();
    draw();
    animationId = requestAnimationFrame(animate);
  };

  const onMouseMove = (e) => {
    const rect = canvas.value.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  };

  const resizeCanvas = () => {
    canvasWidth.value = window.innerWidth;
    canvasHeight.value = window.innerHeight;

    // Reinitialize skylines with new dimensions
    skylines = [];
    setup();
  };

  onMounted(() => {
    ctx = canvas.value.getContext('2d');

    // Set initial canvas size
    resizeCanvas();

    setup();
    animate();

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
  });

  onUnmounted(() => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    window.removeEventListener('resize', resizeCanvas);
  });
</script>

<style scoped>
  .cityscape-container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(to bottom, #87ceeb 0%, #98d8e8 100%);
  }

  canvas {
    display: block;
    cursor: crosshair;
  }
</style>
