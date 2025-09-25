<script>
  import Header from "$lib/components/header/Header.svelte";
  import Footer from "$lib/components/footer/Footer.svelte";
  import PageTransition from "$lib/components/page-transition/PageTransition.svelte";
  import Menu from "$lib/components/menu/Menu.svelte";
	
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { ScrollSmoother } from "gsap/ScrollSmoother";
	import { SplitText } from "gsap/SplitText";
  import { CustomEase } from "gsap/CustomEase";
  import { page } from "$app/state";
  import { onMount, untrack } from "svelte";
  import { onNavigate } from "$app/navigation";
  import { app } from "$lib/states/app.svelte";

	import "./global.css";
  import FooterShadow from "$lib/components/cta/Shadow.svelte";

	let { children } = $props();
	let refreshFooter = $state();

	gsap.registerPlugin(
		ScrollTrigger,
		ScrollSmoother,
		SplitText,
		CustomEase,
	);

	onMount(() => {
		ScrollSmoother.create({
      smooth: 1,
      effects: true
    });
		
		document.fonts.ready.then(() => {
			app.fonts.ready = true;
		});
	});

	$effect(() => {
		app.navigation.inProcess;
		untrack(() => {
			if (!app.navigation.inProcess) refreshFooter = !refreshFooter;
		})
	})

  onNavigate(async ({ from, to }) => {
		// In case when the query ?=<...> is changed
		if (from.url.pathname === to.url.pathname) return;
		app.navigation.inProcess = true;
		app.navigation.from = from.url;
		app.navigation.to = to.url;
		await new Promise(resolve => setTimeout(resolve, app.loadingTransitionMS));
		ScrollSmoother.get().scrollTo(0, false);
		return;
  });
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<title>Vinc3w</title>
</svelte:head>

<Header />

<div id="smooth-wrapper">
	<div id="smooth-content">
		<main>
			{@render children?.()}
			<FooterShadow />
		</main>
		{#key refreshFooter}
			<Footer />
		{/key}
	</div>
</div>

<PageTransition />
<Menu />
