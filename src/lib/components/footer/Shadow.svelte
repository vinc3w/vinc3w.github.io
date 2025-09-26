<script>
  import gsap from "gsap";

  import { onMount } from "svelte";
  import { app } from "$lib/states/app.svelte";
  
  let boxShadow;

  $effect(() => {
    if (!app.headerHeight) return;

    const animation = gsap.to(boxShadow, {
      opacity: 0,
      ease: "expoScale(0.5,7,none)",
      scrollTrigger: {
        trigger: boxShadow,
        start: `top 50%`,
        end: `top ${app.headerHeight}px`,
        scrub: true,
      },
    });

    return () => animation.kill();
  });
</script>

<div bind:this={boxShadow} class="box-shadow"></div>

<style>
  .box-shadow {
    box-shadow: 0 0 200px 40px var(--black);
    position: relative;
    z-index: 50;
  }
</style>
