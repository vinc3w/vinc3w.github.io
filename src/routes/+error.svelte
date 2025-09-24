<script>
  import ButtonLink from "$lib/components/button-link/ButtonLink.svelte";
  import { page } from "$app/state";
  import { HOME_ROUTE } from "$lib/data/routes";
</script>

<div class="error">
  <div class="code">404</div>
  <div class="description">The page you are looking for does not exist or has been moved.</div>
  <ButtonLink href={HOME_ROUTE}>Back</ButtonLink>
</div>

<style>
  .error {
    padding: var(--header-height) var(--x-padding);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    min-height: 100vh;
  }

  .code {
    font-size: 384px;
    font-weight: bold;
    line-height: 100%;
  }
</style>
