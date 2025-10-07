<script>
  import TextReveal from "$lib/components/text-reveal/TextReveal.svelte";
  import AboutTitle from "./AboutTitle.svelte";
  import MeJpg from "./me.jpg";
  import Me1920x1080Jpg from "./me-1920x1080.jpg";
  import gsap from "gsap";
  import ParallaxImage from "$lib/components/parallax-image/ParallaxImage.svelte";

  import { onMount } from "svelte";
  import { app } from "$lib/states/app.svelte";
  import { role } from "$lib/data/about";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  let hero;
  let bg;
  let aboutText;

  const delay = (app.loadingTransitionMS / 2 + app.loadingDurationMS) / 1000;

  onMount(() => {
    gsap.to(hero, {
      y: 256,
      scrollTrigger: {
        trigger: hero,
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    ScrollTrigger.create({
      trigger: bg,
      start: "top top",
      end: "bottom top",
      pin: true,
    });

    gsap.from(aboutText, {
      autoAlpha: 0,
      y: "100%",
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      delay,
    });
  });
</script>


<div bind:this={hero} class="hero">
  <img bind:this={bg} src={Me1920x1080Jpg} alt="self" class="bg">
  <div class="about-text-container">
    <div bind:this={aboutText} class="about-text">
      <AboutTitle fill="white" />
    </div>
  </div>
</div>

<style>
  .hero {
    padding: 0 var(--x-padding);
    padding-bottom: calc(100vh + 64px);
    min-height: 200vh;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  .about-text-container {
    overflow-y: hidden;
    width: 100%;
  }

  .about-text {
    width: 100%;
    visibility: hidden;
  }
</style>
