<script>
  import gsap from "gsap";
  import CustomEase from "gsap/CustomEase";
  import { app } from "$lib/states/app.svelte";

  let { position="top" } = $props();

  let svg;
  let path;
  let isOnMount = true;

  $effect(() => {
    app.navigation.inProcess;
    
    if (isOnMount) return isOnMount = false;

    const height = svg.clientHeight;
    const width = window.innerWidth;
    const ease = CustomEase.create("custom", "0.76, 0, 0.24, 1");

    if (position === "top") {
      const initialPath = `M 0 ${height} Q ${width / 2} ${height} ${width} ${height}`;
      const targetPath = `M 0 ${height} Q ${width / 2} 0 ${width} ${height}`;

      gsap.timeline()
      .to(path, {
        attr: { d: initialPath },
        duration: 0,
      })
      .to(path, {
        attr: { d: targetPath },
        duration: 0.6,
        ease,
      })
      .to(path, {
        attr: { d: initialPath },
        duration: 0.4,
        ease,
      });
    } else {
      const initialPath = `M 0 0 Q ${width / 2} 0 ${width} 0`;
      const targetPath = `M 0 0 Q ${width / 2} ${height} ${width} 0`;

      gsap.timeline()
      .to(path, {
        attr: { d: initialPath },
        duration: 0,
      })
      .to(path, {
        attr: { d: targetPath },
        duration: 0.4,
        ease,
      })
      .to(path, {
        attr: { d: initialPath },
        duration: 0.6,
        ease,
      });
    }
  });
</script>

<div class={`curve-container ${position}`} >
  <svg bind:this={svg}>
    <path bind:this={path} />
  </svg>
</div>

<style>
  .curve-container {
    position: relative;
    width: 100%;
  }

  svg {
    position: absolute;
    width: 100%;
    height: 80px;
  }

  .curve-container.top svg {
    bottom: 0;
    left: 0;
  }

  .curve-container.bottom svg {
    top: 0;
    left: 0;
  }

  path {
    fill: var(--black);
  }

  @media (width <= 800px) {
    svg {
      height: 40px;
    }
  }
</style>
