<script>
    import { skills } from '$lib';

    export let title;
    export let type;
</script>

<div class="skill-list wrapper">
    <div class="title"><span class="bold">{title}</span></div>
    <div class="list">
        {#each skills[type] as { name, icon, website }}
            <a target="_blank" href={website} class="skill">
                <img src={icon} alt="skill icon">
                <div class="name">{name}</div>
            </a>
        {/each}
    </div>
</div>

<style lang="scss">
    .skill-list {
        display: flex;
        gap: 30px;
        border-bottom: 1px solid rgba($black, 0.1);
        padding: 20px 0;

        @media (width < $about-collapse-width) {
            flex-direction: column;
            gap: 20px;
        }

        &:first-of-type {
            padding-top: 0;
        }

        > * {
            width: 100%;
        }
    }

    .list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        .skill {
            border: 2px solid $black;
            padding: 5px 10px;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: all 70ms linear;

            &:hover {
                transform: scale(1.05);
                box-shadow: 3px 3px 5px 1px rgba($black, 0.3);
            }

            img {
                height: 25px;
            }

            .name {
                font-size: 14px;
            }
        }
    }
</style>
