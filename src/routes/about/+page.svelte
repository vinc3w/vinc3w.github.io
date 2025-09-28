<script>
  import PageSetup from "$lib/components/page-setup/PageSetup.svelte";
  import Hero from "./components/hero/Hero.svelte";
  import Bio from "./components/bio/Bio.svelte";
  import Expertises from "./components/expertises/Expertises.svelte";
  import Timeline from "./components/timeline/Timeline.svelte";
  import Philosophy from "./components/philosophy/Philosophy.svelte";
  import CtaDivider from "$lib/components/cta/CTADivider.svelte";
  import CTA from "$lib/components/cta/CTA.svelte";
  import FooterShadow from "$lib/components/footer/Shadow.svelte";
</script>

<svelte:head>
	<title>About Me | Vinc3w</title>
</svelte:head>

<PageSetup />

<Hero />
<Bio />
<Expertises />
<Timeline />
<Philosophy />
<CtaDivider />
<CTA />
<FooterShadow />
