<script>
  import HighlightsText from "./HighlightsText.svelte";
  import ParallaxImage from "$lib/components/parallax-image/ParallaxImage.svelte";
  import TextReveal from "$lib/components/text-reveal/TextReveal.svelte";
  import RightArrow from "$lib/icons/RightArrow.svelte";
  import MarqueeTitle from "$lib/components/marquee-title/MarqueeTitle.svelte";
  import gsap from "gsap";

  import { WORK_ROUTE } from "$lib/data/routes";
  import { highlightedWorks } from "$lib/data/works";
  import { encodeWorkName, handleLinkClick } from "$lib/utils/url";
  import { onMount } from "svelte";

  let container;
  let workElements = $state([]);
  
  onMount(() => {
    gsap.from(workElements, {
      scale: 0.95,
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
    <!-- <MarqueeTitle>
      <HighlightsText />
    </MarqueeTitle> -->
    <div class="description">
      <TextReveal duration={0.6} stagger={0.02}>
        <strong>Highlights</strong> of my craft, where coding, design, and logic come together to create seamless solutions.
      </TextReveal>
    </div>
    <div class="works">
      {#each highlightedWorks as work, i}
        {@const href = `${WORK_ROUTE}/${encodeWorkName(work.name)}`}
        <a
          bind:this={workElements[i]}
          onclick={e => handleLinkClick(e, href)}
          {href}
          class="work"
        >
          <ParallaxImage src={work.thumbnail.landscape} alt={work.name} aspectRatio="6 / 4" />
          <div class="info">
            <div class="name">{work.name}</div>
          </div>
        </a>
      {/each}
      <a
        bind:this={workElements[highlightedWorks.length]}
        class="button-container"
        href={WORK_ROUTE}
      >
        View All
      </a>
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
    padding: 0 var(--x-padding) 256px var(--x-padding);
    background-color: var(--white);
    border-top-left-radius: var(--section-border-radius);
    border-top-right-radius: var(--section-border-radius);
  }

  .description {
    font-size: 64px;
    text-transform: uppercase;
    padding: 192px 0;
  }

  .works {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 128px;
  }

  .work {
    width: 100%;
    position: relative;
    height: fit-content;
    transition: transform 140ms ease-in-out;
  }

  .work .info {
    position: absolute;
    inset: 0 0 0 0;
    background-color: var(--overlay-dark);
    display: grid;
    place-items: center;
  }

  .work .name {
    font-family: "FK Screamer", sans-serif;
    font-size: 80px;
    color: var(--white);
  }

  .button-container {
    display: grid;
    place-items: center;
    gap: 16px;
    aspect-ratio: 6 / 4;
    background-color: var(--black);
    color: var(--white);
    font-family: "FK Screamer", sans-serif;
    font-size: 80px;
    color: var(--white);
  }

  @media (width <= 1000px) {
    .description {
      font-size: 48px;
      padding-bottom: 128px;
    }
  }

  @media (width <= 600px) {
    .description {
      font-size: 32px;
      padding-bottom: 80px;
    }

    .work .name,
    .button-container {
      font-size: 48px;
    }
  }

  @media (width <= 400px) {
    .work .name,
    .button-container {
      font-size: 32px;
    }
  }
</style>
