<script>
    import Icon from "@iconify/svelte";
</script>

<footer>
    <div class="wrapper">
        <div class="start">
            @Aug 2024 | Made with ❤️ by
            <a
                title="instagram"
                href="https://www.instagram.com/vinc3w59/"
            >@vinc3w59</a>
        </div>
        <div class="end">
            <div class="icons">
                <a
                    title="instagram"
                    target="_blank"
                    href="https://www.instagram.com/vinc3w59/"
                ><Icon icon="mdi:instagram" /></a>
            </div>
            <div class="icons">
                <a
                    title="discord"
                    target="_blank"
                    href="https://discord.com/users/582932383381192705"
                ><Icon icon="ic:baseline-discord" /></a>
            </div>
            <div class="icons">
                <a
                    title="github"
                    target="_blank"
                    href="https://github.com/vinc3w"
                ><Icon icon="mdi:github" /></a>
            </div>
            <button
                title="back to top"
                class="icons back-to-top"
                on:click={() => window.scrollTo(0, 0)}
            ><Icon icon="mdi:arrow-up-circle" height="25px" /></button>
        </div>
    </div>
</footer>

<style lang="scss">
    footer {
        margin-top: auto;
    }

    .wrapper {
        margin-top: 40px;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px 30px;
        background-color: $black;
        color: $white;
    }

    .start {
        font-size: 14px;

        a {
            color: rgba($white, 0.7);

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .end {
        display: flex;
        align-items: center;
        gap: 5px;

        a,
        button.back-to-top {
            display: block;
            font-size: 20px;
            color: $white;
            transition: transform 70ms linear;

            &:hover {
                transform: scale(1.1);
            }
        }

        a {
            height: 22px;
        }

        button.back-to-top {
            display: grid;
            place-items: center;
            font-size: 30px;
            height: 25px;
        }
    }
</style>
