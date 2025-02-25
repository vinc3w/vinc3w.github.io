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

  .music .embed {
    grid-column: 3 / 4;
  }
</style>
