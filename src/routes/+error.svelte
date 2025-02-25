<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="code">
  {#each Array(5) as i}
    <div class="row">
      {#each Array(5) as i}
        <div class="item">{page.status}</div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .code {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 128px;
    max-height: calc(100vh - 64px - 16px * 1.5);
  }

  .row {
    display: flex;
    align-items: center;
    gap: 160px;
  }

  .item {
    font-size: 30vw;
    font-weight: bold;
    opacity: 0.5;
    line-height: 70%;
    animation: scroll 7s linear infinite;
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
</style>
