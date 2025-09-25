<script>
  import gsap from "gsap";

  import { onMount } from "svelte";
  import { headerHeight } from "$lib/data/app";
  
  let boxShadow;

  onMount(() => {
    gsap.to(boxShadow, {
      opacity: 0,
      ease: "expoScale(0.5,7,none)",
      scrollTrigger: {
        trigger: boxShadow,
        start: `top 50%`,
        end: `top ${headerHeight}px`,
        scrub: true,
      },
    });
  });
</script>

<div bind:this={boxShadow} class="box-shadow"></div>

<style>
  .box-shadow {
    box-shadow: 0 0 200px 40px var(--black);
  }
</style>
