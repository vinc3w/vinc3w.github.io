<script>
  import { timestampToMonthYear } from "$lib/utils/general";

  const { work } = $props();
  const separator = " & ";
</script>

<div class="info">
  <img src={work.image} alt="main">
  <div class="context grid">
    <div class="role">
      <div class="label">Role</div>
      <div class="value">{work.role.join(separator)}</div>
    </div>
    <div class="category">
      <div class="label">Category</div>
      <div class="value">{work.category.join(separator)}</div>
    </div>
    <div class="duration">
      <div class="label">Duration</div>
      <div class="category">{timestampToMonthYear(work.duration.from)} - {timestampToMonthYear(work.duration.to)}</div>
    </div>
  </div>
  <div class="description grid">
    <div class="label">Description</div>
    <div class="value">{work.description}</div>
  </div>
  <div class="tools grid">
    <div class="label">Tools</div>
    <div class="value">
      {#each work.tools as t}
        <div>{t}</div>
      {/each}
    </div>
  </div>
</div>

<style>
  .info {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 0 2rem;
  }

  img {
    aspect-ratio: 5 / 3;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  .context .label {
    margin-bottom: 0.5rem;
  }

  .role {
    grid-column: 2 / 3;
  }

  .label {
    color: var(--neutral);
    font-size: 1rem;
  }

  .value {
    grid-column: 2 / 5;
  }
</style>
