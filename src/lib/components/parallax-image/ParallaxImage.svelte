<script>
  import gsap from "gsap";
  import { onMount } from "svelte";

  let { src, alt, aspectRatio, offset=128 } = $props();

  let container;
  let img;

  onMount(() => {
    gsap.to(img, {
      y: offset,
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
</script>

<div
  bind:this={container}
  class="parallax-image"
  style:--offset={offset + "px"}
  style:aspect-ratio={aspectRatio}
>
  {#if !aspectRatio}
    <img {src} {alt} class="filler">
  {/if}
  <img bind:this={img} {src} {alt} class="movable">
</div>

<style>
  .parallax-image {
    overflow: hidden;
    position: relative;
  }

  img.filler {
    height: 100%;
    width: 100%;
  }

  img.movable {
    position: absolute;
    top: -128px;
    left: 0;
    height: calc(100% + var(--offset));
    width: 100%;
    object-fit: cover;
  }
</style>
