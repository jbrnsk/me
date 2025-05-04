<script lang="ts" setup>
  import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';

  interface LineType {
    x: number;
    y: number;
    addedX: number;
    addedY: number;
    rad: number;
    lightInputMultiplier: number;
    color: string;
    cumulativeTime: number;
    time: number;
    targetTime: number;
    reset: () => void;
    beginPhase: () => void;
    step: () => void;
  }
  class Line implements LineType {
    x = 0;
    y = 0;
    addedX = 0;
    addedY = 0;
    rad = 0;
    lightInputMultiplier = 0;
    color = '';
    cumulativeTime = 0;
    time = 0;
    targetTime = 0;

    constructor() {
      this.reset();
    }

    reset() {
      this.x = 0;
      this.y = 0;
      this.addedX = 0;
      this.addedY = 0;
      this.rad = 0;
      this.lightInputMultiplier =
        opts.baseLightInputMultiplier +
        opts.addedLightInputMultiplier * Math.random();
      this.color = opts.color.replace(
        'hue',
        (tick.value * opts.hueChange).toString(),
      );
      this.cumulativeTime = 0;
      this.beginPhase();
    }
    beginPhase() {
      this.x += this.addedX;
      this.y += this.addedY;

      this.time = 0;
      this.targetTime = (opts.baseTime + opts.addedTime * Math.random()) | 0;

      this.rad += baseRad.value * (Math.random() < 0.5 ? 1 : -1);
      this.addedX = Math.cos(this.rad);
      this.addedY = Math.sin(this.rad);

      if (
        Math.random() < opts.dieChance ||
        this.x > dieX.value ||
        this.x < -dieX.value ||
        this.y > dieY.value ||
        this.y < -dieY.value
      )
        this.reset();
    }
    step() {
      ++this.time;
      ++this.cumulativeTime;

      if (this.time >= this.targetTime) this.beginPhase();

      var prop = this.time / this.targetTime,
        wave = Math.sin((prop * Math.PI) / 2),
        x = this.addedX * wave,
        y = this.addedY * wave;

      ctx.value.shadowBlur = prop * opts.shadowToTimePropMult;
      ctx.value.fillStyle = ctx.value.shadowColor = this.color.replace(
        'light',
        (
          opts.baseLight +
          opts.addedLight *
            Math.sin(this.cumulativeTime * this.lightInputMultiplier)
        ).toString(),
      );
      ctx.value.fillRect(
        opts.cx + (this.x + x) * opts.len,
        opts.cy + (this.y + y) * opts.len,
        2,
        2,
      );

      if (Math.random() < opts.sparkChance)
        ctx.value.fillRect(
          opts.cx +
            (this.x + x) * opts.len +
            Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
            opts.sparkSize / 2,
          opts.cy +
            (this.y + y) * opts.len +
            Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) -
            opts.sparkSize / 2,
          opts.sparkSize,
          opts.sparkSize,
        );
    }
  }

  const animationFrameId = ref<null | number>(null);
  const resizeListener = ref<null | (() => void)>(null);
  const props = withDefaults(
    defineProps<{
      canvasWidth?: number;
      canvasHeight?: number;
      sparkChance?: number;
    }>(),
    {
      canvasWidth: window.innerWidth,
      canvasHeight: window.innerHeight,
      sparkChance: 0.02,
    },
  );

  const c = ref();
  const ctx = ref();
  const w = ref();
  const h = ref();
  const tick = ref(0);
  const lines = ref<LineType[]>([]);
  const dieX = ref();
  const dieY = ref();
  const baseRad = ref();
  const opts = reactive({
    len: 50,
    count: 50,
    baseTime: 12,
    addedTime: 12,
    dieChance: 0.05,
    spawnChance: 1,
    sparkChance: props.sparkChance,
    sparkDist: 10,
    sparkSize: 3,
    color: 'hsl(hue,100%,light%)',
    baseLight: 50,
    addedLight: 10,
    shadowToTimePropMult: 1,
    baseLightInputMultiplier: 0.01,
    addedLightInputMultiplier: 0.02,
    cx: 0,
    cy: 0,
    repaintAlpha: 0.04,
    hueChange: 0.3,
  });

  function loop() {
    animationFrameId.value = window.requestAnimationFrame(loop);
    ++tick.value;

    ctx.value.globalCompositeOperation = 'source-over';
    ctx.value.shadowBlur = 0;
    ctx.value.fillStyle = 'rgba(0,0,0,alp)'.replace(
      'alp',
      opts.repaintAlpha?.toString(),
    );
    ctx.value.fillRect(0, 0, w, h);
    ctx.value.globalCompositeOperation = 'lighter';

    if (lines.value.length < opts.count && Math.random() < opts.spawnChance)
      lines.value.push(new Line());

    lines.value.map(function (line) {
      line.step();
    });
  }
  function handleResize() {
    w.value = c.value.width = window.innerWidth;
    h.value = c.value.height = window.innerHeight;
    ctx.value.fillStyle = 'black';
    ctx.value.fillRect(0, 0, w, h);

    opts.cx = w.value / 2;
    opts.cy = h.value / 2;

    dieX.value = w.value / 2 / opts.len;
    dieY.value = h.value / 2 / opts.len;
  }

  onMounted(() => {
    ctx.value = c.value.getContext('2d');
    w.value = c.value.width = props.canvasWidth;
    h.value = c.value.height = props.canvasHeight;
    ctx.value.fillStyle = 'black';
    ctx.value.fillRect(0, 0, w, h);

    opts.cx = w.value / 2;
    opts.cy = h.value / 2;

    dieX.value = w.value / 2 / opts.len;
    dieY.value = h.value / 2 / opts.len;
    baseRad.value = (Math.PI * 2) / 4;

    loop();

    window.addEventListener('resize', handleResize);
    resizeListener.value = handleResize;
  });

  onBeforeUnmount(() => {
    if (animationFrameId.value) {
      window.cancelAnimationFrame(animationFrameId.value);
      animationFrameId.value = null;
    }

    if (resizeListener.value) {
      window.removeEventListener('resize', resizeListener.value);
      resizeListener.value = null;
    }
    lines.value = [];
    ctx.value = null;
  });
</script>

<template>
  <canvas id="c" ref="c"></canvas>
</template>
