<script>
  import PageSetup from "../page-setup/PageSetup.svelte";
  import UpArrow from "$lib/icons/UpArrow.svelte";
  import ButtonLink from "$lib/components/button-link/ButtonLink.svelte";
  import ContactText from "./ContactText.svelte";
  import gsap from "gsap";

  import {
    EMAIL_LINK,
    GITHUB_LINK,
    INSTAGRAM_LINK,
    LINKEDIN_LINK
  } from "$lib/data/links";
  import { onMount } from "svelte";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { ScrollSmoother } from "gsap/ScrollSmoother";

  let footer;
  let footerContent;
  let bigContactContainer;
  let bigContact;
  let boxShadow;

  function scrollToTop() {
    ScrollSmoother.get().scrollTo(0, true);
  }

  onMount(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: footer,
        start: "bottom bottom",
        end: "bottom+=100% bottom",
        pin: true,
      });

      gsap.to(footerContent, {
        y: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: footer,
          start: "bottom bottom",
          end: "bottom+=100% bottom",
          scrub: true,
        },
      });

      gsap.to(bigContact, {
        y: 0,
        duration: 5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: bigContactContainer,
          start: "top 50%",
        },
      });
    });

    return () => ctx.kill();
  });
</script>

<footer bind:this={footer}>
  <div bind:this={footerContent} class="footer-content">
    <div class="start">
      <section>
        <div class="contact">
          <div class="title">Let's Talk</div>
          <ButtonLink
            href={EMAIL_LINK}
            target="_blank"
            backgroundColor="overlay-light"
          >
            Email
          </ButtonLink>
        </div>
        <button class="scroll-top" onclick={scrollToTop}>
          <UpArrow width={20} />
        </button>
      </section>
      <section>
        <div class="title">Follow Me</div>
        <ul>
          <li><a href={INSTAGRAM_LINK} target="_blank">Instagram</a></li>
          <li><a href={LINKEDIN_LINK} target="_blank">LinkedIn</a></li>
          <li><a href={GITHUB_LINK} target="_blank">Github</a></li>
        </ul>
      </section>
      <button class="scroll-top" onclick={scrollToTop}>
        <UpArrow width={20} />
      </button>
    </div>
    <div class="end">
      <div bind:this={bigContactContainer} class="big-contact-container">
        <a bind:this={bigContact} class="big-contact" href={EMAIL_LINK} target="_blank">
          <ContactText fill="overlay-light" />
        </a>
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    height: calc(100vh - var(--header-height));
    overflow: hidden;
    /* For footer reveal animation */
    margin-top: calc((100vh - var(--header-height)) * -1);
    position: relative;
    z-index: -1;
  }

  .footer-content {
    height: 100%;
    background-color: var(--black);
    color: var(--white);
    padding: 128px var(--x-padding) 80px var(--x-padding);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 128px;
    transform: translateY(256px);
  }

  a,
  button {
    color: var(--white);
    transition: opacity 100ms ease;
  }

  .start {
    display: flex;
    gap: 128px;
  }

  .start section .title {
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .start section:first-of-type {
    display: flex;
    justify-content: space-between;
  }

  .start section:first-of-type button.scroll-top {
    display: none;
  }

  ul a:hover {
    opacity: 0.8;
  }

  button.scroll-top {
    margin-left: auto;
    background-color: var(--overlay-light);
    border-radius: 100px;
    padding: 16px;
    height: fit-content;
    cursor: pointer;
  }

  button.scroll-top:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  .end .big-contact-container {
    overflow-y: hidden;
  }

  .end .big-contact {
    opacity: 0.95;
    display: block;
    transform: translateY(-100%);
  }

  @media (width <= 600px) {
    .start {
      flex-direction: column;
      gap: 64px;
    }

    .start section .title {
      font-size: 24px;
    }

    .start section:first-of-type button.scroll-top {
      display: block;
    }

    .start > button.scroll-top {
      display: none;
    }
  }
</style>
