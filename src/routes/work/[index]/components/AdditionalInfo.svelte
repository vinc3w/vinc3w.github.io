<script>
  import { ADDITIONAL_TYPE } from "$lib/data/work";

  const { work } = $props();
</script>

{#if work.additional.length}
  <div class="additional-info">
    {#each work.additional as a}
      {#if a.type === ADDITIONAL_TYPE.IMAGE}
        <img src={a.url} alt="additional">
      {:else if a.type === ADDITIONAL_TYPE.TEXT}
        <div class="field grid">
          <div class="label">{a.label}</div>
          <div class="value">{a.value}</div>
        </div>
      {/if}
    {/each}
  </div>
{/if}

<style>
  .additional-info {
    margin-top: 4rem;
    padding: 0 2rem;
  }

  .label {
    color: var(--neutral);
    font-size: 1rem;
  }

  .value {
    grid-column: 2 / 5;
  }
</style>
