<script>
  import gsap from "gsap";
  import CustomEase from "gsap/CustomEase";
  import Link from "./Link.svelte";
  import Curve from "./Curve.svelte";
  import ArrowUpRight from "$lib/assets/icons/ArrowUpRight.svelte";
  import ArrowRight from "$lib/assets/icons/ArrowRight.svelte";
  import header from "$lib/state/header.svelte";
  import CursorEffectElement from "../Cursor/CursorEffectElement.svelte";
  import { HOME, ABOUT, WORK, names } from "$lib/contants/routes";
  import { DISCORD, EMAIL_ADDRESS, GITHUB, INSTAGRAM, SPOTIFY } from "$lib/contants/socials";
  import { colors } from "$lib/contants/styles";
  import { page } from "$app/state";
  import { cursorElement } from "$lib/contants/cursor";
  import { untrack } from "svelte";
  import { linear } from "svelte/easing";

  let menu;
  let nav;
  let pageIndicator;
  let windowWidth = $state();
  let isInitial = $state(true);
  let isArrowMoving = $state(false);
  const widthBreakPoint = 50 * 16;
  const linkDuration = 0.2;
  const linkStagger = 0.1;
  const pathname = $derived(page.url.pathname);
  
  $effect(() => {
    const duration = 0.7;
    const ease = CustomEase.create("custom", "0.76, 0, 0.24, 1");

    gsap.to(menu, {
      y: header.showMenu ? 0 : "-100%",
      duration,
      ease,
      onStart: () => {
        menu.style.overflowY = "";
      },
      onComplete: () => {
        menu.style.overflowY = "auto";
      },
    });
  });

  $effect(() => {
    Object.values(nav.children).forEach((link, index) => {
      const href = new URL(link.querySelector("a").href).pathname;
      const isCurrentPage = untrack(() => pathname) === href;
      if (header.showMenu) {
        gsap.timeline()
        .to(link, {
          opacity: 0,
          y: -32,
          duration: 0,
        })
        .to(link, {
          opacity: isCurrentPage ? 1 : 0.5,
          y: 0,
          duration: linkDuration,
          delay: 0.4 + index * linkStagger,
        });
      } else {
        gsap.to(link, {
          opacity: 0,
          y: -32,
          duration: linkDuration,
          delay: index * linkStagger,
        });
      }
    });
  });

  $effect(() => {
    page.url;
    
    if (untrack(() => isInitial)) {
      isInitial = false;
      return;
    }

    Object.values(nav.children).forEach((link, index) => {
      const href = new URL(link.querySelector("a").href).pathname;
      const isCurrentPage = pathname === href;
      gsap.to(link, {
        opacity: isCurrentPage ? 1 : 0.5,
        duration: linkDuration,
      });
    });
  });

  $effect(() => {
    let index = -1;

    if (pathname === "/") {
      index = 0;
    } else if (pathname.startsWith("/work")) {
      index = 1;
    } else if (pathname === "/about") {
      index = 2;
    }

    const ease = CustomEase.create("custom", "0.76, 0, 0.24, 1");
    const linkClientHeight = windowWidth <= widthBreakPoint ? 60 : 145;
    const linkTop = linkClientHeight * index;
    const offset = (linkClientHeight / 2) - (pageIndicator.clientHeight / 2);

    if (untrack(() => isArrowMoving)) return;

    gsap.to(pageIndicator, {
      y: linkTop + offset,
      duration: 0.4,
      ease,
      onStart: () => {
        isArrowMoving = true;
      },
      onComplete: () => {
        isArrowMoving = false;
      },
    });
  });
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="menu" bind:this={menu}>
  <nav>
    <div class="arrow-container" bind:this={pageIndicator}>
      <ArrowRight
        fill={colors.BACKGROUND}
        size={windowWidth <= widthBreakPoint ? 3 : 6}
      />
    </div>
    <ul bind:this={nav}>
      <Link isCurrentPage={pathname === "/"} href={HOME}>Home</Link>
      <Link isCurrentPage={pathname.startsWith("/work")} href={WORK}>Work</Link>
      <Link isCurrentPage={pathname === "/about"} href={ABOUT}>About</Link>
      <Link href={"mailto:" + EMAIL_ADDRESS} target="_blank">
        Contact
        <ArrowUpRight
          fill={colors.BACKGROUND}
          size={windowWidth <= widthBreakPoint ? 3 : 8}
        />
      </Link>
    </ul>
  </nav>
  <Curve />
</div>

<style>
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
    z-index: 90;
    background-color: var(--foreground);
    display: grid;
    place-items: center;
    padding: 4rem 0;
    margin: auto 0;
    transform: translateY(-100%);
  }

  nav {
    position: relative;
  }

  .arrow-container {
    position: absolute;
    top: 0;
    left: -6rem;
    font-size: 0;
  }

  @media (width <= 50rem) {
    .arrow-container {
      left: -3rem;
    }
  }
</style>
