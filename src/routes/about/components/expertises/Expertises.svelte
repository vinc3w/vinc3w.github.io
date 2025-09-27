<script>
  import WhatCanIDoTitle from "./WhatCanIDoTitle.svelte";
  import HorizontalScrollTitle from "$lib/components/horizontal-scroll-title/HorizontalScrollTitle.svelte";
  import gsap from "gsap";

  import { expertises } from "$lib/data/about";
  import { onMount } from "svelte";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { app } from "$lib/states/app.svelte";

  const sectionOffset = 128;

  let container;
  let sections = $state([]);

  $effect(() => {
    if (!app.headerHeight) return;

    let previousTotalStackedHeight = 0;

    const ctx = gsap.context(() => {
      sections.forEach((section, index) => {
        const currentoffset = sectionOffset * index;
        ScrollTrigger.create({
          trigger: container,
          start: `top+=${previousTotalStackedHeight - currentoffset}px ${app.headerHeight}px`,
          end: `bottom ${sectionOffset * (sections.length - 1) + sections[sections.length - 1].offsetHeight + app.headerHeight}px`,
          pin: section,
          pinType: "fixed",
          pinSpacing: false,
        });
        previousTotalStackedHeight += section.offsetHeight;
      });
    });

    return () => ctx.kill();
  });
</script>

<div class="expertises">
  <div class="horizontal-scroll-title">
    <HorizontalScrollTitle>
      <WhatCanIDoTitle />
    </HorizontalScrollTitle>
  </div>
  <div class="normal-title">What Can I Do</div>
  <ul bind:this={container}>
    {#each expertises as expertise, i}
      <li bind:this={sections[i]} class="expertise" class:is-last={i === expertises.length - 1}>
        <div class="start">
          <div class="name">{expertise.name}</div>
        </div>
        <div class="end">
          <div class="description">{expertise.description}</div>
          <ul class="tools">
            {#each expertise.tools as tool}
              <li>{tool}</li>
            {/each}
          </ul>
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .expertises {
    padding: 0 var(--x-padding);
  }

  .normal-title {
    display: none;
    font-size: 128px;
    font-family: "FK Screamer";
    text-transform: uppercase;
    margin: 128px 0;
  }

  .expertise {
    display: flex;
    gap: 32px;
    padding: 64px 0;
    border-top: 1px solid var(--black);
    background-color: var(--white);
  }

  .expertise.is-last {
    border-bottom: 1px solid var(--black);
  }

  .expertise .start,
  .expertise .end {
    width: 100%;
  }

  .name {
    font-family: "FK Screamer";
    font-size: 80px;
  }

  .description,
  .tools {
    font-size: 24px;
  }

  .description {
    margin-bottom: 48px;
  }

  @media (width <= 1000px) {
    .horizontal-scroll-title {
      display: none;
    }

    .normal-title {
      display: block;
    }
  }

  @media (width <= 800px) {
    .description,
    .tools {
      font-size: 16px;
    }
  }

  @media (width <= 650px) {
    .expertise {
      flex-direction: column;
    }

    .description {
      margin-bottom: 16px;
    }
  }
</style>
