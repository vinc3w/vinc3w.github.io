<script>
  import gsap from "gsap";
  import CustomEase from "gsap/CustomEase";
  import page from "$lib/state/page.svelte";
  import { onMount, untrack } from "svelte";
  import { goto } from "$app/navigation";

  let cover;
  let svg;
  let path;
  let imageLoaded = $state(0);
  const containerWidth = 6; // rem

  onMount(() => {
    const images = Object.values(document.images);
    let noOfImageLoaded = 0;

    const trackImageLoading = async () => {
      images.forEach(image => {
        if (image.complete) {
          handleImageOnLoad();
          return;
        }
        image.onload = () => {
          handleImageOnLoad();
        }
      });
    }

    const handleImageOnLoad = () => {
      noOfImageLoaded++;
      imageLoaded = noOfImageLoaded / images.length * 100;
      if (noOfImageLoaded === images.length) {
        page.loadingComplete = true;
      }
    }

    setTimeout(() => {
      page.minLoadingComplete = true;
    }, page.minLoadingDuration * 1000);

    trackImageLoading();
  });

  $effect(() => {
    if (!page.loadingComplete || !page.minLoadingComplete) return;
    
    const ease = CustomEase.create("custom", "0.76, 0, 0.24, 1");
    const initialRightPath = `M0 0 Q0 ${window.innerHeight / 2} 0 ${window.innerHeight}`;
    const targetRightPath = `M0 0 Q${containerWidth * 16} ${window.innerHeight / 2} 0 ${window.innerHeight}`;

    gsap.to(cover, {
      xPercent: -100,
      duration: page.loaderDuration,
      ease,
    });

    gsap.timeline({
      onStart: () => {
        svg.style.display = "initial";
      },
      onComplete: () => {
        svg.style.display = "none";
      },
    })
    .to(path, { attr: { d: initialRightPath }, duration: 0 })
    .to(path, { attr: { d: targetRightPath }, duration: 0.4, ease })
    .to(path, { attr: { d: initialRightPath }, duration: 0.3, ease });
  });
</script>

<div class="cover" bind:this={cover} style:--container-width={containerWidth + "rem"}>
  <div class="loader">{imageLoaded}</div>
  <svg class="curve" bind:this={svg}>
    <path bind:this={path}></path>
  </svg>
</div>

<style>
  .cover {
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;
    padding: 4rem;
    background-color: var(--foreground);
    z-index: 200;
  }

  .loader {
    font-size: 4rem;
    color: var(--background);
  }

  .curve {
    position: absolute;
    top: 0;
    left: calc(100% - 0.0625rem);
    height: 100vh;
    width: var(--container-width);
    display: none;
  }

  @media (width <= 50rem) {
    .loader {
      font-size: 10vw;
    }
  }
</style>
