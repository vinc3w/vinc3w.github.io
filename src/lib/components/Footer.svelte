<script>
  import gsap from "gsap";
  import CustomEase from "gsap/CustomEase";
  import ContactTitle from "$lib/assets/titles/ContactTitle.svelte";
  import {
    DISCORD,
    EMAIL_ADDRESS,
    GITHUB,
    INSTAGRAM,
    INSTAGRAM_HANDLE,
    LINKEDIN,
    MAILTO,
    PHONE_NUMBER,
    WHATSAPP
  } from "$lib/constant/socials";
  import { app } from "$lib/state/app.svelte";

  let footer;
  let contactTitle;
  
  $effect(() => {
    if (!app.ready) return;
    
    const ease = CustomEase.create("custom", "0.76, 0, 0.24, 1");

    gsap.to(contactTitle, {
      scrollTrigger: {
        trigger: footer,
        start: "bottom-=100px bottom",
        end: "bottom bottom",
      },
      y: 0,
      duration: 0.8,
      ease,
    });
  });

  const scrollToTop = () => {
    app.scroll.scrollTo("top");
  }
</script>

<footer bind:this={footer}>
  <div class="content grid">
    <div class="credit">
      Designed and developed by
      <a href={INSTAGRAM} target="_blank">{INSTAGRAM_HANDLE}</a>
    </div>
    <ul class="contacts">
      <li><a href={MAILTO} target="_blank">{EMAIL_ADDRESS}</a></li>
      <li><a href={WHATSAPP} target="_blank">{PHONE_NUMBER}</a></li>
    </ul>
    <div class="end">
      <ul class="socials">
        <li><a href={INSTAGRAM} target="_blank">Instagram</a></li>
        <li><a href={DISCORD} target="_blank">Discord</a></li>
        <li><a href={LINKEDIN} target="_blank">LinkedIn</a></li>
        <li><a href={GITHUB} target="_blank">GitHub</a></li>
      </ul>
      <button onclick={scrollToTop}>[Back to Top]</button>
    </div>
  </div>
  <div class="contact-title">
    <div class="title" bind:this={contactTitle}>
      <ContactTitle />
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: var(--foreground);
    color: var(--background);
    height: 100vh;
    padding: var(--main-padding);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .contact-title {
    width: 100%;
    overflow-y: hidden;
  }

  .contact-title .title {
    transform: translateY(100%);
  }

  :global(footer .contact-title svg) {
    width: 100%;
  }

  :global(footer .contact-title path) {
    fill: var(--background);
    width: 100%;
  }

  a,
  button {
    color: var(--background);
  }

  li {
    list-style-type: none;
  }

  .contacts {
    grid-column: 3 / 4;
  }

  .end {
    grid-column: 4 / 5;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
</style>
