<script>
  import splt from "spltjs";
  import gsap from "gsap";
  import CustomEase from "gsap/dist/CustomEase";
  import { app } from "$lib/state/app.svelte";

  const { data } = $props();

  let container;
  
  $effect(() => {
    if (!app.ready) return;
    
    const ease = CustomEase.create("custom", "0.76, 0, 0.24, 1");

    splt({ reveal: true });

    gsap.to(".reveal", {
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "bottom top",
      },
      y: 0,
      duration: 1.5,
      ease,
    });
  });
</script>

<div class="hero" bind:this={container}>
  <div class="title splt">{data.title}</div>
  <div class="description grid">
    <div class="item splt">{data.description}</div>
  </div>
</div>

<style>
  .hero {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }

  .title {
    font-size: 160px;
    font-weight: bold;
    line-height: 130%;
  }

  .description .item {
    grid-column: 3 / 5;
  }

  :global(.work .reveal) {
    transform: translateY(100%);
  }
</style>
