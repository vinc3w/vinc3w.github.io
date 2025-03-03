<script>
  import Features from "./components/Features.svelte";
  import Next from "./components/Next.svelte";
  import { HOME } from "$lib/constant/routes";
  import { formatDateRange } from "$lib/utils/date.js";
  import Hero from "./components/Hero.svelte";

  const { data } = $props();
</script>

<div class="work">
  <div class="content">
    <Hero {data} />
    <img src={data.image} alt="work">
    <ul class="context">
      <li class="grid">
        <div class="label">Category</div>
        <div class="value">{data.category.join(" & ")}</div>
      </li>
      <li class="grid">
        <div class="label">Duration</div>
        <div class="value">{formatDateRange(data.duration.from, data.duration.to)}</div>
      </li>
    </ul>
    <div class="tools grid">
      <div class="label">Tools</div>
      <ul class="value">
        {#each data.tools as t}
          <li>{t}</li>
        {/each}
      </ul>
    </div>
    <div class="github-link grid">
      <a href={data.github_link} target="_blank">[SOURCE CODE]</a>
    </div>
    <Features features={data.features} />
    <Next next={data.next} />
    <div class="home grid">
      <a href={HOME}>[BACK TO HOME]</a>
    </div>
  </div>
</div>

<style>
  .work {
    padding: 64px var(--main-padding);
    padding-bottom: 128px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }

  img {
    aspect-ratio: 16 / 9;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  :global(.work .hero .scroll-indicator svg) {
    display: block;
    height: 32px;
  }

  :global(.work .hero .scroll-indicator path) {
    stroke: var(--foreground);
  }

  li {
    list-style-type: none;
  }

  .context .label,
  .tools .label {
    grid-column: 1 / 3;
    font-weight: bold;
  }

  .context .value,
  .tools .value,
  .github-link a,
  .home a {
    grid-column: 3 / 5;
  }

  :global(.work .features .title svg) {
    width: 100%;
  }

  :global(.work .features .title path) {
    fill: var(--foreground);
  }
</style>
