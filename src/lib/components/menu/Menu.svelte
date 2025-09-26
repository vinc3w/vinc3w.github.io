<script>
  import gsap from "gsap";
  import Curve from "./Curve.svelte";
  import CustomEase from "gsap/CustomEase";

  import { EMAIL_LINK } from "$lib/data/links";
  import { ABOUT_ROUTE, HOME_ROUTE, WORK_ROUTE } from "$lib/data/routes";
  import { page } from "$app/state";
  import { handleLinkClick } from "$lib/utils/url";
  import { app } from "$lib/states/app.svelte";

  const ease = CustomEase.create("custom", "0.76, 0, 0.24, 1");

  let nav;
  let backdrop;
  let links = $state([]);
  let currentPage = $derived(page.url.pathname.split("/")[1]);
  let isOnMount = true;

  $effect(() => {
    app.menu.show;

    if (isOnMount) return isOnMount = false;

    if (app.menu.show) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "initial";

    gsap.to(nav, {
      y: app.menu.show ? 0 : "-100%",
      duration: 1,
      ease,
      onStart: () => app.menu.isOpen = true,
      onComplete: () => !app.menu.show && (app.menu.isOpen = false),
    });

    gsap.to(backdrop, {
      opacity: app.menu.show ? 0.2 : 0,
      duration: 1,
      ease,
      onStart: () => backdrop.style.display = "initial",
      onComplete: () => backdrop.style.display = "none",
    });

    links.forEach(link => link.onclick = () => {
      app.menu.show = false;
    });
  });
</script>

<nav bind:this={nav} class="menu">
  <ul>
    <li>
      <a
        bind:this={links[0]}
        onclick={e => handleLinkClick(e, HOME_ROUTE)}
        href={HOME_ROUTE}
        class:current={currentPage.toLowerCase() === ""}
      >
        Home
      </a>
    </li>
    <li>
      <a
        bind:this={links[1]}
        onclick={e => handleLinkClick(e, WORK_ROUTE)}
        href={WORK_ROUTE}
        class:current={currentPage.toLowerCase() === "work"}
      >
        Work
      </a>
    </li>
    <li>
      <a
        bind:this={links[2]}
        onclick={e => handleLinkClick(e, ABOUT_ROUTE)}
        href={ABOUT_ROUTE}
        class:current={currentPage.toLowerCase() === "about"}
      >
        About
      </a>
    </li>
    <li>
      <a
        bind:this={links[3]}
        href={EMAIL_LINK}
        target="_blank"
      >
        Contact
      </a>
    </li>
  </ul>
  <Curve />
</nav>
<div bind:this={backdrop} class="backdrop"></div>

<style>
  .menu {
    position: fixed;
    inset: 0 0 0 0;
    z-index: 900;
    background-color: var(--menu-bg);
    transform: translateY(-100%);
  }

  ul {
    height: 100%;
    padding: 128px var(--x-padding);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 24px;
  }
  
  a {
    display: block;
    color: var(--black);
    text-transform: uppercase;
    font-size: 80px;
    font-weight: bold;
    line-height: 100%;
    opacity: 0.5;
    width: fit-content;
    transition: opacity 70ms linear;
  }

  a.current,
  a:hover {
    opacity: 1;
  }

  .backdrop {
    position: fixed;
    inset: 0 0 0 0;
    z-index: 800;
    background-color: var(--black);
    opacity: 0;
    display: none;
  }

  @media (width <= 800px) {
    ul {
      padding-bottom: 64px;
    }

    a {
      font-size: 64px;
    }
  }

  @media (width <= 550px) {
    ul {
      padding-bottom: 64px;
      gap: 16px;
    }

    a {
      font-size: 48px;
    }
  }
</style>
