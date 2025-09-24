<script>
  import ButtonLink from "$lib/components/button-link/ButtonLink.svelte";
  import TextReveal from "$lib/components/text-reveal/TextReveal.svelte";
  import gsap from "gsap";

  import { ABOUT_ROUTE } from "$lib/data/routes";
  import { onMount } from "svelte";

  let about;

  onMount(() => {
    gsap.to(about, {
      y: 256,
      scrollTrigger: {
        trigger: about,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });
</script>

<div bind:this={about} class="about grid-layout">
  <div class="text">
    <TextReveal duration={0.6} stagger={0.02}>
      I am a Software Engineer passionate about blending design and code to create clean, functional, and engaging digital experiences.
    </TextReveal>
  </div>
  <div class="button-link-container">
    <ButtonLink href={ABOUT_ROUTE} backgroundColor="overlay-light">See More</ButtonLink>
  </div>
</div>

<style>
  .about {
    padding: 256px var(--x-padding) 384px var(--x-padding);
    background-color: var(--black);
    color: var(--white);
    row-gap: 64px;
    border-top-left-radius: var(--section-border-radius);
    border-top-right-radius: var(--section-border-radius);
    position: relative;
    z-index: 100;
  }

  .text {
    grid-column: span 5;
    font-size: 24px;
  }

  .button-link-container {
    grid-column: span 12;
  }

  @media (width <= 1000px) {
    .text {
      grid-column: span 6;
    }
  }

  @media (width <= 750px) {
    .text {
      grid-column: span 10;
    }
  }

  @media (width <= 550px) {
    .text {
      grid-column: span 12;
    }
  }
</style>
