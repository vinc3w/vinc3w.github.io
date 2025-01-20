<script>
  import gsap from "gsap";
  import CustomEase from "gsap/CustomEase";
  import cursorState from "$lib/state/cursor.svelte";
  import work from "$lib/data/work";
  import { onMount, untrack } from "svelte";
  import { colors } from "$lib/contants/styles";

  let cursor;
  let index = $derived(cursorState.workIndex);
  let isHovered = $derived(typeof index === "number");
  let previous = $state();
  let previousWorkIndex = $state();
  const duration = 0.3;
  const scrollDuration = 0.5;
  const cursorHeight = 18 * 16;
  const cursorWidth = 23 * 16;

  const images = work.map(i => ({
    url: i.image,
    color: i.color,
  }));
  
  onMount(() => {
    const scrollEase = CustomEase.create("custom", "0.76, 0, 0.24, 1");
    
    const scrollToWorkImage = () => {
      if (index === previousWorkIndex) return;
      const scrollTo = cursorHeight * index;
      previousWorkIndex = index;
      gsap.to(cursor, {
        scrollTo,
        duration: scrollDuration,
        ease: scrollEase,
      });
    }

    const handleMouseMove = () => {
      const cursorDefaultDiameter = cursorState.diameter * 16;
      if (isHovered) {
        scrollToWorkImage();

        if (previous === 1) return;
        previous = 1;
        cursorState.isImageAnimationFinished = false;

        gsap.to(cursor, {
          borderRadius: 0,
          height: cursorHeight,
          width: cursorWidth,
          duration,
          onComplete: () => {
            scrollToWorkImage();
          }
        });
      } else {
        if (previous === 2) return;
        previous = 2;
        previousWorkIndex = null;

        gsap.to(cursor, {
          borderRadius: "50%",
          height: 0,
          width: 0,
          duration,
          onComplete: () => {
            if (!isHovered) {
              cursorState.isImageAnimationFinished = true;
              cursor.scrollTop = 0;
            }
          },
        });
      }
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  });
</script>

<div  
  class="cursor"
  bind:this={cursor}
  style:max-height={cursorHeight / 16 + "rem"}
>
  {#if isHovered}
    <div class="view">
      <div class="text">view</div>
    </div>
  {/if}
  {#each images as image}
  <div class="image-container" style:background-color={image.color}>
    {#if isHovered}
      <img src={image.url} alt="custom effect">
    {/if}
  </div>
  {/each}
</div>

<style>
  .cursor {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    height: 0;
    width: 0;
  }

  .view {
    height: 0;
    width: 0;
    position: sticky;
    top: 50%;
    left: 50%;
    z-index: 100;
  }

  .view .text {
    transform: translate(-50%, -50%);
    background-color: var(--foreground);
    color: var(--background);
    border-radius: 50%;
    font-size: 1rem;
    height: 5rem;
    width: 5rem;
    display: grid;
    place-items: center;
  }

  .image-container {
    height: 100%;
    width: 100%;
    position: relative;
    padding: 3rem;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 100;
  }
</style>
