<script>
  import ButtonLink from "$lib/components/button-link/ButtonLink.svelte";
  import PageSetup from "$lib/components/page-setup/PageSetup.svelte";
  import FooterShadow from "$lib/components/footer/Shadow.svelte";
  import gsap from "gsap";

  import { page } from "$app/state";
  import { HOME_ROUTE } from "$lib/data/routes";
  import { onMount } from "svelte";
  import { app } from "$lib/states/app.svelte";

  const delay = (app.loadingTransitionMS / 2 + app.loadingDurationMS) / 1000;
  let code;

  onMount(() => {
    gsap.from(code, {
      autoAlpha: 0,
      y: "100%",
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      delay,
    });
  });
</script>

<svelte:head>
	<title>Error | Vinc3w</title>
</svelte:head>

<PageSetup />

<div class="error">
  <div class="code-container">
    <div bind:this={code} class="code">404</div>
  </div>
  <div class="description">The page you are looking for does not exist or has been moved.</div>
  <ButtonLink href={HOME_ROUTE}>Back</ButtonLink>
</div>

<FooterShadow />

<style>
  .error {
    background-color: var(--white);
    padding: var(--header-height) var(--x-padding);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    min-height: 100vh;
    position: relative;
    z-index: 100;
  }

  .code-container {
    overflow-y: hidden;
  }

  .code {
    font-size: 384px;
    font-weight: 900;
    line-height: 100%;
    visibility: hidden;
  }

  .description {
    text-align: center;
  }

  @media (width <= 1000px) {
    .code {
      font-size: 128px;
    }
  }
</style>
