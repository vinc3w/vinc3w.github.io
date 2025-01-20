<script>
  import Hero from "./components/Hero.svelte";
  import Info from "./components/Info.svelte";
  import AdditionalInfo from "./components/AdditionalInfo.svelte";
  import ArrowLink from "$lib/components/Link/ArrowLink.svelte";

  const { data } = $props();
</script>

<Hero work={data} />
<Info work={data} />
<AdditionalInfo work={data} />
<div class="source-code-link grid">
  <div class="link-container">
    <ArrowLink href={data.sourceCodeLink} target="_blank" />
  </div>
</div>

<style>
  .source-code-link {
    margin-top: 4rem;
    padding: 0 2rem;
  }

  .link-container {
    grid-column: 2 / 3;
  }
</style>
