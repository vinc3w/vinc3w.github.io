<script>
  import ButtonLink from "$lib/components/button-link/ButtonLink.svelte";
  import HighlightsText from "./HighlightsText.svelte";
  import ParallaxImage from "$lib/components/parallax-image/ParallaxImage.svelte";
  import MarqueeTitle from "$lib/components/marquee-title/MarqueeTitle.svelte";
  import gsap from "gsap";

  import { WORK_ROUTE } from "$lib/data/routes";
  import { highlightedWorks } from "$lib/data/works";
  import { encodeWorkName, handleLinkClick } from "$lib/utils/url";
  import { onMount } from "svelte";
  import TextReveal from "$lib/components/text-reveal/TextReveal.svelte";

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
    <MarqueeTitle>
      <HighlightsText />
    </MarqueeTitle>
    <div class="description">
      <TextReveal duration={0.6} stagger={0.02}>
        I bring together front end, back end, and design perspectives to deliver well-rounded digital experiences.
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
          <div class="thumbnail-container">
            <div class="large-screen">
              <ParallaxImage src={work.thumbnail.portrait || work.thumbnail.landscape} alt={work.name} />
            </div>
            <div class="small-screen">
              <ParallaxImage src={work.thumbnail.landscape} alt={work.name} aspectRatio="6 / 4" />
            </div>
          </div>
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

  .description {
    font-size: 64px;
    text-transform: uppercase;
    margin: 192px 0;
  }

  .works {
    display: flex;
    gap: 32px;
    margin-bottom: 128px;
  }

  .work {
    width: 100%;
    position: relative;
    height: fit-content;
    transition: transform 140ms ease-in-out;
  }

  .work:hover {
    transform: scale(0.98) !important;
  }

  .work .thumbnail-container .small-screen {
    display: none;
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
    font-family: "FK Screamer", sans-serif;
    font-size: 64px;
    color: var(--white);
  }

  .button-wrapper {
    grid-column: 7 / span 6;
  }

  @media (width <= 1000px) {
    .description {
      font-size: 48px;
    }

    .works {
      flex-direction: column;
      margin-top: 128px;
    }

    .work .thumbnail-container .small-screen {
      display: initial;
    }

    .work .thumbnail-container .large-screen {
      display: none;
    }

    .work:hover {
      transform: scale(1) !important;
    }
  }

  @media (width <= 700px) {
    .button-container {
      display: block;
    }
  }

  @media (width <= 600px) {
    .description {
      font-size: 32px;
    }

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
