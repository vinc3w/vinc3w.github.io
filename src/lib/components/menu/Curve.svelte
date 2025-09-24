<script>
  import gsap from "gsap";
  import CustomEase from "gsap/CustomEase";
  
  import { menu } from "$lib/states/menu.svelte";

  const height = 80;

  let path;
  let isOnMount = true;

  $effect(() => {
    menu.show;

    if (isOnMount) return isOnMount = false;

    const width = window.innerWidth;
    const initialPath = `M 0 0 Q ${width / 2} 0 ${width} 0`;
    const targetPath = `M 0 0 Q ${width / 2} ${height} ${width} 0`;
    const ease = CustomEase.create("custom", "0.76, 0, 0.24, 1");

    gsap.timeline()
    .to(path, {
      attr: { d: initialPath },
      duration: 0,
    })
    .to(path, {
      attr: { d: targetPath },
      duration: menu.show ? 0.6 : 0.4,
      ease,
    })
    .to(path, {
      attr: { d: initialPath },
      duration: menu.show ? 0.4 : 0.6,
      ease,
    });
  });
</script>

<div class="curve-container">
  <svg class="curve" style:height={height + "px"}>
    <path bind:this={path} />
  </svg>
</div>

<style>
  .curve-container {
    position: relative;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  path {
    fill: var(--black);
  }
</style>
