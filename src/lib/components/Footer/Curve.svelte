<script>
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { breakPoints, colors } from "$lib/contants/styles";
  import { page } from "$app/state";

  let svg;
  let path;
  let windowWidth = $state(0);
  const containerHeight = $derived(windowWidth <= breakPoints.horizontalCurve ? 3 : 6); // rem
  let initialPath = $derived(`M0 0 Q${windowWidth / 2} 0 ${windowWidth} 0`);
  let targetPath = $derived(`M0 0 Q${windowWidth / 2} ${containerHeight * 16 * 2} ${windowWidth} 0`);

  $effect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        endTrigger: document.getElementsByTagName("footer")[0],
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    })
    .to(path, {
      attr: {
        d: initialPath
      },
      onUpdate: () => {
        svg.style.display = "";
      },
      onComplete: () => {
        svg.style.display = "none";
      }
    });

    return () => {
      timeline.kill();
    }
  });

  $effect(() => {
    page.url;
    return () => {
      ScrollTrigger.refresh();
    }
  });
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="container">
  <svg bind:this={svg} style:--containerHeight={containerHeight + "rem"}>
    <path bind:this={path} fill={colors.BACKGROUND} d={targetPath}></path>
  </svg>
</div>

<style>
  .container {
    position: relative;
    width: 100vw;
    z-index: 10;
  }

  svg {
    position: absolute;
    top: -0.0625rem;
    left: 0;
    height: var(--containerHeight);
  }
</style>
