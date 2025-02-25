<script>
  import gsap from "gsap";
  import CustomEase from "gsap/dist/CustomEase";
  import TimelineTitle from "$lib/assets/titles/TimelineTitle.svelte";
  import about from "$lib/data/about";
  import { formatDateRange } from "$lib/utils/date";
  import { app } from "$lib/state/app.svelte";

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
      duration: 1.2,
      ease,
      stagger: 0.1,
    });
  });
</script>

<div class="timeline">
  <div class="title" bind:this={titleContainer}>
    <div class="content" bind:this={title}>
      <TimelineTitle />
    </div>
  </div>
  <ul class="list" bind:this={list}>
    {#each about.timeline as t}
      <li class="item grid">
        <div>{t.company || t.school}</div>
        <div>{t.role || t.course}</div>
        <div>{formatDateRange(t.duration.from, t.duration.to)}</div>
        <div>{t.type}</div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .title {
    overflow-y: hidden;
  }

  .title .content {
    transform: translateY(100%);
  }

  :global(.about .timeline svg) {
    width: 100%;
  }

  :global(.about .timeline path) {
    fill: var(--foreground);
  }

  .timeline .list {
    margin: 128px 0 64px 0;
  }

  .timeline .item {
    border-top: 1px solid var(--foreground);
    padding: 32px 0;
    transform: translateX(100%);
    opacity: 0;
  }

  .timeline .item:last-of-type {
    border-bottom: 1px solid var(--foreground);
  }
</style>
