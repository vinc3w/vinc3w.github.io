<script>
  import {
    DISCORD,
    GITHUB,
    INSTAGRAM,
    LINKEDIN,
  } from "$lib/constant/socials";
</script>

<div class="socials grid">
  <ul class="list">
    <li><a href={INSTAGRAM}>Instagram</a></li>
    <li><a href={DISCORD}>Discord</a></li>
    <li><a href={LINKEDIN}>LinkedIn</a></li>
    <li><a href={GITHUB}>GitHub</a></li>
  </ul>
</div>

<style>
  li {
    list-style-type: none;
  }

  .list {
    grid-column: 3 / 5;
  }
</style>
