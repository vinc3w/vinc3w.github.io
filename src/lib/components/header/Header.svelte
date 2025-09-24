<script>
  import gsap from "gsap";
  
  import { HOME_ROUTE } from "$lib/data/routes";
  import { menu } from "$lib/states/menu.svelte";
  import { ScrollSmoother } from "gsap/ScrollSmoother";
  import { goto } from "$app/navigation";
  import { handleLinkClick } from "$lib/utils/url";

  const startDuration = 0.1;
  const endDuration = 0.2;

  let hamburger;
  let isOnMount = true;

  function toggleMenu() {
    menu.show = !menu.show;
  }

  $effect(() => {
    menu.show;

    if (isOnMount) return isOnMount = false;

    if (menu.show) {
      gsap.to(hamburger.children[0], {
        keyframes: [
          { y: 4, duration: startDuration },
          { rotate: 45, duration: endDuration },
        ],
      });
      gsap.to(hamburger.children[1], {
        keyframes: [
          { y: -4, duration: startDuration },
          { rotate: -45, duration: endDuration },
        ],
      });
    } else {
      gsap.to([...hamburger.children], {
        keyframes: [
          { rotate: 0, duration: startDuration },
          { y: 0, duration: endDuration },
        ],
      });
    }
  });
</script>

<header>
  <a onclick={e => handleLinkClick(e, HOME_ROUTE)} href={HOME_ROUTE}>vinc3w</a>
  <button
    bind:this={hamburger}
    class="hamburger"
    aria-label="toggle menu"
    onclick={toggleMenu}
  >
    <div class="line"></div>
    <div class="line"></div>
  </button>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 64px var(--x-padding);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    mix-blend-mode: difference;
  }

  a {
    color: var(--white);
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
  }

  .line {
    width: 25px;
    height: 2px;
    background-color: var(--white);
  }
</style>
