<script>
  import gsap from "gsap";
  import CustomEase from "gsap/dist/CustomEase";
  import StudioTitleAnim from "$lib/components/StudioTitleAnim.svelte";
  import ArrowDown from "$lib/assets/icons/ArrowDown.svelte";
  import about from "$lib/data/about";
  import Link from "$lib/components/Link.svelte";
  import { ABOUT } from "$lib/constant/routes";
  import { onMount } from "svelte";

  let start;

  onMount(() => {
    const ease = CustomEase.create("custom", "0.76, 0, 0.24, 1");

    gsap.to(start, {
      y: 0,
      opacity: 0.5,
      duration: 0.5,
      ease,
      delay: 0.8,
    });
  });
</script>

<div class="hero">
  <StudioTitleAnim />
  <div class="start grid" bind:this={start}>
    <div class="content">
      <div class="role">{about.role}</div>
      <div class="location">Based in {about.based.primary}</div>
      <div class="about">
        <Link href={ABOUT}>[More About Me]</Link>
      </div>
    </div>
  </div>
  <div class="end grid">
    <div class="message">Helping you turn ideas into reality</div>
    <div class="next-section-title">My Works</div>
    <div class="scroll-indicator">
      <ArrowDown />
    </div>
  </div>
</div>

<style>
  .hero {
    padding: 32px var(--main-padding);
    height: calc(100vh - (16px * 1.5 + 64px));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .start {
    margin-bottom: auto;
    opacity: 0;
    transform: translateY(32px);
  }

  .start .content {
    grid-column: 3 / 5;
  }

  .role {
    font-size: 32px;
  }

  .about {
    display: block;
    margin-top: 64px;
  }

  .next-section-title {
    grid-column: 3 / 4;
  }

  .scroll-indicator {
    grid-column: 4 / 5;
    place-self: start end;
    animation: hover-vertical 2s linear infinite;
  }

  :global(.hero .scroll-indicator svg) {
    height: 32px;
  }

  :global(.hero .scroll-indicator path) {
    stroke: var(--foreground);
  }
  
  @keyframes hover-vertical {
    0% {
      transform: translateY(-10%);
    }
    50% {
      transform: translateY(10%);
    }
    100% {
      transform: translateY(-10%);
    }
  }
</style>
