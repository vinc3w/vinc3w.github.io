<script>
  import CursorEffectElement from "../Cursor/CursorEffectElement.svelte";
  import ArrowRight from "$lib/assets/icons/ArrowRight.svelte";
  import ArrowUpRight from "$lib/assets/icons/ArrowUpRight.svelte";
  import { cursorElement } from "$lib/contants/cursor";
  import { colors } from "$lib/contants/styles";
  import { handleAnchorClick } from "$lib/state/routes.svelte";

  const { href, target, diameter = 8, color = colors.FOREGROUND } = $props();
</script>

<CursorEffectElement
  type={[cursorElement.DILATE, cursorElement.MAGNETIC]}
  targetStyle={{
    height: diameter,
    width: diameter,
  }}
>
  <a
    {href}
    {target}
    style:--color={color}
    style:--padding={2 + "rem"}
    style:--diameter={diameter + "rem"}
    onclick={e => target !== "_blank" && handleAnchorClick(e, href)}
  >
    {#if target === "_blank"}
      <ArrowUpRight fill={color} size={diameter / 2} />
    {:else}
      <ArrowRight fill={color} size={diameter / 2} />
    {/if}
  </a>
</CursorEffectElement>

<style>
  a {
    display: block;
    height: var(--diameter);
    width: var(--diameter);
    padding: var(--padding);
    border-radius: 50%;
    border: 0.125rem solid var(--color);
    transition: transform 200ms ease;
  }

  a:hover {
    border: none;
  }
</style>
