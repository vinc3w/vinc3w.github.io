<script>
  import { afterNavigate, goto, replaceState } from "$app/navigation";
  import { page } from "$app/state";
  import { app } from "$lib/state/app.svelte";

  const { href, target, children } = $props();

  const onclick = e => {
    e.preventDefault();
    app.scroll.stop();
    app.scroll.scrollTo(0, {
      disableLerp: true,
      duration: 0,
    });
    app.cover.style.display = "initial";
    setTimeout(() => {
      app.cover.style.display = "none";
      app.scroll.start();
      goto(href);
    }, 10);
  }
</script>

<a {href} {target} {onclick}>{@render children()}</a>
