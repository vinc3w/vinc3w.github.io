<script>
  import TextReveal from "$lib/components/text-reveal/TextReveal.svelte";
  import AboutTitle from "./AboutTitle.svelte";
  import MeJpg from "./me.jpg";
  import gsap from "gsap";
  import ParallaxImage from "$lib/components/parallax-image/ParallaxImage.svelte";

  import { onMount } from "svelte";
  import { app } from "$lib/states/app.svelte";

  let hero;
  let aboutText;
  let aboutTextContainer;
  let front;
  let frontWrapper;
  let meImageContainer;

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
    
    gsap.from(aboutText, {
      autoAlpha: 0,
      y: "100%",
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      delay,
    });
  
    gsap.from(meImageContainer, {
      autoAlpha: 0,
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: "power4.out",
      scrollTrigger: {
        trigger: meImageContainer,
        start: "top bottom",
      },
    });
  });
</script>


<div bind:this={hero} class="hero">
  <div class="start">
    <div class="about-text-container">
      <div bind:this={aboutText} class="about-text">
        <AboutTitle />
      </div>
    </div>
  </div>
  <div class="end grid-layout">
    <div class="text">
      <TextReveal duration={0.6} stagger={0.02}>
        My name is Vincent Har and I am a Software Engineer based in Selangor, Malaysia.
      </TextReveal>
    </div>
    <div bind:this={meImageContainer} class="me-image-container">
      <ParallaxImage src={MeJpg} alt="me" aspectRatio="4 / 5" />
    </div>
  </div>
</div>

<style>
  .hero {
    padding: 0 var(--x-padding) 128px var(--x-padding);
  }

  .start {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .about-text-container {
    overflow-y: hidden;
    width: 100%;
  }

  .about-text {
    width: 100%;
    visibility: hidden;
  }

  .text {
    grid-column: span 4;
    font-size: 24px;
  }

  .me-image-container {
    grid-column: 7 / span 6;
    width: 100%;
    visibility: hidden;
  }

  @media (width <= 1000px) {
    .text {
      grid-column: span 6;
    }
  }

  @media (width <= 750px) {
    .end {
      display: flex;
      flex-direction: column-reverse;
      gap: 64px;
    }
  }
</style>
