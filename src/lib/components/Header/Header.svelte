<script>
  import { cursorElement } from "$lib/contants/cursor";
  import { HOME } from "$lib/contants/routes";
  import header from "$lib/state/header.svelte";
  import TextLink from "../Link/TextLink.svelte";
  import CursorEffectElement from "../Cursor/CursorEffectElement.svelte";
  import Hamburger from "./Hamburger.svelte";
  import Menu from "./Menu.svelte";

  $effect(() => {
    document.body.style.overflowY = header.showMenu ? "hidden" : "";
  });
</script>

<header>
  <TextLink href={HOME}>vinc3w</TextLink>
  <Hamburger />
  <Menu />
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    z-index: 100;
  }
</style>
