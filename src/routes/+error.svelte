<script>
  import CursorEffectElement from "$lib/components/Cursor/CursorEffectElement.svelte";
  import ArrowLeft from "$lib/assets/icons/ArrowLeft.svelte";
  import NeutralFace from "$lib/assets/icons/NeutralFace.svelte";
  import { cursorElement } from "$lib/contants/cursor";
  import { page } from "$app/state";
  import { colors } from "$lib/contants/styles";
  import { HOME } from "$lib/contants/routes";
</script>

<div class="error">
  <div class="code">
    {#if page.status == 404}
      4
      <NeutralFace size={20} />
      4
    {:else}
      {page.status}
    {/if}
  </div>
  <div class="message">{page.error.message}</div>
  <CursorEffectElement
    type={[cursorElement.DILATE]}
    targetStyle={{
      height: 5,
      width: 5,
    }}
  >
    <a href={HOME}>
      <ArrowLeft />
      Back to Home
    </a>
  </CursorEffectElement>
</div>

<style>
  .error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - var(--header-height));
    padding-bottom: 2rem;
  }

  .code {
    font-size: 30vw;
    font-weight: bold;
    line-height: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: auto;
  }

  .message {
    margin-bottom: auto;
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
</style>
