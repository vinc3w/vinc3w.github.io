<script>
    import Icon from "@iconify/svelte";
</script>

<section class="error wrapper">
    <div class="code">404</div>
    <div class="message">This page does not exist</div>
    <a href="/" class="back">
        <Icon icon="ion:arrow-back" />
        Back to home
    </a>
</section>

<style lang="scss">
    .error {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .code {
        display: block;
        height: 120px;
        font-size: 100px;
    }

    .message {
        font-size: 20px;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-top: 40px;
        color: rbga($black, 0.5);
    }
</style>
