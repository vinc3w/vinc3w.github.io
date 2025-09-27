<script>
  import TextReveal from "$lib/components/text-reveal/TextReveal.svelte";
  import gsap from "gsap";
  import { tags } from "$lib/data/works";

  let { data } = $props();
</script>

<div class="info">
  <div class="row grid-layout">
    <div class="description">
      <TextReveal duration={0.6} stagger={0.02}>
        {data.description}
      </TextReveal>
    </div>
  </div>
  <div class="row grid-layout">
    <div class="tools">
      <div class="label">Tools</div>
      <ul>
        {#each data.tools as tool}
          <li>{tool}</li>
        {/each}
      </ul>
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
  </div>
  <div class="row grid-layout">
    <div class="tools">
      <div class="label">Tools</div>
      <ul>
        {#each data.tools as tool}
          <li>{tool}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  .info {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    row-gap: 128px;
    padding: 0 var(--x-padding);
  }

  .description {
    grid-column: span 6;
  }

  .label {
    font-weight: bold;
    margin-bottom: 8px;
  }

  .tags {
    grid-column: 7 / span 3;
  }

  .link {
    grid-column: 10 / span 3;
  }

  .row:nth-of-type(2) .tools {
    display: none;
  }

  .tools {
    grid-column: 7 / span 3;
  }

  @media (width <= 800px) {
    .row:nth-of-type(1) {
      display: block;
    }
    
    .description {
      grid-column: span 12;
    }

    .tags {
      grid-column: 5 / span 4;
    }

    .link {
      grid-column: 9 / span 4;
    }

    .tools {
      grid-column: span 4;
    }

    .row:nth-of-type(2) .tools {
      display: block;
    }

    .row:nth-of-type(3) .tools {
      display: none;
    }
  }

  @media (width <= 550px) {
    .tags {
      grid-column: span 6;
    }

    .link {
      grid-column: 7 / span 6;
    }

    .tools {
      grid-column: span 12;
    }

    .row:nth-of-type(2) .tools {
      display: none;
    }

    .row:nth-of-type(3) .tools {
      display: block;
    }
  }
</style>
