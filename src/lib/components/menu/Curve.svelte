<script>
  import gsap from "gsap";
  import CustomEase from "gsap/CustomEase";
  import { app } from "$lib/states/app.svelte";
  
  let svg;
  let path;
  let isOnMount = true;

  $effect(() => {
    app.menu.show;

    if (isOnMount) return isOnMount = false;

    const height = svg.clientHeight;
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
      duration: app.menu.show ? 0.6 : 0.4,
      ease,
    })
    .to(path, {
      attr: { d: initialPath },
      duration: app.menu.show ? 0.4 : 0.6,
      ease,
    });
  });
</script>

<div class="curve-container">
  <svg bind:this={svg}>
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
    height: 80px;
  }

  path {
    fill: var(--menu-bg);
  }

  @media (width <= 800px) {
    svg {
      height: 40px;
    }
  }
</style>
