<script>
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { onMount } from "svelte";

  let container;
  let title;

  const expertises = [
    { value: "Front End Web Development" },
    { value: "Back End Development" },
    { value: "Design" },
  ];

  onMount(() => {
    gsap.to(container, {
      scrollTrigger: {
        trigger: title,
        start: "bottom bottom",
        end: "bottom top",
        scrub: 2,
      },
      xPercent: -150,
      ease: "none",
    });
  });
</script>

<div class="expertise">
  <div class="title-container" bind:this={container}>
    <div class="title" bind:this={title}>Expertise</div>
  </div>
  <div class="content">
    <div class="section grid">
      <div class="wrapper">
        <div class="index">01</div>
        <div class="value">Front End Web Development</div>
      </div>
    </div>
    <div class="section grid">
      <div class="wrapper">
        <div class="index">02</div>
        <div class="value">Back End Development</div>
      </div>
    </div>
    <div class="section grid">
      <div class="wrapper">
        <div class="index">03</div>
        <div class="value">Design</div>
      </div>
    </div>
  </div>
</div>

<style>
  .title-container {
    padding: 0 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
  }

  .title-container::before {
    content: "";
    position: absolute;
    height: 100vh;
    max-width: 100vw;
    z-index: 10;
  }

  .title {
    width: fit-content;
    font-weight: bold;
    font-size: 40vw;
  }

  .content {
    margin-bottom: 16rem;
  }

  .content {
    width: 100%;
  }

  .section {
    padding: 0 2rem;
    margin-top: 3rem;
  }

  .wrapper {
    grid-column: 2 / 4;
  }

  .index {
    font-size: 2rem;
  }

  .value {
    font-size: 4rem;
  }

  @media (width <= 50rem) {
    .index {
      font-size: 1.25rem;
    }

    .value {
      font-size: 2rem;
    }
  }

  @media (width <= 30rem) {
    .wrapper {
      grid-column: 1 / 5;
    }
  }
</style>
