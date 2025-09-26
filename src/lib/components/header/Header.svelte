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
  header.menu-open a,
  header.menu-open .hamburger {
    mix-blend-mode: normal;
  }

  header.menu-open a {
    color: var(--black);
  }

  header.menu-open .hamburger .line {
    background-color: var(--black);
  }

  a, .hamburger {
    position: fixed;
    z-index: 1000;
    mix-blend-mode: difference;
  }

  a {
    color: var(--white);
    top: var(--header-y-padding);
    left: var(--x-padding);
  }

  .hamburger {
    /* + 7.5px to have "a" and ".hamburger" vertically align with each other */
    top: calc(var(--header-y-padding) + 7.5px);
    right: var(--x-padding);
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
