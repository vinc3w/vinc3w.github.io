<script>
    import Icon from "@iconify/svelte";

    export let title;
</script>

<div class="separator">
    <div class="content">
        <span class="bold">{title}</span>
        <Icon icon="mdi:arrow-down-right" />
    </div>
</div>

<style lang="scss">
    .content {
        padding: 50px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.5;
        animation: subtle-float 5s ease-in-out infinite;
    }
</style>
