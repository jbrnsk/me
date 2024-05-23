<script lang="ts" setup>
  import { CrazyAnimation } from '@canvas-lib';
</script>

<template>
  <div class="flex h-full items-center justify-center">
    <span
      class="shimmer font-cyber text-cyber-pink text-shadow absolute z-10 text-5xl"
    >
      Cyberbowl 3090
    </span>
    <CrazyAnimation class="pointer-events-none absolute" />
  </div>
</template>

<style scoped>
  .shimmer {
    padding-right: 140px;
    margin-right: -140px;
    text-shadow:
      1px 1px 0 theme('colors.cyber.blue'),
      4px 4px 0 white,
      4px 4px 0.2em theme('colors.cyber.pink');
  }

  .shimmer {
    color: rgba(255, 255, 255, 0.1);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#222),
      to(#222),
      color-stop(0.5, #fff)
    );
    background: -moz-gradient(
      linear,
      left top,
      right top,
      from(#222),
      to(#222),
      color-stop(0.5, #fff)
    );
    background: gradient(
      linear,
      left top,
      right top,
      from(#222),
      to(#222),
      color-stop(0.5, #fff)
    );
    -webkit-background-size: 125px 100%;
    -moz-background-size: 125px 100%;
    background-size: 125px 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-animation-name: shimmer;
    -moz-animation-name: shimmer;
    animation-name: shimmer;
    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-color: #222;
  }

  @-moz-keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }

  @-webkit-keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }

  @-o-keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }
</style>
