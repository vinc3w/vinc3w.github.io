<script>
  import ButtonLink from "$lib/components/button-link/ButtonLink.svelte";
  import HighlightsText from "./HighlightsText.svelte";
  import HorizontalScrollTitle from "$lib/components/horizontal-scroll-title/HorizontalScrollTitle.svelte";
  import ParallaxImage from "$lib/components/parallax-image/ParallaxImage.svelte";
  import gsap from "gsap";

  import { WORK_ROUTE } from "$lib/data/routes";
  import { highlightedWorks } from "$lib/data/works";
  import { encodeWorkName, handleLinkClick } from "$lib/utils/url";
  import { onMount } from "svelte";

  let container;
  let workElements = $state([]);
  
  onMount(() => {
    gsap.from(workElements, {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: "power4.out",
      scrollTrigger: {
        trigger: workElements,
        start: "top bottom",
      },
    });
  });
  
</script>

<div class="highlight-container">
  <div class="highlights">
    <HorizontalScrollTitle>
      <HighlightsText />
    </HorizontalScrollTitle>
    <div class="works">
      {#each highlightedWorks as work, i}
      {@const href = `${WORK_ROUTE}/${encodeWorkName(work.name)}`}
      <a
        bind:this={workElements[i]}
        onclick={e => handleLinkClick(e, href)}
        {href}
        class="work"
      >
        <ParallaxImage src={work.thumbnail} alt={work.name} offset={64} />
        <div class="info">
          <div class="name">{work.name}</div>
        </div>
      </a>
      {/each}
    </div>
    <div class="button-container grid-layout">
      <div class="button-wrapper">
        <ButtonLink href={WORK_ROUTE}>View All</ButtonLink>
      </div>
    </div>
  </div>
</div>

<style>
  .highlight-container {
    background-color: var(--black);
    position: relative;
    z-index: 100;
  }

  .highlights {
    padding: 256px var(--x-padding);
    background-color: var(--white);
    border-top-left-radius: var(--section-border-radius);
    border-top-right-radius: var(--section-border-radius);
  }

  .works {
    margin: 256px 0 128px 0;
    display: flex;
    gap: 32px;
  }

  .work {
    width: 100%;
    position: relative;
    height: fit-content;
    transition: transform 70ms linear;
  }

  .work:hover {
    transform: scale(0.98) !important;
  }

  .work .info {
    position: absolute;
    inset: 0 0 0 0;
    background-color: var(--overlay-dark);
    display: grid;
    place-items: center;
    transition: opacity 100ms linear;
  }

  .work .name {
    font-family: "FK Screamer";
    font-size: 64px;
    color: var(--white);
  }

  .button-wrapper {
    grid-column: 7 / span 6;
  }

  @media (width <= 1000px) {
    .works {
      flex-direction: column;
    }

    .work:hover {
      transform: scale(1) !important;
    }
  }

  @media (width <= 700px) {
    .button-wrapper {
      grid-column: span 12;
    }
  }

  @media (width <= 600px) {
    .work .name {
      font-size: 48px;
    }
  }

  @media (width <= 400px) {
    .work .name {
      font-size: 32px;
    }
  }
</style>
