<script>
  import gsap from "gsap";
  import { onMount, untrack } from "svelte";
  import cursorState from "$lib/state/cursor.svelte";
  import WorkCursor from "./WorkCursor.svelte";
  import { breakPoints } from "$lib/contants/styles";

  let cursor;
  const followDuration = 0.2;

  onMount(() => {
    const toX = gsap.quickTo(cursor, "x", { duration: followDuration });
    const toY = gsap.quickTo(cursor, "y", { duration: followDuration });

    const handleMouseMove = e => {
      const { clientX, clientY } = e;
      const { height, width } = cursor.getBoundingClientRect();
      const cursorHeight = cursorState.targetStyle.height * 16;
      const cursorWidth = cursorState.targetStyle.width * 16;
      const cursorBorderRadius = cursorState.targetStyle.borderRadius;

      gsap.to(cursor, {
        height: cursorHeight,
        width: cursorWidth,
        borderRadius: cursorBorderRadius + "rem",
        duration: 0.2,
      });

      if (cursorState.isHoverEffectElement && !cursorState.disableMagnetism) {
        const { top, left, height, width } = cursorState.boundingClientRect;
        const cursorCenter = {
          x: left + width / 2,
          y: top + height / 2,
        };
        const distance = {
          x: clientX - cursorCenter.x,
          y: clientY - cursorCenter.y,
        };
        toX((cursorCenter.x - cursorWidth / 2) + (distance.x * cursorState.stickyStrength));
        toY((cursorCenter.y - cursorHeight / 2) + (distance.y * cursorState.stickyStrength));
      } else {
        toX(clientX - (cursorWidth / 2));
        toY(clientY - (cursorHeight / 2));
      }
    }

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        height: 0,
        width: 0,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    }
  });
</script>

<div
  class="cursor"
  bind:this={cursor}
  style:--mix-blend-mode={cursorState.isImageAnimationFinished ? "difference" : ""}
  style:--breakpoint={breakPoints.cursor / 16 + "rem"}
>
  <WorkCursor />
</div>

<style>
  .cursor {
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    border-radius: 50%;
    background-color: var(--background);
    mix-blend-mode: var(--mix-blend-mode);
  }

  @media (width <= 65rem) {
    .cursor {
      display: none;
    }
  }
</style>
