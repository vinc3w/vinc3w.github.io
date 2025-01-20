<script>
  import Icon from "$lib/assets/imgs/icon.png";
  import Avatar from "./components/Avatar.svelte";
  import Info from "./components/Info.svelte";
</script>

<div class="hero grid">
  <div class="icon">
    <img src={Icon} alt="icon">
  </div>
  <div class="title">More About Me</div>
</div>

<div class="content grid">
  <div class="avatar-container">
    <Avatar />
  </div>
  <div class="info-container">
    <Info />
  </div>
</div>

<style>
  .hero {
    padding: 10rem 2rem;
  }

  .icon {
    display: grid;
    place-items: center;
  }

  .icon img {
    height: 3rem;
  }

  .title {
    font-size: 7vw;
    font-weight: bold;
    grid-column: 2 / 5;
  }

  .content {
    padding: 0 2rem;
  }

  .avatar-container {
    grid-column: 1 / 3;
  }

  .info-container {
    grid-column: 3 / 5;
  }

  @media (width <= 80rem) {
    .icon {
      display: none;
    }

    .title {
      font-size: 10vw;
      grid-column: 1 / 5;
      text-align: center;
    }
  }

  @media (width <= 60rem) {
    .hero {
      padding-top: 4rem;
      padding-bottom: 0rem;
    }

    .avatar-container {
      grid-column: 1 / 5;
    }

    .info-container {
      grid-column: 1 / 5;
    }
  }
</style>
