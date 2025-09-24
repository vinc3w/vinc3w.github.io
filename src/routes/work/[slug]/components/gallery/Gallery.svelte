<script>
  import gsap from "gsap";
  import { onMount } from "svelte";

  let { data } = $props();
  let images = $state([]);

  onMount(() => {
    images.forEach(image => gsap.to(image, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
      scrollTrigger: {
        trigger: image,
        start: "top bottom",
      },
    }));
  });
</script>

<div class="gallery">
  {#each data.gallery as src, i}
    <img bind:this={images[i]} {src} alt={data.name}>
  {/each}
</div>

<style>
  .gallery {
    padding: 128px var(--x-padding);
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  img {
    width: 100%;
    opacity: 0;
    transform: scale(0.9);
  }

  @media (width <= 700px) {
    .gallery {
      gap: 16px;
    }
  }
</style>
