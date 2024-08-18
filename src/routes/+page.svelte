<script>
    import ProjectList from './ProjectList.svelte';
</script>

<div class="hero">
    <div class="wrapper">
        <div title="HELLO" class="name">
            <span class="black">Vincent Har</span>
        </div>
        <div class="description">
            I am a self-taught <span class="bold">Full-Stack Web Developer</span> that enjoys solving problems and building solutions.
        </div>
    </div>
</div>

<ProjectList />

<style lang="scss">
    .name {
        font-size: 70px;
        text-align: center;
        margin: 20px;

        @media (width < 400px) {
            font-size: 50px;
        }
    }

    .description {
        padding: 10px 20px;
        border: 2px solid $black;
    }
</style>
