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
  <div class="text primary">
    <TextReveal duration={0.6} stagger={0.02}>
      My name is Vincent Har and I am a Software Engineer based in Selangor, Malaysia.
    </TextReveal>
  </div>
  <div class="text secondary">
    <TextReveal duration={0.6} stagger={0.02}>
      I am passionate about blending design and code to create clean, functional, and engaging digital experiences.
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
    border-top-left-radius: var(--section-border-radius);
    border-top-right-radius: var(--section-border-radius);
    position: relative;
    z-index: 100;
  }

  .text.primary {
    grid-column: 2 / span 7;
    font-size: 48px;
  }

  .text.secondary {
    grid-column: 7 / span 4;
    font-size: 24px;
    margin-top: 128px;
  }

  .button-link-container {
    grid-column: 7 / span 6;
    margin-top: 48px;
  }

  @media (width <= 1450px) {
    .text.primary {
      grid-column: 1 / span 8;
    }

    .text.secondary {
      grid-column: 7 / span 5;
    }
  }

  @media (width <= 1250px) {
    .text.primary {
      grid-column: span 12;
    }

    .text.secondary {
      grid-column: 7 / span 6;
    }
  }

  @media (width <= 900px) {
    .text.secondary {
      grid-column: 5 / span 8;
    }

    .button-link-container {
      grid-column: 5 / span 8;
    }
  }

  @media (width <= 800px) {
    .text.primary {
      font-size: 32px;
    }

    .text.secondary {
      margin-top: 80px;
    }
  }

  @media (width <= 700px) {
    .about {
      display: flex;
      flex-direction: column;
    }
  }
</style>
