<script>
  import ButtonLink from "$lib/components/button-link/ButtonLink.svelte";
  import TextReveal from "../text-reveal/TextReveal.svelte";
  
  import { EMAIL_LINK } from "$lib/data/links";
  import { onMount } from "svelte";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  let cta;

  onMount(() => {
    ScrollTrigger.create({
      trigger: cta,
      start: "top top",
      end: "+=50%",
      pin: true,
    });
  });
</script>

<div bind:this={cta} class="cta">
  <div class="text-container grid-layout">
    <div class="text">
      <TextReveal duration={0.6} stagger={0.02}>
        I would love to connect about opportunities where my skills in design and development can make an impact.
      </TextReveal>
    </div>
  </div>
  <div class="button-link-container">
    <ButtonLink href={EMAIL_LINK} target="_blank">Contact</ButtonLink>
  </div>
</div>

<style>
  .cta {
    min-height: 100vh;
    background-color: var(--white);
    padding: 256px var(--x-padding);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    z-index: 100;
  }

  .text {
    grid-column: span 5;
    font-size: 24px;
  }

  .button-link-container {
    margin-top: 32px;
  }

  @media (width <= 1000px) {
    .text {
      grid-column: span 6;
    }
  }

  @media (width <= 750px) {
    .text {
      grid-column: span 8;
    }
  }

  @media (width <= 550px) {
    .text {
      grid-column: span 12;
    }
  }
</style>
