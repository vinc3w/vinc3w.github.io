<script>
  import ButtonLink from "$lib/components/button-link/ButtonLink.svelte";
  import PageSetup from "$lib/components/page-setup/PageSetup.svelte";
  import FooterShadow from "$lib/components/footer/Shadow.svelte";

  import { page } from "$app/state";
  import { HOME_ROUTE } from "$lib/data/routes";
  import CTA from "$lib/components/cta/CTA.svelte";
</script>

<PageSetup />

<div class="error">
  <div class="code">404</div>
  <div class="description">The page you are looking for does not exist or has been moved.</div>
  <ButtonLink href={HOME_ROUTE}>Back</ButtonLink>
</div>

<FooterShadow />

<style>
  .error {
    background-color: var(--white);
    padding: var(--header-height) var(--x-padding);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    min-height: 100vh;
    position: relative;
    z-index: 100;
  }

  .code {
    font-size: 384px;
    font-weight: 900;
    line-height: 100%;
  }
</style>
