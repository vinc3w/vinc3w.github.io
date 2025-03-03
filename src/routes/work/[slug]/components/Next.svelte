<script>
  import gsap from "gsap";
  import CustomEase from "gsap/dist/CustomEase";
  import { WORK } from "$lib/constant/routes";
  import { formatTitleToSlug } from "$lib/utils/general";
  import { app } from "$lib/state/app.svelte";

  const { next } = $props();

  let container = $state();
  let title = $state();
  let keyword = $state();
  
  $effect(() => {
    if (!app.ready || !next) return;
    
    const ease = CustomEase.create("custom", "0.76, 0, 0.24, 1");

    gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top center+=200px",
        end: "bottom top",
      }
    })

    .to(title, {
      y: 0,
      duration: 0.8,
      ease,
    }, 0)

    .to(keyword, {
      y: 0,
      duration: 0.8,
      ease,
    }, 0);
  });
</script>

{#if next}
  <a
    href={`${WORK}/${formatTitleToSlug(next.title)}`}
    class="next"
    bind:this={container}
  >
    <div class="title-container">
      <div class="title">
        <span bind:this={title}>{next.title}</span>
      </div>
      <span class="keyword">
        <span bind:this={keyword}>Next</span>
      </span>
    </div>
    <img src={next.image} alt="next work">
  </a>
{/if}

<style>
  .next {
    margin-top: 64px;
    border-top: 1px solid var(--foreground);
  }

  .title-container {
    padding: 128px 0;
    display: flex;
    align-items: flex-end;
    gap: 32px;
  }

  .title-container .keyword {
    font-size: 32px;
    font-weight: normal;
    opacity: 0.5;
    line-height: 100%;
  }

  .title {
    font-size: 160px;
    font-weight: bold;
    line-height: 70%;
  }

  .title,
  .keyword {
    overflow-y: hidden;
  }

  .title span,
  .keyword span {
    display: block;
    transform: translateY(110%);
  }

  img {
    aspect-ratio: 16 / 9;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (width <= 1000px) {
    .title {
      font-size: 64px;
    }

    .keyword span {
      font-size: 16px;
    }
  }
</style>
