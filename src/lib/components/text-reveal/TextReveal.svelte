<script>
  import gsap from "gsap";
  import { SplitText } from "gsap/SplitText";
  import { app } from "$lib/states/app.svelte";

  let { trigger, duration=1, stagger=0, delay, children } = $props();

  let textRevealContainer;

  $effect(() => {
    if (!app.fonts.ready) return;

    const split = SplitText.create(textRevealContainer, {
      type: "words",
      mask: "words",
      wordsClass: "word",
    });

    textRevealContainer.style.opacity = 1;

    const options = {
      y: "100%",
      opacity: 0,
      duration,
      stagger,
    }

    // delay does not work with scrollTrigger
    if (delay) {
      options.delay = delay;
    } else {
      options.scrollTrigger = {
        trigger: trigger || textRevealContainer,
        start: "top bottom",
      };
    }

    gsap.from(split.words, options);
  });
</script>

<div bind:this={textRevealContainer} class="text-reveal-container">
  {@render children?.()}
</div>

<style>
  .text-reveal-container {
    opacity: 0;
  }
</style>
