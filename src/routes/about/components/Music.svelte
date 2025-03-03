<script>
  import about from "$lib/data/about";
</script>

<div class="music">
  {#each about.music as m}
    <div class="item grid">
      <div class="title">{m.label}</div>
      <div class="embed">{@html m.embed}</div>
    </div>
  {/each}
</div>

<style>
  .music {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }

  .title {
    grid-column: 1 / 3;
  }

  .embed {
    grid-column: 3 / 4;
  }

  @media (width <= 1200px) {

    .music .embed {
      grid-column: 3 / 5;
    }
  }

  @media (width <= 500px) {

    .music .embed {
      grid-column: 1 / 5;
    }
  }
</style>
