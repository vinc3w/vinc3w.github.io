<script>
  import gsap from "gsap";
  
  import { HOME_ROUTE } from "$lib/data/routes";
  import { ScrollSmoother } from "gsap/ScrollSmoother";
  import { goto } from "$app/navigation";
  import { handleLinkClick } from "$lib/utils/url";
  import { app } from "$lib/states/app.svelte";

  const startDuration = 0.1;
  const endDuration = 0.2;

  let hamburger;
  let isOnMount = true;

  function toggleMenu() {
    app.menu.show = !app.menu.show;
  }

  $effect(() => {
    app.menu.show;

    if (isOnMount) return isOnMount = false;

    if (app.menu.show) {
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

<header class:menu-open={app.menu.isOpen}>
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
    padding: var(--header-y-padding) var(--x-padding);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    mix-blend-mode: difference;
  }

  header.menu-open {
    mix-blend-mode: normal;
  }

  header.menu-open a {
    color: var(--black);
  }

  header.menu-open .hamburger .line {
    background-color: var(--black);
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
