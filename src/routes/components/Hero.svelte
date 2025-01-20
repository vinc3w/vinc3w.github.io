<script>
  import gsap from "gsap";
  import CustomEase from "gsap/CustomEase";
  import AvatarSittingOnTheFloor from "$lib/assets/imgs/avatar-sitting-on-the-floor.png";
  import AvatarWithPaintings from "$lib/assets/imgs/avatar-with-paintings.png";
  import about from "$lib/data/about";
  import { onMount } from "svelte";

  let container;
  let messageLines = [];
  let images = [];

  onMount(() => {
    const duration = 0.8;
    const ease = CustomEase.create("custom", "0.42, 0, 0.58, 1");
    
    gsap.timeline()
    .from(images, {
      y: 100,
      opacity: 0,
      duration,
      ease,
    }, 0)
    .from(messageLines, {
      yPercent: 100,
      duration,
      ease,
    }, 0);

    gsap.timeline({
      scrollTrigger: {
        endTrigger: container,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    })
    .to(images[0], { yPercent: 40 }, 0)
    .to(images[1], { yPercent: -10 }, 0);
  });
</script>

<div class="hero" bind:this={container}>
  <div class="headline">
    <div class="message">
      <div class="line">
        <span bind:this={messageLines[0]}>I Build Stunning</span>
      </div>
      <div class="line">
        <span bind:this={messageLines[1]}>and Functional</span>
      </div>
      <div class="line">
        <span bind:this={messageLines[2]}>Websites</span>
      </div>
    </div>
    <div class="info">
      <div>{about.role}</div>
      <div>Based in {about.based}</div>
    </div>
  </div>
  <div class="image-board">
    <div class="image-container primary">
      <img bind:this={images[0]} src={AvatarSittingOnTheFloor} alt="avatar sitting on the floor">
    </div>
    <div class="image-container secondary">
      <img bind:this={images[1]} src={AvatarWithPaintings} alt="avatar with paintings">
    </div>
  </div>
</div>

<style>
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - var(--header-height));
    padding-bottom: var(--header-height); 
    margin: 0 2rem;
  }

  .line {
    font-size: 7vw;
    font-weight: bold;
    line-height: 130%;
    overflow: hidden;
  }

  .line span {
    display: block;
  }

  .info {
    margin-top: 2rem;
  }

  .image-board {
    position: absolute;
    padding: 20vh 2rem 8vh 2rem;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -10;
    display: flex;
    justify-content: space-between;
  }

  .image-container {
    height: 100%;
    width: 100%;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  .image-container.primary img {
    width: 12vw;
    aspect-ratio: 3 / 4;
  }

  .image-container.secondary {
    grid-column: 4 / 5;
    display: flex;
    justify-content: flex-end;
  }

  .image-container.secondary img {
    width: 22vw;
    aspect-ratio: 4 / 6;
    position: absolute;
    top: calc(100% - 20vw);
  }
</style>
