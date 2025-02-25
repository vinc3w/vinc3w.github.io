<script>
  import gsap from "gsap";
  import CustomEase from "gsap/CustomEase";
  import Link from "./Link.svelte";
  import { ABOUT, HOME } from "$lib/constant/routes";
  import { MAILTO } from "$lib/constant/socials";
  import { onMount } from "svelte";

  let header;

  onMount(() => {
    const ease = CustomEase.create("custom", "0.76, 0, 0.24, 1");

    gsap.to(header, {
      y: 0,
      duration: 1,
      ease,
    });
  });
</script>

<header class="grid" bind:this={header}>
  <a href={HOME} class="title">vinc3w</a>
  <nav>
    <ul>
      <li><Link href={HOME}>works</Link></li>
      <li><Link href={ABOUT}>about</Link></li>
      <li><a href={MAILTO} target="_blank">contact</a></li>
    </ul>
  </nav>
  <a class="lets-talk" href={MAILTO} target="_blank">Let's Talk</a>
</header>

<style>
  header {
    padding: 32px var(--main-padding);
    transform: translateY(-64px);
  }

  nav {
    grid-column: 3 / 4;
  }

  li {
    display: inline;
    margin-right: 8px;
  }

  .lets-talk {
    grid-column: 4 / 5;
    place-self: start end;
  }
</style>
