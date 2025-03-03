<script>
  import gsap from "gsap";
  import splt from "spltjs";
  import CustomEase from "gsap/dist/CustomEase";
  import about from "$lib/data/about";
  import { onMount } from "svelte";

  let bio;
  const bioLetters = [];

  onMount(() => {
    const ease = CustomEase.create("custom", "0.76, 0, 0.24, 1");

    splt({ reveal: true });

    gsap.timeline()
    .to(bio, {
      opacity: 1,
      duration: 0,
      delay: 0.6,
    })
    .to(".reveal", {
      y: 0,
      duration: 1,
      ease,
      stagger: 0.001,
    });
  });
</script>

<div class="bio" bind:this={bio}>
  <span class="spacer"></span>
  <span class="splt">{about.bio}</span>
</div>

<style>
  .bio {
    font-size: 32px;
    opacity: 0;
  }

  .bio .spacer {
    display: inline-block;
    width: 15%;
  }

  :global(.bio .reveal) {
    transform: translateY(100%);
  }

  @media (Width <= 1000px) {
    .bio {
      font-size: 16px;
    }
  }
</style>
