<script>
  import gsap from "gsap";
  import { onMount } from "svelte";

  let { color="black", children } = $props();

  let items = $state([]);
</script>

<div class="marquee-title">
  {#each Array(5) as _, i}
    <div class="marquee-item">
      <div class="title">
        {@render children?.()}
      </div>
      <div class="divider" style:background-color={`var(--${color})`}></div>
    </div>
  {/each}
</div>

<style>
  .marquee-title {
    --spacing: 80px;

    overflow-x: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    margin-left: calc(var(--x-padding) * -1);
  }

  .marquee-item {
    animation: marquee 20s linear infinite;
    padding-right: var(--spacing);
    display: flex;
    align-items: center;
    gap: var(--spacing);
  }

  .title {
    width: 70vw;
  }

  .divider {
    height: 30px;
    width: 30px;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @media (width <= 700px) {
    .marquee-title {
      --spacing: 48px;
    }

    .divider {
      height: 15px;
      width: 15px;
    }
  }

  @media (width <= 600px) {
    .title {
      width: 150vw;
    }
  }

  @media (width <= 400px) {
    .title {
      width: 100vw;
    }
  }
</style>
