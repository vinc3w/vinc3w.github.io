<script>
  import header from "$lib/state/header.svelte";
  import gsap from "gsap";
  import CustomEase from "gsap/CustomEase";
  import { untrack } from "svelte";
  import { breakPoints } from "$lib/contants/styles";

  let svg;
  let path;
  let isInitial = $state(true);
  let windowWidth = $state(0);
  let containerHeight = $derived(windowWidth <= breakPoints.horizontalCurve ? 3 : 6); // rem
  let initialPath = $derived(`M0 0 Q${windowWidth / 2} 0 ${windowWidth} 0`);
  let targetPath = $derived(`M0 0 Q${windowWidth / 2} ${containerHeight * 16} ${windowWidth} 0`);

  $effect(() => {
    header.showMenu;

    if (untrack(() => isInitial)) {
      isInitial = false;
      return;
    }

    const ease = CustomEase.create("custom", "0.76, 0, 0.24, 1");

    gsap.timeline({
      onStart: () => {
        svg.style.display = "";
      },
      onComplete: () => {
        svg.style.display = "none";
      },
    })
    .to(path, {
      attr: { d: initialPath },
      duration: 0,
    })
    .to(path, {
      attr: { d: targetPath },
      duration: 0.3,
      ease,
    })
    .to(path, {
      attr: { d: initialPath },
      duration: 0.3,
      ease,
    });
  });
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="container" style:--containerHeight={containerHeight + "rem"}>
  <svg bind:this={svg} style:display="none">
    <path bind:this={path}></path>
  </svg>
</div>

<style>
  .container {
    position: absolute;
    left: 0;
    top: calc(100% - 0.0625rem);
    height: 0;
    width: 100%;
  }

  svg {
    height: var(--containerHeight);
    width: 100%;
  }
</style>
