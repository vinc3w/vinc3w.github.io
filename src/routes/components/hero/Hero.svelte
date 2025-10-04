<script>
  import MarqueeTitle from "$lib/components/marquee-title/MarqueeTitle.svelte";
  import WebDeveloperTitle from "./WebDeveloperTitle.svelte";
  import gsap from "gsap";
  
  import { onMount } from "svelte";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  let hero;
  
  onMount(() => {
    ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });
  });
</script>

<div bind:this={hero} class="hero">
  <div class="based">
    Based in <br />
    Selangor, Malaysia.
  </div>
  <MarqueeTitle largeDeviceWidth={150}>
    <WebDeveloperTitle />
  </MarqueeTitle>
</div>

<style>
  .hero {
    padding: 32px var(--x-padding) 80px var(--x-padding);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 128px;
  }

  .based {
    font-size: 24px;
  }

  @media (width <= 550px) {
    .hero {
      padding-bottom: 32px;
    }
  }
</style>
