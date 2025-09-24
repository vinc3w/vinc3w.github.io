<script>
  import UpRightArrow from "$lib/icons/UpRightArrow.svelte";
  import RightArrow from "$lib/icons/RightArrow.svelte";
  import gsap from "gsap";

  import { handleLinkClick } from "$lib/utils/url";
  import { SplitText } from "gsap/SplitText";
  import { text } from "@sveltejs/kit";
  import { app } from "$lib/states/app.svelte";

  let { href, target, children, backgroundColor="black" } = $props();
  let container;
  let text1;
  let text2;

  const fontSize = 14;
  const spacing = 4;

  $effect(() => {
    if (!app.fonts.ready) return

    const letters1 = SplitText.create(text1).chars;
    const letters2 = SplitText.create(text2).chars;
    const duration = 0.4;
    const ease = "power2.out";
    const stagger = 0.02;

    container.onmouseenter = () => {
      gsap.to(letters1, {
        y: fontSize * -1,
        duration,
        ease,
        stagger,
      });
      gsap.to(letters2, {
        y: fontSize * -1 - spacing,
        duration,
        ease,
        stagger,
      });
    }
    container.onmouseleave = () => {
      gsap.to(letters1, {
        y: 0,
        duration,
        ease,
        stagger,
      });
      gsap.to(letters2, {
        y: 0,
        duration,
        ease,
        stagger,
      });
    }
  });
</script>

<a
  bind:this={container}
  {href}
  {target}
  onclick={e => target !== "_blank" && handleLinkClick(e, href)}
  style:background-color={`var(--${backgroundColor})`}
  style:--font-size={fontSize + "px"}
  style:--spacing={spacing + "px"}
>
  <div class="text-container">
    <div bind:this={text1} class="text">{@render children?.()}</div>
    <div bind:this={text2} class="text">{@render children?.()}</div>
  </div>
  {#if target === "_blank"}
    <UpRightArrow width={20} />
  {:else}
    <RightArrow width={20} />
  {/if}
</a>

<style>
  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--white);
    padding: 20px 32px;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: var(--font-size);
    line-height: var(--font-size);
    transition: opacity 100ms ease;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }

  .text-container {
    overflow-y: hidden;
    height: var(--font-size);
  }

  .text:last-of-type {
    padding-top: var(--spacing);
  }
</style>
