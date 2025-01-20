<script>
	import { colors, sizes } from "../../contants/styles";
	const { fill = colors.FOREGROUND, size = sizes.DEFAULT_ICON_SIZE } = $props();
</script>

<svg width={size * 16} height={size * 16} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M76 48L52 24M76 48L52 72M76 48H20" stroke={fill} stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
