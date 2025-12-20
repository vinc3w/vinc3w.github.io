<script>
  import TextReveal from "$lib/components/text-reveal/TextReveal.svelte";
  import gsap from "gsap";
  
  import { role } from "$lib/data/about";
  import { onMount } from "svelte";

  let bio;

  onMount(() => {
    gsap.to(bio, {
      y: 256,
      scrollTrigger: {
        trigger: bio,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });
</script>

<div class="bio-container">
  <div bind:this={bio} class="bio grid-layout">
    <div class="text">
      <TextReveal duration={0.6} stagger={0.02}>
        My name is Vincent Har and I am a {role} based in Selangor, Malaysia.
      </TextReveal>
    </div>
  </div>
</div>

<style>
  .bio-container {
    background-color: #4a4c4b;
  }

  .bio {
    padding: 256px var(--x-padding) 384px var(--x-padding);
    background-color: var(--white);
    color: var(--black);
    border-top-left-radius: var(--section-border-radius);
    border-top-right-radius: var(--section-border-radius);
    position: relative;
    z-index: 100;
  }

  .text {
    grid-column: 3 / span 6;
    font-size: 48px;
  }

  @media (width <= 1700px) {
    .text {
    grid-column: 2 / span 7;
    }
  }

  @media (width <= 1450px) {
    .text {
      grid-column: 2 / span 7;
    }
  }

  @media (width <= 1250px) {
    .text {
      grid-column: span 12;
    }
  }

  @media (width <= 800px) {
    .text {
      font-size: 32px;
    }
  }

  @media (width <= 500px) {
    .bio {
      display: flex;
      flex-direction: column;
    }
  }
</style>

