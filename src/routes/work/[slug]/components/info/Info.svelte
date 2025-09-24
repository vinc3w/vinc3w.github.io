<script>
  import gsap from "gsap";
  import TextReveal from "$lib/components/text-reveal/TextReveal.svelte";

  import { tags } from "$lib/data/works";
  import { onMount } from "svelte";

  let { data } = $props();
  let info;

  onMount(() => {
    gsap.to(info, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: info,
        start: "top bottom",
      },
    });
  });
</script>

<div bind:this={info} class="info grid-layout">
  <div class="description">
    <TextReveal duration={0.6} stagger={0.02}>
      {data.description}
    </TextReveal>
  </div>
  <div class="tags">
    <div class="label">Tags</div>
    <ul>
      {#each data.tags as tag}
        <li>{tags.find(t => t.value === tag).label}</li>
      {/each}
    </ul>
  </div>
  <div class="link">
    <div class="label">Link</div>
    <a href={data.projectLink}>Here</a>
  </div>
  <div class="tools">
    <div class="label">Tools</div>
    <ul>
      {#each data.tools as tool}
        <li>{tool}</li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .info {
    row-gap: 128px;
    padding: 0 var(--x-padding);
    transform: translateY(64px);
    opacity: 0;
  }

  .description {
    grid-column: span 6;
    grid-row: 1 / 2;
  }

  .label {
    font-weight: bold;
    margin-bottom: 8px;
  }

  .tags {
    grid-column: 7 / span 3;
    grid-row: 2 / 3;
  }

  .link {
    grid-column: 10 / span 3;
    grid-row: 2 / 3;
  }

  .tools {
    grid-column: 7 / span 3;
    grid-row: 3 / 4;
  }

  @media (width <= 800px) {
    .description {
      grid-column: span 12;
    }

    .tags {
      grid-column: 5 / span 4;
      grid-row: 2 / 3;
    }

    .link {
      grid-column: 9 / span 4;
      grid-row: 2 / 3;
    }

    .tools {
      grid-column: span 4;
      grid-row: 2 / 3;
    }
  }

  @media (width <= 550px) {
    .tags {
      grid-column: span 6;
      grid-row: 2 / 3;
    }

    .link {
      grid-column: 7 / span 6;
      grid-row: 2 / 3;
    }

    .tools {
      grid-column: span 12;
      grid-row: 3 / 4;
    }
  }
</style>
