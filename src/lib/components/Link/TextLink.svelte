<script>
  import CursorEffectElement from "../Cursor/CursorEffectElement.svelte";
  import { cursorElement } from "$lib/contants/cursor";
  import { colors } from "$lib/contants/styles";
  import { handleAnchorClick } from "$lib/state/routes.svelte";

  const { href, target, diameter = 5, children } = $props();
</script>

<CursorEffectElement
  type={[cursorElement.DILATE]}
  targetStyle={{
    height: diameter,
    width: diameter,
  }}
>
  <a
    {href}
    {target}
    onclick={e => target !== "_blank" && handleAnchorClick(e, href)}
  >
    {@render children()}
  </a>
</CursorEffectElement>
