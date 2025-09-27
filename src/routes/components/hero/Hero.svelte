<script>
  import TextReveal from "$lib/components/text-reveal/TextReveal.svelte";
  import HelloText from "./HelloText.svelte";
  import gsap from "gsap";
  
  import { onMount } from "svelte";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { app } from "$lib/states/app.svelte";

  const delay = (app.loadingTransitionMS / 2 + app.loadingDurationMS) / 1000;

  let hero;
  let helloText;
  
  onMount(() => {
    gsap.from(helloText, {
      autoAlpha: 0,
      y: "100%",
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      delay,
    });

    ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      pin: true,
      pinType: "fixed",
      pinSpacing: false,
    });
  });
</script>

<div bind:this={hero} class="hero">
  <div class="start">
    <TextReveal duration={0.4} stagger={0.03} {delay}>
      <div>Transforming Ideas Into</div>
      <div>Digital Products With</div>
      <div>Code And Design</div>
    </TextReveal>
  </div>
  <div class="end grid-layout">
    <div class="hello-text-container">
      <div bind:this={helloText} class="hello-text">
        <HelloText />
      </div>
    </div>
    <div class="scroll-indicator">(scroll)</div>
  </div>
</div>

<style>
  .hero {
    padding: var(--header-height) var(--x-padding) 80px var(--x-padding);
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .start {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 32px;
  }

  .hello-text-container {
    grid-column: span 6;
    overflow-y: hidden;
  }

  .hello-text {
    visibility: hidden;
  }

  .scroll-indicator {
    grid-column: 7 / span 6;
    place-self: end end;
  }

  @media (width <= 1200px) {
    .hero {
      padding-bottom: 32px;
    }

    .end {
      display: initial;
    }

    .end .scroll-indicator {
      display: none;
    }
  }

  @media (width <= 700px) {
    .start {
      font-size: 24px;
    }
  }
</style>
