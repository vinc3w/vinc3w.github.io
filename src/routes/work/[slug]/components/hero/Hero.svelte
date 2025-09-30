<script>
  import ParallaxImage from "$lib/components/parallax-image/ParallaxImage.svelte";
  import TextReveal from "$lib/components/text-reveal/TextReveal.svelte";
  import gsap from "gsap";

  import { app } from "$lib/states/app.svelte";
  import { onMount } from "svelte";

  let { data } = $props();
  let thumbnail = $state();
  let refreshKey = $state(true);

  const delay = (app.loadingTransitionMS / 2) / 1000;

  onMount(() => {
    gsap.to(thumbnail, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
      delay,
    });
  });
</script>

<div class="hero">
  <div class="name-container">
    <div class="name">
      <TextReveal duration={0.8} {delay}>
        {data.name}
      </TextReveal>
    </div>
    <div class="year">
      <TextReveal duration={0.8} {delay}>
        {data.year}
      </TextReveal>
    </div>
  </div>
  <div bind:this={thumbnail} class="thumbnail">
    <ParallaxImage src={data.thumbnail} alt={data.name} aspectRatio="6 / 4" />
  </div>
</div>

<style>
  .hero {
    padding: 256px var(--x-padding) 128px var(--x-padding);
  }

  .name-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 80px;
  }

  .name {
    font-family: "FK Screamer", sans-serif;
    font-size: 80px;
  }

  .year {
    font-weight: bold;
  }

  .thumbnail {
    opacity: 0;
    transform: scale(0.9);
  }

  @media (width <= 600px) {
    .name-container {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
