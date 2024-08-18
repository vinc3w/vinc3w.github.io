<script>
    import Separator from "$lib/components/Separator.svelte";
    import { projects } from '$lib';
</script>

<Separator title="Projects" />

<div class="project-list wrapper">

    {#each projects as p}
        <a title="go to github repo" target="_blank" href={p.githubLink} class="project">
            <div class="content">
                <div class="img-container">
                    <img src={p.coverImage} alt="project cover">
                </div>
                <div class="text">
                    <div class="top">
                        <div class="title"><span class="bold">{p.title}</span></div>
                        <div class="type">{p.type}</div>
                    </div>
                    <div class="description">{p.description}</div>
                    <div class="tags">
                        {#each p.tags as t}
                            <div class="tag">{t}</div>
                        {/each}
                    </div>
                </div>
            </div>
        </a>
    {/each}

</div>

<style lang="scss">
    .project-list {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px 30px;

        @media (width < 700px) {
            grid-template-columns: 1fr;
        }
    }

    .project {

        .content {
            transition: transform 70ms linear;
        }

        &:hover {
            animation: float 10s ease-in-out infinite;
            
            .content {  
                transform: scale(1.03);
            }
        }
    }

    .img-container {
        height: 250px;
        border: 2px solid $black;

        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }

    .top {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 10px 0 5px 0;
        border-bottom: 1px solid rgba($black, 0.1);
        padding-bottom: 10px;

        .type {
            border: 1px solid $black;
            font-size: 12px;
            padding: 2px 10px;
        }
    }

    .tags {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;

        .tag {
            background-color: rgba($black, 0.5);
            color: $white;
            font-size: 12px;
            padding: 2px 10px;
        }
    }
</style>
