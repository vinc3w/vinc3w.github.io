<script>
  import TimelineTitle from "./TimelineTitle.svelte";
  import gsap from "gsap";

  import { timeline as timelineData } from "$lib/data/about";
  import { onMount } from "svelte";

  let timeline;
  let title;
  let rows = $state([]);

  onMount(() => {
    gsap.to(timeline, {
      y: 256,
      scrollTrigger: {
        trigger: timeline,
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.from(rows, {
      y: 64,
      scale: 0.95,
      opacity: 0,
      duration: 1.4,
      ease: "power4.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: rows,
        start: "top bottom",
      },
    });

    gsap.from(title, {
      y: "100%",
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: title,
        start: "top bottom",
      },
    });
  });
</script>

<div bind:this={timeline} class="timeline">
  <div class="title-container">
    <div bind:this={title} class="title">
      <TimelineTitle />
    </div>
  </div>
  <ul>
    {#each timelineData as tl, i}
      <li bind:this={rows[i]} class="timeline-item grid-layout">
        <div class="date">{tl.date}</div>
        <ul class="info">
          <li>{tl.activity}</li>
          <li>{tl.location}</li>
          {#if tl.extraInfo}
            <li>{tl.extraInfo}</li>
          {/if}
        </ul>
      </li>
    {/each}
  </ul>
</div>

<style>
  .timeline {
    padding: 256px var(--x-padding);
  }

  .title-container {
    margin-bottom: 256px;
    overflow-y: hidden;
  }

  .timeline-item {
    padding: 24px 0;
    border-top: 1px solid var(--overlay-dark);
  }

  .timeline-item:last-of-type{
    border-bottom: 1px solid var(--overlay-dark);
  }

  .date {
    grid-column: span 6;
  }

  .info {
    grid-column: 7 / span 6;
  }

  @media (width < 1000px) {
    .title-container {
      margin-bottom: 128px;
    }
  }

  @media (width <= 500px) {
    .title-container {
      margin-bottom: 64px;
    }

    .timeline-item {
      display: flex;
      flex-direction: column;
    }

    .date {
      margin-bottom: 8px;
      opacity: 0.7;
    }
  }
</style>
