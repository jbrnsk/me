<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';
  import { SVG } from '@svgdotjs/svg.js';
  import { gsap } from 'gsap';
  import {
    createVoronoiTessellation,
    random,
    randomSnap,
    map,
  } from '@georgedoescode/generative-utils';
  import { createNoise2D } from 'simplex-noise';

  const svgContainer = ref();

  const width = window.innerWidth;
  const height = window.innerHeight;

  const simplex = createNoise2D();
  let numShapes = 6;
  const colors = ['#FFFFFF', '#F8FAFC', '#F1F5F9'];

  let noiseInc = 0.00005;

  class Point {
    constructor(x, y, canvasWidth, canvasHeight) {
      this.x = x;
      this.y = y;
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.xOff = random(0, 10000);
      this.yOff = random(0, 10000);
      this.noiseIncrement = noiseInc;
    }

    update() {
      const x = Math.floor(
        map(simplex(this.xOff, this.xOff), -1, 1, 0, this.canvasWidth),
      );
      const y = Math.floor(
        map(simplex(this.yOff, this.yOff), -1, 1, 0, this.canvasHeight),
      );

      gsap.set(this, { x, y });

      this.xOff += this.noiseIncrement;
      this.yOff += this.noiseIncrement;
    }
  }

  class Layout {
    constructor() {
      this.maxSize = numShapes;

      this.points = [...Array(this.maxSize)].map(() => {
        return new Point(random(0, width), random(0, height), width, height);
      });

      this.cells = [];

      const { cells } = createVoronoiTessellation({
        width,
        height,
        points: this.points,
        relaxIterations: 0,
      });

      for (let i = 0; i < cells.length; i++) {
        this.cells.push({
          x: cells[i].centroid.x,
          y: cells[i].centroid.y,
          rad: cells[i].innerCircleRadius,
        });
      }
    }

    update() {
      let { cells } = createVoronoiTessellation({
        width,
        height,
        points: this.points,
        relaxIterations: 0,
      });

      if (cells.length === this.maxSize) {
        for (let i = 0; i < this.maxSize; i++) {
          gsap.to(this.cells[i], {
            x: cells[i].centroid.x,
            y: cells[i].centroid.y,
            rad: cells[i].innerCircleRadius,
            duration: 0.4,
          });
        }
      }

      for (let index = 0; index < this.points.length; index++) {
        const point = this.points[index];

        point.update();

        for (let i = 0; i < this.points.length; i++) {
          if (
            i !== index &&
            this.points[i].x === point.x &&
            this.points[i].y === point.y
          ) {
            point.x += randomSnap(-100, 100, 100);
            point.y += randomSnap(-100, 100, 100);
            point.xOff += 0.001;
            point.yOff += 0.001;
          }
        }
      }
    }
  }

  let layout;
  let shapes = [];
  let lines;
  let svg;
  let timeline;

  function addShape() {
    shapes.push(svg.circle().fill(random(colors)).opacity(0.2));
  }

  function update() {
    lines.clear();

    for (let i = 0; i < shapes.length; i++) {
      const cell = layout.cells[i];
      const point = layout.points[i];
      const rotation = map(simplex(point.xOff, point.yOff), -1, 1, 0, 360);

      gsap.set(shapes[i].node, {
        x: cell.x,
        y: cell.y,
        attr: {
          r: cell.rad * 0.625,
          width: cell.rad * 0.625,
          height: cell.rad * 0.625,
        },
        overwrite: true,
      });
    }

    layout.update();
  }

  onMounted(() => {
    svg = SVG().addTo(svgContainer.value).viewbox(0, 0, width, height);
    svg.attr('preserveAspectRatio', 'xMidYMid slice');

    layout = new Layout();

    for (let i = 0; i < numShapes; i++) {
      addShape();
    }

    lines = svg.group();

    timeline = gsap.timeline({
      repeat: -1,
      onUpdate() {
        update();
      },
    });
  });

  onUnmounted(() => {
    if (timeline) {
      timeline.kill();
    }
  });
</script>

<template>
  <svg ref="svgContainer" class="fixed inset-0 z-0 h-full w-full"></svg>
</template>

<style>
  svg {
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      #4f8ef8 0%,
      #60a5fa 30%,
      #dbeafe 70%,
      #f8fafc 100%
    );
  }
</style>
