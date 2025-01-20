<script>
  import ArrowLeft from "$lib/assets/icons/ArrowLeft.svelte";
  import CursorEffectElement from "$lib/components/Cursor/CursorEffectElement.svelte";
  import { cursorElement } from "$lib/contants/cursor";
  import { WORK } from "$lib/contants/routes";
  
  const { work } = $props();
</script>

<div class="hero grid">
  <div class="back">
    <CursorEffectElement
      type={[cursorElement.DILATE]}
      targetStyle={{
        height: 5,
        width: 5,
      }}
    >
      <a href={WORK}>
        <ArrowLeft />
        Back
      </a>
    </CursorEffectElement>
  </div>
  <div class="title">{work.title}</div>
</div>

<style>
  .hero {
    padding: 3rem 2rem 8rem;
  }

  .back {
    display: grid;
    place-items: center;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    opacity: 0.5;
  }

  a:hover {
    opacity: 1;
  }

  .title {
    font-size: 8rem;
    font-weight: bold;
    line-height: 120%;
    grid-column: 2 / 5;
  }
</style>
