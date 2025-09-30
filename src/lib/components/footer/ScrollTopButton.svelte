<script>
  import UpArrow from "$lib/icons/UpArrow.svelte";
  import { ScrollSmoother } from "gsap/ScrollSmoother";

  function scrollToTop() {
    ScrollSmoother.get().scrollTo(0, true);
  }
</script>

<button class="scroll-top" onclick={scrollToTop}>
  <UpArrow width={20} />
</button>

<style>

  button.scroll-top {
    background-color: var(--overlay-light);
    border-radius: 100px;
    padding: 16px;
    height: fit-content;
    width: fit-content;
    cursor: pointer;
    color: var(--white);
    transition: opacity 100ms ease;
  }

  button.scroll-top:hover {
    opacity: 0.9;
    cursor: pointer;
  }
</style>
