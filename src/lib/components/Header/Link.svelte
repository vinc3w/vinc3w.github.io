<script>
  import gsap from "gsap";
  import CursorEffectElement from "../Cursor/CursorEffectElement.svelte";
  import ArrowRight from "$lib/assets/icons/ArrowRight.svelte";
  import header from "$lib/state/header.svelte";
  import { onMount } from "svelte";
  import { colors } from "$lib/contants/styles";
  import { page } from "$app/state";
  import { cursorElement } from "$lib/contants/cursor";

  const { href, target, isCurrentPage, children } = $props();

  let link;
  const duration = 0.3;

  onMount(() => {
    const handleMouseEnter = () => {
      gsap.to(link, {
        opacity: 1,
        duration,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(link, {
        opacity: isCurrentPage ? 1 : 0.5,
        duration,
      });
    };

    link.addEventListener("mouseenter", handleMouseEnter);
    link.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      link.removeEventListener("mouseenter", handleMouseEnter);
      link.removeEventListener("mouseleave", handleMouseLeave);
    }
  });

  const closeMenu = e => {
    if (target === "_blank") return;
    setTimeout(() => {
      header.showMenu = false;
    }, 500);
  }
</script>

<li bind:this={link}>
  <CursorEffectElement
    type={[cursorElement.DILATE]}
    targetStyle={{
      height: 8,
      width: 8,
    }}
    styles={{
      "width": "100%",
    }}
  >
    <a {href} {target} onclick={closeMenu}>{@render children()}</a>
  </CursorEffectElement>
</li>

<style>
  li {
    position: relative;
    display: flex;
    align-items: center;
  }

  a {
    display: block;
    font-size: 6rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(--background);
  }

  @media (width <= 50rem) {
    a {
      font-size: 2.5rem;
    }
  }
</style>
