<script>
  import gsap from "gsap";
  import header from "$lib/state/header.svelte";
  import CursorEffectElement from "../Cursor/CursorEffectElement.svelte";
  import { cursorElement } from "$lib/contants/cursor";

  let hamburger;
  const duration = 0.2;

  $effect(() => {
    const lines = Object.values(hamburger.children);
    gsap.to(lines[0], {
      rotate: header.showMenu ? 45 : 0,
      y: header.showMenu ? 6 : 0,
      duration,
    });
    gsap.to(lines[1], {
      opacity: header.showMenu ? 0 : 1,
      duration,
    });
    gsap.to(lines[2], {
      rotate: header.showMenu ? -45 : 0,
      y: header.showMenu ? -6 : 0,
      duration,
    });
  });

  const toggleMenu = () => {
    header.showMenu = !header.showMenu;
  }
</script>

<CursorEffectElement
  type={[cursorElement.STICKY, cursorElement.MAGNETIC]}
  targetStyle={{
    height: 5,
    width: 5,
  }}
  bounds={7}
  magneticStrength={0.4}
  stickyStrength={0.25}
  styles={{
    "mix-blend-mode": "difference",
    "position": "fixed",
    "top": "2rem",
    "right": "2rem",
    "z-index": 100,
  }}
>
  <button
    class="hamburger"
    aria-label="toggle nav"
    onclick={toggleMenu}
    bind:this={hamburger}
  >
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </button>
</CursorEffectElement>

<style>
  .hamburger {
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }

  .line {
    height: 0.125rem;
    width: 100%;
    background-color: var(--background);
  }
</style>
