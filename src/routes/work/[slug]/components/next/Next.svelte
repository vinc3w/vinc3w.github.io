<script>
  import TextReveal from "$lib/components/text-reveal/TextReveal.svelte";
  import gsap from "gsap";
  
  import { WORK_ROUTE } from "$lib/data/routes";
  import { works } from "$lib/data/works";
  import { encodeWorkName, handleLinkClick } from "$lib/utils/url";
  import { onMount } from "svelte";
  import ParallaxImage from "$lib/components/parallax-image/ParallaxImage.svelte";

  let { data } = $props();
  let next;
  const href = `${WORK_ROUTE}/${encodeWorkName(data.next.name)}`;

  onMount(() => {
    gsap.from(next, {
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      ease: "power4.out",
      scrollTrigger: {
        trigger: next,
        start: "top bottom",
      },
    });
  });
</script>

<div bind:this={next} class="next">
  <a class="work" {href} onclick={e => handleLinkClick(e, href)}>
    <ParallaxImage src={data.next.thumbnail} alt={data.next.name} aspectRatio="6 / 4" />
    <div class="info">
      <div class="name">
        <TextReveal duration={0.6} stagger={0.02}>{data.next.name}</TextReveal>
      </div>
    </div>
  </a>
</div>

<style>
  .next {
    padding: 0 var(--x-padding);
  }

  .work {
    display: block;
    position: relative;
  }

  .info {
    position: absolute;
    inset: 0 0 0 0;
    background-color: var(--overlay-dark);
    color: var(--white);
    font-family: "FK Screamer", sans-serif;
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
