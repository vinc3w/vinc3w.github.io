<script>
  import Work from "$lib/components/Work/Work.svelte";
  import work from "$lib/data/work";
  import { page } from "$app/state";

  let searchParams;

  $effect.pre(() => {
    searchParams = page.url.searchParams;
  });

  let filters = $derived(
    (searchParams?.get("filter") || "")
    .split(",")
    .filter(i => !!i)
  );
  let filteredWork = $derived(
    work.filter(i => {
      return i.featured && (
        filters.length
        ?  i.category.some(category => filters.includes(category))
        : true
      );
    })
  );
</script>

<div class="list">
  {#each filteredWork as work, index}
    <Work {work} {index} showCategory={true} />
  {/each}
</div>
