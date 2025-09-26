<script>
  import PageSetup from "$lib/components/page-setup/PageSetup.svelte";
  import Hero from "./components/hero/Hero.svelte";
  import About from "./components/about/About.svelte";
  import Highlights from "./components/highlights/Highlights.svelte";
  import CTA from "$lib/components/cta/CTA.svelte";
  import FooterShadow from "$lib/components/footer/Shadow.svelte";
</script>

<svelte:head>
	<title>Vinc3w</title>
</svelte:head>

<PageSetup />

<Hero />
<About />
<Highlights />
<CTA />
<FooterShadow />
