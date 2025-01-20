<script>
  import CursorEffectElement from "$lib/components/Cursor/CursorEffectElement.svelte";
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { cursorElement } from "$lib/contants/cursor";

  const { label, value } = $props();

  let searchParams;
  let button = $state();
  let height = $derived(button?.clientHeight / 16);
  let width = $derived(button?.clientWidth / 16);

  $effect.pre(() => {
    searchParams = page.url.searchParams;
  });

  const setFilter = value => {
    const filter = searchParams.get('filter')?.split(",") || [];
    if (filter.includes(value)) {
      delete filter[filter.indexOf(value)];
    } else {
      filter.push(value);
    }
    page.url.searchParams.set("filter", filter.filter(i => !!i).join(","));
    goto(page.url);
  }
</script>

<CursorEffectElement
  type={[cursorElement.DILATE, cursorElement.MAGNETIC, cursorElement.STICKY]}
  targetStyle={{
    height,
    width,
    borderRadius: 5,
  }}
  magneticStrength={0.2}
  stickyStrength={0.25}
>
  <button
    bind:this={button}
    onclick={() => setFilter(value)}
    class:on={page.url.searchParams.get("filter")?.split(",").includes(value)}
  >
    {label}
  </button>
</CursorEffectElement>

<style>
  button {
    border: 0.125rem solid var(--foreground);
    border-radius: 5rem;
    font-size: 1.5rem;
    display: grid;
    place-items: center;
    padding: 1rem 2rem;
  }

  button.on {
    background-color: var(--foreground);
    color: var(--background);
  }

  button:hover {
    border: none;
  }

@media (width <= 40rem) {
  button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
}
</style>
