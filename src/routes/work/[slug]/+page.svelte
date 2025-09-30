<script>
  import PageSetup from "$lib/components/page-setup/PageSetup.svelte";
  import Hero from "./components/hero/Hero.svelte";
  import Info from "./components/info/Info.svelte";
  import Gallery from "./components/gallery/Gallery.svelte";
  import Next from "./components/next/Next.svelte";
  import CTA from "$lib/components/cta/CTA.svelte";
  import FooterShadow from "$lib/components/footer/Shadow.svelte";
  
  import { setupPage } from "$lib/utils/app";
  import { app } from "$lib/states/app.svelte";
  import { untrack } from "svelte";

  let { data } = $props();
  let resetPageTarget = $state();

  $effect(() => {
    // set navigating as false when page is changed from
    // one work to another
    // this change is not detected by PageSetup as it still
    // uses the same onMount function
    data;
    setupPage();
  });

  $effect(() => {
    // refresh page only when page has finished loading
    app.navigation.inProcess;
    untrack(() => {
      if (!app.navigation.inProcess) resetPageTarget = !resetPageTarget;
    });
  });
</script>

<svelte:head>
	<title>{data.name} | Work | Vinc3w</title>
</svelte:head>

{#key resetPageTarget}
  <Hero {data} />
  <Info {data} />
  <Gallery {data} />
  <Next {data} />
{/key}
<CTA />
<FooterShadow />
