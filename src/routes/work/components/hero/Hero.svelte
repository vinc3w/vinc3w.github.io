<script>
  import RecentWorkTitle from "./RecentWorkTitle.svelte";
  import gsap from "gsap";

  import { tags } from "$lib/data/works";
  import { page } from "$app/state";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { app } from "$lib/states/app.svelte";

  const key = "filter";
  const delay = (app.loadingTransitionMS / 2 + app.loadingDurationMS) / 1000;

  let title;
  let buttons = $state([]);
  let params = $state();

  function hasFilter(value) {
    const filters = params?.get(key)?.split(",") || [];
    if (!filters.length && !value) return true;
    if (!filters.length) return false;
    if (filters.length && !value) return false;
    return filters.includes(value);
  }

  function toggleFilter(value) {
    if (!value) {
      params.delete(key);
    } else if (params.has("filter")) {
      const filters = params.get(key).split(",");
      if (filters.includes(value)) filters.splice(filters.indexOf(value), 1);
      else filters.push(value);
      const joined = filters.join(",");
      joined ? params.set(key, joined) : params.delete(key);
    } else {
      params.set(key, value);
    }
    goto(`?${params}`);
  }

  $effect.pre(() => {
    params = page.url.searchParams;
  });

  onMount(() => {
    gsap.from(title, {
      autoAlpha: 0,
      y: "100%",
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      delay,
    });

    gsap.to(buttons, {
      opacity: 1,
      ease: "power3.out",
      duration: 0.4,
      stagger: 0.04,
      delay,
    });
  });
</script>

<div class="hero">
  <div class="title-container">
    <div bind:this={title} class="title">
      <RecentWorkTitle />
    </div>
  </div>
  <div class="filters">
    {#each tags as tag, i}
      <button
        bind:this={buttons[i]}
        class:on={hasFilter(tag.value)}
        onclick={() => toggleFilter(tag.value)}
      >
        {tag.label}
      </button>
    {/each}
  </div>
</div>

<style>
  .hero {
    padding: 256px var(--x-padding) 128px var(--x-padding);
  }

  .title-container {
    overflow-y: hidden;
  }

  .title {
    visibility: hidden;
  }

  .filters {
    margin-top: 64px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .filters button {
    border: 2px solid var(--black);
    padding: 16px 24px;
    border-radius: 100px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 100ms ease-in-out;
    opacity: 0;
  }

  .filters button.on {
    background-color: var(--black);
    color: var(--white);
  }

  .filters button:hover {
    transform: scale(0.95);
  }

  @media (width <= 800px) {
    .filters {
      gap: 8px;
    }
  }
</style>
