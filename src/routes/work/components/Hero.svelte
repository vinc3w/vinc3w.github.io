<script>
  import List from "$lib/assets/icons/List.svelte";
  import Grid from "$lib/assets/icons/Grid.svelte";
  import FilterButton from "./FilterButton.svelte";
  import work, { category as filters } from "$lib/data/work";
  import { formatIndex } from "$lib/utils/general";
</script>

<div class="hero grid">
  <div class="count">{formatIndex(work.length - 1)}</div>
  <div class="title">What I Have Worked On</div>
  <div class="action-row">
    <div class="filters">
      {#each Object.entries(filters) as [key, value]}
        <FilterButton label={value} {value} />
      {/each}
    </div>
  </div>
  <div class="divider"></div>
</div>

<style>
  .hero {
    margin: 10vh 2rem;
    row-gap: 4rem;
  }

  .count {
    font-size: 3rem;
    font-weight: bold;
    display: grid;
    place-items: center;
  }

  .title {
    font-size: 7vw;
    font-weight: bold;
    grid-column: 2 / 5;
    line-height: 120%;
  }

  .action-row {
    grid-column: 2 / 5;
  }

  .filters {
    display: flex;
    gap: 1rem;
  }

  .divider {
    height: 0.125rem;
    background-color: var(--foreground);
    margin-top: 4rem;
    grid-column: 1 / 5;
  }

  @media (width <= 45rem) {
    .hero {
      row-gap: 1rem;
    }

    .count {
      display: none;
    }

    .title {
      grid-column: 1 / 5;
    }

    .action-row {
      grid-column: 1 / 5;
    }
  }
</style>
