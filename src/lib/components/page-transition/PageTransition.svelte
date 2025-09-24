<script>
  import Curve from "./Curve.svelte";
  import gsap from "gsap";
  import CustomEase from "gsap/CustomEase";

  import { page } from "$app/state";
  import { onMount } from "svelte";
  import { app } from "$lib/states/app.svelte";
  import { getToPageName } from "$lib/utils/url";

  let pageTransition;
  let isOnMount = true;

  $effect(() => {
    app.navigation.inProcess;

    if (isOnMount) return isOnMount = false;

    gsap.to(pageTransition, {
      y: app.navigation.inProcess ? 0 : "-100%",
      duration: app.loadingTransitionMS / 1000,
      ease: CustomEase.create("custom", "0.76, 0, 0.24, 1"),
      onStart: () => document.body.style.overflow = "hidden",
      onComplete: () => {
        if (!app.navigation.inProcess)  {
          gsap.to(pageTransition, {
            y: "100%",
            duration: 0,
            onComplete: () => document.body.style.overflow = "initial",
          });
        }
      },
    });
  });
</script>

<div bind:this={pageTransition} class="page-transition">
  <Curve />
  <div class="name">{getToPageName(app.navigation.to || page.url.href)}</div>
  <Curve position="bottom" />
</div>

<style>
  .page-transition {
    position: fixed;
    inset: 0 0 0 0;
    z-index: 1100;
    background-color: var(--black);
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .name {
    font-size: 48px;
    height: fit-content;
  }
</style>
