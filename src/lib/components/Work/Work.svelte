<script>
  import CursorEffectElement from "$lib/components/Cursor/CursorEffectElement.svelte";
  import { cursorElement } from "$lib/contants/cursor";
  import { WORK } from "$lib/contants/routes";
  import { handleAnchorClick } from "$lib/state/routes.svelte";
  import { formatIndex } from "$lib/utils/general";

  const { work, index, showCategory } = $props();
  const seperator = " & ";
</script>

<CursorEffectElement
  type={[cursorElement.IMAGE]}
  workIndex={index}
  styles={{
    "width": "100%",
  }}
>
  <a
    href={WORK + "/" + index}
    class="work grid"
    onclick={e => handleAnchorClick(e, WORK + "/" + index, work.title)}
  >
    <div class="index">{formatIndex(index)}</div>
    <div class="content">
      <div class="title">{work.title}</div>
      {#if showCategory}
        <div class="category">{work.category.join(seperator)}</div>
      {/if}
    </div>
  </a>
</CursorEffectElement>

<style>
  a {
    padding: 0.5rem 0;
  }

  .index {
    font-size: 1rem;
    font-weight: bold;
    grid-column: 1 / 2;
    text-align: right;
    margin: auto 4rem auto 0;
  }

  .content {
    grid-column: 2 / 5;
  }

  .title {
    font-size: 4rem;
  }

  .category {
    color: var(--neutral);
  }

  @media (width <= 40rem) {
    .index {
      margin: auto 2rem auto 0;
    }

    .title {
      font-size: 2rem;
    }
  }
</style>
