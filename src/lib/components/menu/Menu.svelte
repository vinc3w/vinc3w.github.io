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

  const linksData = [
    {
      label: "Home",
      href: HOME_ROUTE,
      pageName: "",
    },
    {
      label: "Work",
      href: WORK_ROUTE,
      pageName: "work",
    },
    {
      label: "About",
      href: ABOUT_ROUTE,
      pageName: "about",
    },
    {
      label: "Contact",
      href: EMAIL_LINK,
      target: "_blank",
    },
  ];

  $effect(() => {
    app.menu.show;

    if (isOnMount) return isOnMount = false;

    if (app.menu.show) {
      document.body.style.overflow = "hidden";
      gsap.to(links, {
        y: "-100%",
        opacity: 0,
        duration: 0,
        onComplete: () => links.toReversed().forEach((link, index) => gsap.to(link, {
          y: 0,
          opacity: (
            currentPage.toLowerCase() === linksData.toReversed()[index].pageName
              ? 1
              : 0.5
          ),
          duration: 0.6,
          ease: "power2.out",
          delay: 0.4 + (0.1 * index),
        })),
      });
    }
    else {
      document.body.style.overflow = "initial";
      gsap.to(links, {
        y: "-100%",
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    }

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

    links.forEach((link, index) => link.onclick = () => {
      if (linksData[index].target === "_blank") return;
      app.menu.show = false;
    });
  });
</script>

<nav bind:this={nav} class="menu">
  <ul>
    {#each linksData as link, i}
      <li>
        <a
          bind:this={links[i]}
          onclick={e => link.pageName && handleLinkClick(e, link.href)}
          href={link.href}
          target={link.target}
        >
          {link.label}
        </a>
      </li>
    {/each}
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
    padding: 80px var(--x-padding);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  li {
    overflow-y: hidden;
  }
  
  a {
    display: block;
    color: var(--black);
    text-transform: uppercase;
    font-size: 96px;
    font-family: "FK Screamer";
    letter-spacing: 2px;
    line-height: 100%;
    width: fit-content;
    transition: opacity 100ms ease-in-out;
  }

  a:hover {
    opacity: 1 !important;
  }

  .backdrop {
    position: fixed;
    inset: 0 0 0 0;
    z-index: 800;
    background-color: var(--black);
    opacity: 0;
    display: none;
  }

  @media (width <= 700px) {
    ul {
      padding-bottom: 48px;
    }
  }

  @media (width <= 500px) {
    a {
      font-size: 80px;
    }
  }
</style>
