<script>
  let { width="100%", height="100%", stroke="white" } = $props();
</script>

<svg
  {width}
  {height}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5 12H19M19 12L13 18M19 12L13 6"
    style:stroke={`var(--${stroke})`}
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
