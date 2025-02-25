<script>
  import gsap from "gsap";
  import CustomEase from "gsap/CustomEase";
  import StudioTitle from "$lib/assets/titles/StudioTitle.svelte";
  import { onMount } from "svelte";

  let title;

  onMount(() => {
    const ease = CustomEase.create("custom", "0.76, 0, 0.24, 1");

    gsap.to(title, {
      y: 0,
      duration: 1,
      ease,
    });
  });
</script>

<div class="studio-title" bind:this={title}>
  <StudioTitle />
</div>

<style>

  :global(.studio-title svg) {
    width: 100%;
  }

  :global(.studio-title path) {
    fill: var(--foreground);
  }

  .studio-title {
    margin-bottom: 32px;
    transform: translateY(100vh);
  }
</style>
