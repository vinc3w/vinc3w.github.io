<script>
  import CustomEase from "gsap/CustomEase";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { page } from "$app/state";
  import { onMount } from "svelte";
  import { app } from "$lib/state/app.svelte";
  import { afterNavigate } from "$app/navigation";
  import { PUBLIC_ENVIRONMENT } from '$env/static/public';
  import "./locomotive-scroll.css";
  import "./global.css";
  
  const { children } = $props();

  let cover;
  let container;
  let scroll = $state();

  gsap.registerPlugin(ScrollTrigger, CustomEase);

  const refreshScroll = () => {
    ScrollTrigger.refresh();
  }

  afterNavigate(() => {
    refreshScroll();
  });
  
  onMount(async () => {
    if (PUBLIC_ENVIRONMENT === "prod") {
      document.body.style.userSelect = "none";
      document.body.oncontextmenu = () => {
        return false;
      };
    }

    const LocomotiveScroll = (await import("locomotive-scroll")).default;
    scroll = new LocomotiveScroll({
      el: container,
      smooth: true,
    });

    ScrollTrigger.defaults({
      scroller: container,
      markers: false,
    });
    
    ScrollTrigger.scrollerProxy(container, {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: container.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => scroll.update() );
    ScrollTrigger.refresh();

    app.scroll = scroll;
    app.ready = true;
    app.cover = cover;

    window.addEventListener("resize", refreshScroll);

    return () => {
      window.removeEventListener("resize", refreshScroll);
    }
  });
</script>

<div class="cover" bind:this={cover}></div>
<div bind:this={container}>
  <Header />
  <main>
    {@render children()}
  </main>
  <Footer />
</div>

<style>
  .cover {
    position: fixed;
    inset: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--background);
    z-index: 1000;
    display: none;
  }
</style>
