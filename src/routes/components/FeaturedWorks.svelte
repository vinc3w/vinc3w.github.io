<script>
  import work from "$lib/data/work";
  import ArrowLink from "$lib/components/Link/ArrowLink.svelte";
  import Work from "$lib/components/Work/Work.svelte";
  import { WORK } from "$lib/contants/routes";

  const featuredWorksCount = 7;
  const bestWorksCount = 10;
</script>

<div class="featured-works">
  <div class="marquee-titles">
    <div class="title">
      {#each Array(featuredWorksCount) as i}
        <div class="section">
          <div>Featured</div>
          <div>Works</div>
          <div>-</div>
        </div>
      {/each}
    </div>
    <div class="title">
      {#each Array(bestWorksCount) as i}
        <div class="section">
          <div>Best</div>
          <div>Works</div>
          <div>-</div>
        </div>
      {/each}
    </div>
  </div>
  <div class="list">
    {#each work.filter(i => i.featured) as work, index}
      <Work {work} {index} />
    {/each}
  </div>
  <div class="link-container grid">
    <div class="link">
      <ArrowLink href={WORK} />
    </div>
  </div>
</div>

<style>
  .featured-works {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 8rem;
  }

  .marquee-titles .title {
    --gap: 2rem;

    font-size: 8rem;
    font-weight: bold;
    line-height: 120%;
    color: var(--neutral);
    display: flex;
    align-items: center;
    gap: var(--gap);
  }

  .section {
    display: flex;
    align-items: center;
    gap: var(--gap);
    animation: scroll 8s infinite linear;
  }

  .list {
    margin-top: auto;
  }

  .link-container {
    margin-bottom: auto;
  }

  .link {
    grid-column: 2 / 3;
  }

  @media (width <= 40rem) {
    .marquee-titles .title {
      font-size: 5rem;
    }
  }

  @keyframes scroll {
    to {
      transform: translateX(calc(-100% - var(--gap)));
    }
  }
</style>
