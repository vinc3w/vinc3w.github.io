<script>
  import TextReveal from "$lib/components/text-reveal/TextReveal.svelte";
  import HelloText from "./HelloText.svelte";
  import gsap from "gsap";
  
  import { onMount } from "svelte";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { app } from "$lib/states/app.svelte";

  const delay = (app.loadingTransitionMS / 2 + app.loadingDurationMS) / 1000;

  let hero;
  let headlines = $state([]);
  
  onMount(() => {
    gsap.from(headlines, {
      autoAlpha: 0,
      y: "100%",
      opacity: 0,
      duration: 0.6,
      delay,
    });

    ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });
  });
</script>

<div bind:this={hero} class="hero">
  <div class="start">
    <div class="mask">
      <div bind:this={headlines[0]}>Turning Ideas</div>
    </div>
    <div class="mask">
      <div bind:this={headlines[1]}>Into Reality</div>
    </div>
  </div>
  <div class="end">
    <div class="based">Based in Selangor, Malaysia.</div>
    <div class="scroll-indicator">scroll</div>
  </div>
</div>

<style>
  .hero {
    padding: 32px var(--x-padding) 80px var(--x-padding);
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .start {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 8vw;
    font-family: "FK Screamer", sans-serif;
    text-align: center;
  }

  .mask {
    overflow-y: hidden;
  }

  .mask > div {
    visibility: hidden;
  }

  .end {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (width <= 1050px) {
    .start {
      font-size: 13vw;
    }
  }

  @media (width <= 550px) {
    .hero {
      padding-bottom: 32px;
    }

    .start {
      font-size: 17vw;
    }

    .scroll-indicator {
      visibility: hidden;
    }
  }
</style>
