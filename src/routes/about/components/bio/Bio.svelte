<script>
  import TextReveal from "$lib/components/text-reveal/TextReveal.svelte";
  import gsap from "gsap";
  
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

<div bind:this={bio} class="bio grid-layout">
  <div class="text primary">
    <TextReveal duration={0.6} stagger={0.02}>
      I am driven by a passion for creating digital products that feel both purposeful and engaging.
    </TextReveal>
  </div>
  <div class="text secondary">
    <TextReveal duration={0.6} stagger={0.02}>
      A perfectionist at heart, I enjoy refining details until they feel just right, while keeping the bigger picture in focus.
    </TextReveal>
  </div>
</div>

<style>
  .bio {
    padding: 256px var(--x-padding) 384px var(--x-padding);
    background-color: var(--black);
    color: var(--white);
    border-top-left-radius: var(--section-border-radius);
    border-top-right-radius: var(--section-border-radius);
    position: relative;
    z-index: 100;
  }

  .text.primary {
    grid-column: 3 / span 6;
    font-size: 48px;
  }

  .text.secondary {
    grid-column: 7 / span 4;
    font-size: 24px;
    margin-top: 128px;
  }

  @media (width <= 1700px) {
    .text.primary {
    grid-column: 2 / span 7;
    }
  }

  @media (width <= 1450px) {
    .text.primary {
      grid-column: 2 / span 7;
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
  }

  @media (width <= 800px) {
    .text.primary {
      font-size: 32px;
    }

    .text.secondary {
      margin-top: 80px;
    }
  }

  @media (width <= 600px) {
    .text.secondary {
      grid-column: 3 / span 10;
    }
  }

  @media (width <= 500px) {
    .bio {
      display: flex;
      flex-direction: column;
    }
  }
</style>
