<script lang="ts" setup>
import {onMounted,reactive, ref} from 'vue'

const c = ref()
const ctx = ref();
const w =ref();
const h = ref();
const tick = ref(0);
const lines = ref([])
const dieX = ref();
const dieY = ref();
const baseRad = ref();

const opts = ref();

function loop() {
  window.requestAnimationFrame( loop );
  ++tick.value;

  ctx.value.globalCompositeOperation = 'source-over';
  ctx.value.shadowBlur = 0;
  ctx.value.fillStyle = 'rgba(0,0,0,alp)'.replace( 'alp', opts.value.repaintAlpha );
  ctx.value.fillRect( 0, 0, w, h );
  ctx.value.globalCompositeOperation = 'lighter';

  if( lines.value.length < opts.value.count && Math.random() < opts.value.spawnChance )
    lines.value.push( new Line );

  lines.value.map( function( line ){ line.step(); } );
}

function Line(){
  this.reset();
}

Line.prototype.reset = function(){
  this.x = 0;
  this.y = 0;
  this.addedX = 0;
  this.addedY = 0;
  this.rad = 0;
  this.lightInputMultiplier = opts.value.baseLightInputMultiplier + opts.value.addedLightInputMultiplier * Math.random();
  this.color = opts.value.color.replace( 'hue', tick.value * opts.value.hueChange );
  this.cumulativeTime = 0;
  this.beginPhase();
}

Line.prototype.beginPhase = function(){
  this.x += this.addedX;
  this.y += this.addedY;

  this.time = 0;
  this.targetTime = ( opts.value.baseTime + opts.value.addedTime * Math.random() ) |0;

  this.rad += baseRad.value * ( Math.random() < .5 ? 1 : -1 );
  this.addedX = Math.cos( this.rad );
  this.addedY = Math.sin( this.rad );

  if( Math.random() < opts.value.dieChance || this.x > dieX.value || this.x < -dieX.value || this.y > dieY.value || this.y < -dieY.value )
    this.reset();
}
Line.prototype.step = function(){
  ++this.time;
  ++this.cumulativeTime;

  if( this.time >= this.targetTime )
    this.beginPhase();

  var prop = this.time / this.targetTime,
      wave = Math.sin( prop * Math.PI / 2  ),
      x = this.addedX * wave,
      y = this.addedY * wave;

  ctx.value.shadowBlur = prop * opts.value.shadowToTimePropMult;
  ctx.value.fillStyle = ctx.value.shadowColor = this.color.replace( 'light', opts.value.baseLight + opts.value.addedLight * Math.sin( this.cumulativeTime * this.lightInputMultiplier ) );
  ctx.value.fillRect( opts.value.cx + ( this.x + x ) * opts.value.len, opts.value.cy + ( this.y + y ) * opts.value.len, 2, 2 );

  if( Math.random() < opts.value.sparkChance )
    ctx.value.fillRect( opts.value.cx + ( this.x + x ) * opts.value.len + Math.random() * opts.value.sparkDist * ( Math.random() < .5 ? 1 : -1 ) - opts.value.sparkSize / 2, opts.value.cy + ( this.y + y ) * opts.value.len + Math.random() * opts.value.sparkDist * ( Math.random() < .5 ? 1 : -1 ) - opts.value.sparkSize / 2, opts.value.sparkSize, opts.value.sparkSize )
}

window.addEventListener( 'resize', function(){
  w.value = c.value.width = window.innerWidth;
  h.value = c.value.height = window.innerHeight;
  ctx.value.fillStyle = 'black';
  ctx.value.fillRect( 0, 0, w, h );

  opts.value.cx = w.value / 2;
  opts.value.cy = h.value / 2;

  dieX.value = w.value / 2 / opts.value.len;
  dieY.value = h.value / 2 / opts.value.len;
});

onMounted(() => {
  ctx.value = c.value.getContext( '2d' );
  w.value = c.value.width = window.innerWidth;
  h.value = c.value.height = window.innerHeight;
  opts.value = {
    len: 20,
    count: 50,
    baseTime: 10,
    addedTime: 10,
    dieChance: .05,
    spawnChance: 1,
    sparkChance: .1,
    sparkDist: 10,
    sparkSize: 2,
    color: 'hsl(hue,100%,light%)',
    baseLight: 50,
    addedLight: 10, // [50-10,50+10]
    shadowToTimePropMult: 6,
    baseLightInputMultiplier: .01,
    addedLightInputMultiplier: .02,
    cx: w.value / 2,
    cy: h.value / 2,
    repaintAlpha: .04,
    hueChange: .1
  }
  ctx.value.fillStyle = 'black';
  ctx.value.fillRect( 0, 0, w, h );

  dieX.value = w.value / 2 / opts.value.len;
  dieY.value = h.value / 2 / opts.value.len;
  baseRad.value = Math.PI * 2 / 6;

  loop();
})
</script>

<template>
  <canvas id="c" ref="c"></canvas>
</template>