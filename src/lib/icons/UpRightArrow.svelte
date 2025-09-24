<script>
  let { width="100%", height="100%", stroke="white" } = $props();
</script>

<svg
  {width}
  {height}
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5 15L15 5M15 5H7.5M15 5V12.5"
    style:stroke={`var(--${stroke})`}
    stroke-width={2}
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>

<style>
  svg {
    display: block;
  }
</style>
