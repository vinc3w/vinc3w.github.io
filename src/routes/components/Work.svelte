<script>
  import gsap from "gsap";
  import CustomEase from "gsap/dist/CustomEase";
  import work from "$lib/data/work";
  import Link from "$lib/components/Link.svelte";
  import { WORK } from "$lib/constant/routes";
  import { getYearFromRange } from "$lib/utils/date";
  import { formatTitleToSlug } from "$lib/utils/general";
  import { app } from "$lib/state/app.svelte";
  import ArrowRight from "$lib/assets/icons/ArrowRight.svelte";

  const works = $state([]);

  $effect(() => {
    if (!app.ready) return;
    
    const ease = CustomEase.create("custom", "0.76, 0, 0.24, 1");
    
    works.forEach(w => {
      gsap.to(w, {
        scrollTrigger: {
          trigger: w,
          start: "top+=100px bottom",
          end: "bottom top",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease,
      });
    });
  });
</script>

<div class="work">
  {#each work as w, i}
    <div class="item" bind:this={works[i]}>
      <Link href={`${WORK}/${formatTitleToSlug(w.title)}`}>
        <div class="start">
          <div class="title">
            <div>{w.title}</div>
            <div class="icon">
              <ArrowRight />
            </div>
          </div>
          <div>{getYearFromRange(w.duration.to, w.duration.from)}</div>
        </div>
        <img src={w.image} alt="work">
      </Link>
    </div>
  {/each}
</div>

<style>
  .work {
    padding: 0 var(--main-padding);
    padding-bottom: 128px;
    display: flex;
    flex-direction: column;
    gap: 64px;
  }

  .item {
    border-top: 1px solid var(--foreground);
    transform: translateY(64px);
    opacity: 0;
  }

  .start {
    margin: 16px 0;
    display: flex;
    justify-content: space-between;
  }

  .start .title {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .start .title .icon {
    display: grid;
    place-items: center;
  }

  :global(.work .start .title svg) {
    height: 24px;
  }

  :global(.work .start .title path) {
    stroke: var(--foreground);
  }

  img {
    aspect-ratio: 16 / 9;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  .work .item:hover .icon {
    animation: hover-vertical 2s infinite linear;
  }

  @keyframes hover-vertical {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(8px);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
