<script>
  import TextReveal from "$lib/components/text-reveal/TextReveal.svelte";
  import gsap from "gsap";

  import { role } from "$lib/data/about";
  import { onMount } from "svelte";

  let intro;

  onMount(() => {
    gsap.to(intro, {
      y: 256,
      scrollTrigger: {
        trigger: intro,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });
</script>

<div class="border"></div>
<div bind:this={intro} class="intro">
  <TextReveal duration={0.6} stagger={0.02}>
    My name is Vincent Har and I am a {role} based in Selangor, Malaysia.
  </TextReveal>
</div>

<style>
  .border {
    position: relative;
    z-index: 100;
    border-top-left-radius: var(--section-border-radius);
    border-top-right-radius: var(--section-border-radius);
    background-color: var(--white);
    height: var(--section-border-radius);
  }

  .intro {
    font-size: 80px;
    text-transform: uppercase;
    padding: 256px var(--x-padding);
    background-color: var(--white);
    position: relative;
    z-index: 100;
  }

  @media (width <= 1000px) {
    .intro {
      font-size: 48px;
    }
  }

  @media (width <= 600px) {
    .intro {
      font-size: 32px;
    }
  }
</style>
