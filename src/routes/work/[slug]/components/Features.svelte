<script>
  import gsap from "gsap";
  import CustomEase from "gsap/dist/CustomEase";
  import FeaturesTitle from "$lib/assets/titles/FeaturesTitle.svelte";
  import { app } from "$lib/state/app.svelte";

  const { features } = $props();

  let titleContainer;
  let title;
  let list;
  
  $effect(() => {
    if (!app.ready) return;
    
    const ease = CustomEase.create("custom", "0.76, 0, 0.24, 1");

    gsap.to(title, {
      scrollTrigger: {
        trigger: titleContainer,
        start: "top bottom-=200px",
        end: "bottom top",
      },
      y: 0,
      duration: 1,
      ease,
    });

    gsap.to(Object.values(list.children), {
      scrollTrigger: {
        trigger: list,
        start: "top bottom",
        end: "bottom top",
      },
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease,
      stagger: 0.1,
    });
  });
</script>

<div class="features">
  <div class="title" bind:this={titleContainer}>
    <div class="content" bind:this={title}>
      <FeaturesTitle />
    </div>
  </div>
  <ul class="list" bind:this={list}>
    {#each features as f}
      <li class="item grid">
        <div class="label">{f.label}</div>
        <ul class="value">
          {#each f.values as v}
            <li>{v}</li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</div>

<style>

  .features {
    display: flex;
    flex-direction: column;
    gap: 64px;
    max-width: 100vw;
  }

  :global(.work .hero .scroll-indicator svg) {
    display: block;
    height: 32px;
  }

  :global(.work .hero .scroll-indicator path) {
    stroke: var(--foreground);
  }

  li {
    list-style-type: none;
  }

  .title {
    margin: 64px 0 64px 0;
    overflow-y: hidden;
  }

  .title .content {
    transform: translateY(100%);
  }

  :global(.work .features .title svg) {
    width: 100%;
  }

  :global(.work .features .title path) {
    fill: var(--foreground);
  }

  .item {
    border-top: 1px solid var(--foreground);
    padding: 32px 0;
    transform: translateX(100%);
    opacity: 0;
  }

  .item .value {
    grid-column: 3 / 5;
  }

  @media (width <= 1000px) {
    .item {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .item .label {
      font-weight: bold;
    }
  }
</style>
