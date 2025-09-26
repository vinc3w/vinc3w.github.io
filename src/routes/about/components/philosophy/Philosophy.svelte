<script>
  import MarqueeTitle from "$lib/components/marquee-title/MarqueeTitle.svelte";
  import TextReveal from "$lib/components/text-reveal/TextReveal.svelte";
  import MoreThanCodeTitle from "./MoreThanCodeTitle.svelte";
  import gsap from "gsap";

  import { onMount } from "svelte";

  let philosophy;

  onMount(() => {
    gsap.to(philosophy, {
      y: 256,
      scrollTrigger: {
        trigger: philosophy,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });
</script>

<div bind:this={philosophy} class="philosophy">
  <div class="marquee-title-container">
    <MarqueeTitle color="white">
      <MoreThanCodeTitle fill="white" />
    </MarqueeTitle>
  </div>
  <div class="text-container grid-layout">
    <div class="text">
      <TextReveal duration={0.6} stagger={0.02}>
        I see development as a blend of planning, design, and code. Every detail matters, and I aim to craft solutions that are clear, purposeful, and built to last.
      </TextReveal>
    </div>
  </div>
</div>

<style>
  .philosophy {
    background-color: var(--black);
    color: var(--white);
    padding: 256px var(--x-padding) 384px var(--x-padding);
    border-top-left-radius: var(--section-border-radius);
    border-top-right-radius: var(--section-border-radius);
  }

  .marquee-title-container {
    margin-bottom: 160px;
  }

  .text {
    grid-column: 7 / span 5;
    font-size: 24px;
  }

  @media (width <= 850px) {
    .text {
      grid-column: span 12;
    }
  }
</style>
