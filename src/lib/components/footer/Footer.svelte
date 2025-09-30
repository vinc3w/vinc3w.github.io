<script>
  import PageSetup from "../page-setup/PageSetup.svelte";
  import ButtonLink from "$lib/components/button-link/ButtonLink.svelte";
  import ContactText from "./ContactText.svelte";
  import gsap from "gsap";
  import ScrollTopButton from "./ScrollTopButton.svelte";

  import {
    EMAIL_LINK,
    GITHUB_LINK,
    INSTAGRAM_LINK,
    LINKEDIN_LINK,
    WHATSAPP_LINK,
  } from "$lib/data/links";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { ScrollSmoother } from "gsap/ScrollSmoother";
  import { app } from "$lib/states/app.svelte";

  let footer;
  let footerContent;
  let bigContactContainer;
  let bigContact;
  let boxShadow;

  $effect(() => {
    if (!app.headerHeight) return;

    const ctx = gsap.context(() => {
      const headerChildren = [...document.getElementsByTagName("header")[0].children];
      gsap.to(headerChildren, {
        y: app.headerHeight * -1,
        scrollTrigger: {
          trigger: footer,
          start: `top ${app.headerHeight}px`,
          end: "top top",
          scrub: true,
        },
      });

      gsap.to(footerContent, {
        y: 0,
        scrollTrigger: {
          trigger: footer,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.to(bigContact, {
        y: 0,
        duration: 5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: bigContactContainer,
          start: "50% bottom",
        },
      });
    });

    return () => ctx.kill();
  });
</script>

<footer bind:this={footer}>
  <div bind:this={footerContent} class="footer-content">
    <div class="start">
      <div class="content">
        <section>
          <div class="title">Let's Talk</div>
          <ButtonLink href={EMAIL_LINK} target="_blank" backgroundColor="overlay-light">
            Email
          </ButtonLink>
        </section>
        <section>
          <div class="title">Follow Me</div>
          <ul>
            <li><a href={INSTAGRAM_LINK} target="_blank">Instagram</a></li>
            <li><a href={LINKEDIN_LINK} target="_blank">LinkedIn</a></li>
            <li><a href={GITHUB_LINK} target="_blank">Github</a></li>
          </ul>
        </section>
        <section>
          <div class="title">Contacts</div>
          <ul>
            <li><a href={EMAIL_LINK} target="_blank">vinc3w59@gmail.com</a></li>
            <li><a href={WHATSAPP_LINK} target="_blank">+60 18-202 1113</a></li>
          </ul>
        </section>
      </div>
      <ScrollTopButton />
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
    --height: calc(100vh);

    min-height: var(--height);
    overflow: hidden;
  }

  .footer-content {
    min-height: var(--height);
    background-color: var(--black);
    color: var(--white);
    padding: 96px var(--x-padding) 64px var(--x-padding);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 64px;
    /* Only -50% does not work for some reason */
    transform: translateY(-30%);
  }

  a {
    color: var(--white);
    transition: opacity 100ms ease;
  }

  .start {
    display: flex;
    justify-content: space-between;
    gap: 128px;
  }

  .start .content {
    display: flex;
    flex-wrap: wrap;
    column-gap: 128px;
    row-gap: 80px;

  }

  .start .content section:first-of-type {
    display: flex;
    flex-direction: column;
  }

  .start section .title {
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  ul a:hover {
    opacity: 0.8;
  }

  .end .big-contact-container {
    overflow-y: hidden;
  }

  .end .big-contact {
    opacity: 0.95;
    display: block;
    transform: translateY(-100%);
  }

  @media (width <= 1500px) {
    .footer-content {
      padding-top: 80px;
      padding-bottom: 48px;
    }
  }

  @media (width <= 950px) {
    .footer-content {
      padding-top: 32px;
      padding-bottom: 16px;
    }
  }

  @media (width <= 700px) {
    .start {
      gap: 64px;
    }

    .start .content {
      gap: 64px;
    }

    .start section .title {
      font-size: 24px;
    }
  }
</style>
