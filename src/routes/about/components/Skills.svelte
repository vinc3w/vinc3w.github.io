<script>
  import about from "$lib/data/about";
</script>

<div class="skills grid">
  <div class="title">What can I do?</div>
  <ul class="list">
    {#each about.skills as s}
      <li>{s}</li>
    {/each}
  </ul>
</div>

<style>
  .skills {
    border-top: 1px solid var(--foreground);
    padding-top: 32px;
  }

  .skills .list {
    grid-column: 3 / 5;
    list-style-type: none;
  }
</style>
