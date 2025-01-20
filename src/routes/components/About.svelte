<script>;
  import gsap from "gsap";
  import ArrowLink from "$lib/components/Link/ArrowLink.svelte";
  import about from "$lib/data/about"
  import { cursorElement } from "$lib/contants/cursor";
  import { ABOUT } from "$lib/contants/routes";
  import { onMount } from "svelte";

  let container;

  onMount(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "restart reverse restart reverse",
        start: "top bottom",
        end: "bottom top",
      },
    })
    .from(container, {
      yPercent: 10,
      opacity: 0,
      duration: 0.5,
      delay: 0.3,
    }, 0);
  });
</script>

<div class="about">
  <div class="wrapper grid" bind:this={container}>
    <div class="greeting">Hello</div>
    <div class="text">{about.shortAbout}</div>
    <div class="button-container">
      <ArrowLink href={ABOUT} />
    </div>
  </div>
</div>

<style>
  .about {
    display: grid;
    place-items: center;
    padding: 16rem 2rem;
  }

  .greeting {
    font-size: 8rem;
    font-weight: bold;
    grid-column: 2 / 4;
  }

  .text {
    grid-column: 2 / 4;
    overflow: hidden;
  }

  .button-container {
    grid-column: 3 / 4;
    display: flex;
    justify-content: flex-end;
    margin-top: 4rem;
  }

  @media (width <= 40rem) {
    .greeting {
      font-size: 5rem;
      grid-column: 1 / 5;
    }

    .text {
      grid-column: 1 / 5;
    }
  }
</style>
