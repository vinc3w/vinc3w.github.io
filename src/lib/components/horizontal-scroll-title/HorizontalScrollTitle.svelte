<script>
  import gsap from "gsap";
  import CustomEase from "gsap/CustomEase";
  
  import { onMount } from "svelte";

  let { children } = $props();

  let container;
  let title;

  onMount(()=> {
    gsap.to(title, {
      x: "-50%",
      ease: CustomEase.create("in-out", "0.42,0,0.58,1"),
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=150%",
        pin: true,
        pinType: "fixed",
        scrub: true,
      },
    });
  });
</script>

<div bind:this={container} class="horizontal-scroll-title">
  <div class="title-container">
    <div bind:this={title} class="title">
      {@render children?.()}
    </div>
  </div>
</div>

<style>
  .horizontal-scroll-title {
    width: 100vw;
    margin-left: calc(var(--x-padding) * -1);
    padding: 0 var(--x-padding);
    overflow-x: hidden;
    height: 100vh;
    display: flex;
    align-items: center;
  }

  .title-container {
    width: 100%;
  }

  .title {
    width: 200%;
  }
</style>
