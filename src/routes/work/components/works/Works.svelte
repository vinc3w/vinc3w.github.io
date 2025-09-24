<script>
  import ParallaxImage from "$lib/components/parallax-image/ParallaxImage.svelte";
  import gsap from "gsap";

  import { page } from "$app/state";
  import { WORK_ROUTE } from "$lib/data/routes";
  import { works as worksData } from "$lib/data/works";
  import { encodeWorkName, handleLinkClick } from "$lib/utils/url";
  import { onMount } from "svelte";
  import { app } from "$lib/states/app.svelte";

  let filters = $state();
  let works = $state([]);
  let isOnMount = true;

  const delay = (app.loadingTransitionMS / 2 + app.loadingDurationMS) / 1000;

  $effect.pre(() => {
    filters = page.url.searchParams.get("filter")?.split(",") || [];
  });

  onMount(() => {
    gsap.from(works, {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: "power4.out",
      delay,
    });
  });

  $effect(() => {
    filters;
    
    if (isOnMount) {
      isOnMount = false;
      return;
    }

    const onComplete = () => {
      works.forEach((work, i) => {
        const show = !filters.length || worksData[i].tags.some(t => filters.includes(t));
        work.style.display = show ? "" : "none";
      });
      gsap.to(works, {
        scale: 1,
        opacity: 1,
        duration: 0.2,
        ease: "power4.out",
      });
    }

    gsap.to(works, {
      scale: 0.97,
      opacity: 0,
      duration: 0.2,
      ease: "power4.out",
      onComplete,
    });
  });
</script>

<div class="works">
  {#each worksData as work, i}
    {@const href = `${WORK_ROUTE}/${encodeWorkName(work.name)}`}
    <a
      bind:this={works[i]}
      onclick={e => handleLinkClick(e, href)}
      class="work"
      {href}
    >
      <ParallaxImage src={work.thumbnail} alt={work.name} aspectRatio="6 / 4" />
      <div class="info">
        <div class="name">{work.name}</div>
      </div>
    </a>
  {/each}
</div>

<style>
  .works {
    display: flex;
    flex-direction: column;
    gap: 64px;
    padding: 0 var(--x-padding);
  }

  .work {
    position: relative;
  }

  .info {
    position: absolute;
    inset: 0 0 0 0;
    background-color: var(--overlay-dark);
    color: var(--white);
    font-family: "FK Screamer";
    font-size: 80px;
    display: grid;
    place-items: center;
  }

  @media (width <= 600px) {
    .work .info {
      font-size: 48px;
    }
  }

  @media (width <= 400px) {
    .work .info {
      font-size: 32px;
    }
  }
</style>
