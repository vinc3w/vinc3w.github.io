<script>
  import * as THREE from "three";
  import Avatar from "$lib/assets/imgs/avatar.png";
  import TexturePng from "$lib/assets/imgs/avatar-texture.png";
  import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
  import { onMount } from "svelte";
  import { PUBLIC_URL } from "$env/static/public";

  // svelte-ignore non_reactive_update
  let canvas;
  let error = $state(false);

  onMount(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const loader = new OBJLoader();

    let object;
    let controls;

    scene.background =  new THREE.Color().setHex(0xFFFFFF);

    loader.load(
      PUBLIC_URL + "/models/avatar/avatar.obj",
      function (obj) {
        object = obj;
        const texture = new THREE.TextureLoader().load(TexturePng);

        object.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material.map = texture;
          }
        });

        scene.add(object);
      },
      function () {
        // success
      },
      function () {
        // error
        error = true;
      }
    );

    const renderer = new THREE.WebGLRenderer({ canvas }); 
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    camera.position.z = 5.5;

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5);
    scene.add(ambientLight);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = false;

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();

    const handleWindowResize = () => {
      const container = canvas.parentElement;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }

    window.addEventListener("resize", handleWindowResize);
    
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    }
  });
</script>

{#if error}
  <div class="image-container">
    <img src={Avatar} alt="avatar">
  </div>
{:else}
  <div class="canvas-container">
    <canvas bind:this={canvas}></canvas>
  </div>
  <div class="image-container breakpoint">
    <img src={Avatar} alt="avatar">
  </div>
{/if}

<style>
  .canvas-container {
    position: sticky;
    top: 2rem;
    font-size: 0;
    height: 35rem;
  }

  canvas {
    max-height: calc(100vh - 4rem);
    height: 100%;
    width: 100%;
  }

  .image-container {
    display: grid;
    place-items: center;
  }

  .image-container.breakpoint {
    display: none;
  }

  img {
    width: 50%;
    min-width: 15rem;
  }

  @media (width <= 60rem) {
    .canvas-container {
      display: none;
    }

    .image-container.breakpoint {
      display: flex;
    }

    .image-container {
      margin: 5rem 0;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .image-container img {
      width: 40%;
    }
  }
</style>
