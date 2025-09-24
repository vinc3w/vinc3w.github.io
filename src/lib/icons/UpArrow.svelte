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
    d="M10 4.16666V15.8333M10 4.16666L15 9.16666M10 4.16666L5 9.16666"
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
