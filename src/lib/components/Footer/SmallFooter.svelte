<script>
  import {
    INSTAGRAM,
    INSTAGRAM_HANDLE,
  } from "$lib/contants/socials";
  import CursorEffectElement from "../Cursor/CursorEffectElement.svelte";
  import { cursorElement } from "$lib/contants/cursor";
  import { colors } from "$lib/contants/styles";
  import ArrowUp from "$lib/assets/icons/ArrowUp.svelte";

  const { contacts, socials, scrollToTop } = $props();
</script>

<div class="content">
  <div class="credit">
    Designed and developed by
    <CursorEffectElement
      type={[cursorElement.DILATE]}
      targetStyle={{
        height: 4,
        width: 4,
      }}
      styles={{
        display: "inline",
      }}
    >
      <a href={INSTAGRAM} target="_blank">{INSTAGRAM_HANDLE}</a>
    </CursorEffectElement>
  </div>
  <div class="contact">
    <div class="title">Hello</div>
    {#each contacts as { href, label }}
      <CursorEffectElement
          type={[cursorElement.DILATE]}
          targetStyle={{
            height: 3,
            width: 3,
          }}
        >
        <a {href} target="_blank">{label}</a>
      </CursorEffectElement>
    {/each}
  </div>
  <ul class="socials">
    <li class="title">Socials</li>
    {#each socials as { href, label }}
      <li>
        <CursorEffectElement
          type={[cursorElement.DILATE]}
          targetStyle={{
            height: 3,
            width: 3,
          }}
        >
          <a {href} target="_blank">{label}</a>
        </CursorEffectElement>
      </li>
    {/each}
  </ul>
  <CursorEffectElement
    type={[cursorElement.DILATE, cursorElement.MAGNETIC]}
    targetStyle={{
      height: 5,
      width: 5,
    }}
    styles={{
      "height": "fit-content",
    }}
  >
    <button onclick={scrollToTop}>
      <ArrowUp fill={colors.BACKGROUND} />
    </button>
  </CursorEffectElement>
</div>

<style>
  .content {
    display: none;
    flex-direction: column;
    gap: 2rem;
  }

  .credit a {
    margin-left: 0.25rem;
  }

  a {
    color: var(--neutral);
    transition: color 200ms ease;
  }

  a:hover {
    color: var(--background);
  }

  .contact {
    display: flex;
    flex-direction: column;
  }

  .socials {
    list-style-type: none;
  }

  .socials a {
    padding-top: 0.5rem;
    color: var(--neutral);
    transition: color 300ms ease;
  }

  .socials a:hover {
    color: var(--background);
  }

  button {
    border: 0.125rem solid var(--background);
    border-radius: 50%;
    padding: 1rem;
  }

  button:hover {
    border: none;
  }

  :global(footer svg) {
    width: 100%;
  }

  @media (width <= 69rem) {
    .content {
      display: flex;
    }
  }
</style>
