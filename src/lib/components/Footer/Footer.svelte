<script>
  import Vinc3w from "$lib/assets/svgs/Vinc3w.svelte";
  import Curve from "./Curve.svelte";
  import LargeFooter from "./LargeFooter.svelte";
  import SmallFooter from "./SmallFooter.svelte";
  import {
    DISCORD,
    EMAIL_ADDRESS,
    GITHUB,
    INSTAGRAM,
    INSTAGRAM_HANDLE,
    PHONE_NUMBER,
    SPOTIFY,
    WHATSAPP
  } from "$lib/contants/socials";
  import { colors } from "$lib/contants/styles";

  let clientHeight = $state();

  const contacts = [
    { href: "mailto:" + EMAIL_ADDRESS, label: EMAIL_ADDRESS },
    { href: WHATSAPP, label: PHONE_NUMBER },
  ];

  const socials = [
    { href: INSTAGRAM, label: "Instagram" },
    { href: DISCORD, label: "Discord" },
    { href: GITHUB, label: "GitHub" },
    { href: SPOTIFY, label: "Spotify" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
</script>

<footer
  style:--footer-height={clientHeight / 16 + "rem"}
  style:clip-path="polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"  
>
  <Curve />
  <div class="container" bind:clientHeight>
    <LargeFooter {contacts} {socials} {scrollToTop} />
    <SmallFooter {contacts} {socials} {scrollToTop} />
    <Vinc3w fill={colors.BACKGROUND} />
  </div>
</footer>

<style>
  footer {
    margin-top: 8rem;
    height: var(--footer-height);
  }

  .container {
    position: fixed;
    bottom: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 16rem;
    padding: 2rem;
    background-color: var(--foreground);
    color: var(--background);
  }

  @media (width <= 69rem) {
    .container {
      gap: 2rem;
    }
  }
</style>
