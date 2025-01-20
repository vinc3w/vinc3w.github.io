<script>
  import CustomEase from "gsap/CustomEase";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import ScrollToPlugin from "gsap/ScrollToPlugin";
  import Header from "$lib/components/Header/Header.svelte";
  import Footer from "$lib/components/Footer/Footer.svelte";
  import RouteCover from "$lib/components/RouteCover/RouteCover.svelte";
  import Cursor from "$lib/components/Cursor/Cursor.svelte";
  import { gsap } from "gsap";
  import { PUBLIC_ENVIRONMENT } from '$env/static/public';
  import "./global.css";

  const { children } = $props();

  gsap.registerPlugin(CustomEase, ScrollToPlugin, ScrollTrigger);

  $effect.pre(() => {
    if (PUBLIC_ENVIRONMENT !== "PROD") return;

    document.body.style.userSelect = "none";
    document.body.oncontextmenu = () => {
      return false;
    };
  });
</script>

<Header />
<div class="bottom">
  {@render children()}
  <div class="footer-container">
    <Footer />
  </div>
</div>
<RouteCover />
<Cursor />

<style>
  .bottom {
    min-height: calc(100vh - var(--header-height));
    display: flex;
    flex-direction: column;
  }

  .footer-container {
    margin-top: auto;
  }
</style>
