<script>
  import StudioTitleAnim from "$lib/components/StudioTitleAnim.svelte";
  import Timeline from "./components/Timeline.svelte";
  import Music from "./components/Music.svelte";
  import Skills from "./components/Skills.svelte";
  import Socials from "./components/Socials.svelte";
  import Bio from "./components/Bio.svelte";
</script>

<div class="about">
  <StudioTitleAnim />
  <div class="content">
    <Bio />
    <Socials />
    <Skills />
    <Timeline />
    <Music />
  </div>
</div>

<style>
  .about {
    padding: 32px var(--main-padding);
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 64px;
    margin: 64px 0 128px 0;
  }
</style>
