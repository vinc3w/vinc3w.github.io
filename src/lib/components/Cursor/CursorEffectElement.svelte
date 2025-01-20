<script>
  import gsap from "gsap";
  import { setHoverData, resetHoverData } from "$lib/state/cursor.svelte";
  import { onMount } from "svelte";
  import { cssStringify } from "$lib/utils/general";
  import { cursorElement } from "$lib/contants/cursor";
  import { page } from "$app/state";

  const {
    type = Object.values(cursorElement),
    workIndex, // for work type effect
    targetStyle,
    bounds,
    debug,
    stickyStrength,
    magneticStrength = 1,
    styles,
    children,
  } = $props();

  let magnetic;
  const duration = 1;
  const ease = "elastic.out(1, 0.3)";

  $effect(() => {
    page.url;
    resetHoverData();
  });

  onMount(() => {
    const toX = gsap.quickTo(magnetic, "x", { duration, ease });
    const toY = gsap.quickTo(magnetic, "y", { duration, ease });

    const handleMouseEnter = () => {
      setHoverData({
        targetStyle,
        stickyStrength,
        boundingClientRect: magnetic.getBoundingClientRect(),
        disableMagnetism: !type.includes(cursorElement.MAGNETIC),
        workIndex,
      });
    }

    const handleMouseMove = e => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = magnetic.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) * magneticStrength;
      const y = (clientY - (top + height / 2)) * magneticStrength;
      toX(x);
      toY(y);
    }

    const handleMouseLeave = () => {
      resetHoverData();
      toX(0);
      toY(0);
    }

    magnetic.addEventListener("mouseenter", handleMouseEnter);
    magnetic.addEventListener("mouseleave", handleMouseLeave);
    if (type.includes(cursorElement.STICKY)) {
      magnetic.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      magnetic.removeEventListener("mouseenter", handleMouseEnter);
      magnetic.removeEventListener("mouseleave", handleMouseLeave);
      magnetic.removeEventListener("mousemove", handleMouseMove);
    }
  });
</script>

<div
  class="magnetic"
  bind:this={magnetic}
  style:--diameter={bounds ? bounds + "rem" : "100%"}
  style={styles ? cssStringify(styles) : ""}
>
  <div
    class="bounds"
    style:border={debug ? `0.125rem dashed red` : ""}
  ></div>
  {@render children()}
</div>

<style>
  .magnetic {
    position: relative;
    display: inline-block;
  }

  .bounds {
    pointer-events: all;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: var(--diameter);
    width: var(--diameter);
    z-index: -10;
  }
</style>
