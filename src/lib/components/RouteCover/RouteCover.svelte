<script>
  import routes from "$lib/state/routes.svelte";
  import gsap from "gsap";
  import CustomEase from "gsap/CustomEase";
  import { untrack } from "svelte";
  import { goto } from "$app/navigation";

  let cover;
  let svgs = [];
  let paths = [];
  let isInitial = $state(true);
  const containerWidth = 6; // rem

  $effect(() => {
    routes.triggerCover;

    const ease = CustomEase.create("custom", "0.76, 0, 0.24, 1");
    const initialRightPath = `M0 0 Q0 ${window.innerHeight / 2} 0 ${window.innerHeight}`;
    const targetRightPath = `M0 0 Q${containerWidth * 16} ${window.innerHeight / 2} 0 ${window.innerHeight}`;
    const initialLeftPath = `M${containerWidth * 16} 0 Q${containerWidth * 16} ${window.innerHeight / 2} ${containerWidth * 16} ${window.innerHeight}`;
    const targetLeftPath = `M${containerWidth * 16} 0 Q0 ${window.innerHeight / 2} ${containerWidth * 16} ${window.innerHeight}`;

    if (untrack(() => isInitial)) {
      isInitial = false;
      return;
    }

    gsap.timeline()
    .to(cover, {
      x: "0%",
      duration: 0.7,
      ease,
      onComplete: () => {
        goto(routes.targetPage.href);
      }
    })
    .to(cover, { x: "100%", duration: 0.7, ease, delay: 0.7 });

    gsap.timeline({
      onStart: () => {
        svgs.forEach((_, index) => {
          svgs[index].style.display = "initial";
        });
      },
      onComplete: () => {
        svgs.forEach((_, index) => {
          svgs[index].style.display = "none";
        });
      },
    })
    .to(paths[1], { attr: { d: initialRightPath }, duration: 0 })
    .to(paths[1], { attr: { d: targetRightPath }, duration: 0.4, ease })
    .to(paths[1], { attr: { d: initialRightPath }, duration: 0.3, ease })
    .to(paths[0], { attr: { d: initialLeftPath }, duration: 0, delay: 0.7 })
    .to(paths[0], { attr: { d: targetLeftPath }, duration: 0.4, ease })
    .to(paths[0], { attr: { d: initialLeftPath }, duration: 0.3, ease });

    return () => {
      gsap.to(cover, { x: "-100%", duration: 0 });
    }
  });
</script>

<div class="cover" bind:this={cover} style:--container-width={containerWidth + "rem"}>
  <svg class="curve left" bind:this={svgs[0]}>
    <path bind:this={paths[0]}></path>
  </svg>
  <div class="page-name">{routes.targetPage.name}</div>
  <svg class="curve right" bind:this={svgs[1]}>
    <path bind:this={paths[1]}></path>
  </svg>
</div>

<style>
  .cover {
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;
    padding: 4rem;
    background-color: var(--foreground);
    z-index: 200;
    transform: translateX(-100%);
  }

  .page-name {
    font-size: 4rem;
    color: var(--background);
  }

  .curve {
    position: absolute;
    top: 0;
    height: 100vh;
    width: var(--container-width);
    display: none;
  }

  .curve.left {
    right: calc(100% - 0.0625rem);
  }

  .curve.right {
    left: calc(100% - 0.0625rem);
  }

  @media (width <= 50rem) {
    .page-name {
      font-size: 10vw;
    }
  }
</style>
