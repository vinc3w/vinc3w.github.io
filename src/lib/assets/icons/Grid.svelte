<script>
	import { colors, sizes } from "../../contants/styles";
	const { fill = colors.FOREGROUND, size = sizes.DEFAULT_ICON_SIZE } = $props();
</script>

<svg width={size * 16} height={size * 16} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48 12V84M12 48H84" stroke={fill} stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M76 12H20C15.5817 12 12 15.5817 12 20V76C12 80.4183 15.5817 84 20 84H76C80.4183 84 84 80.4183 84 76V20C84 15.5817 80.4183 12 76 12Z" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
