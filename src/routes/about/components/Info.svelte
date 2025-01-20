<script>
  import about from "$lib/data/about";
  import { timestampToMonthYear } from "$lib/utils/general";
</script>

<div class="heading">{about.name}</div>
<div class="location">Based in {about.based}</div>
<div class="bio">{about.bio}</div>
<div class="experience">
  <div class="heading">Experience</div>
  <div class="list">
    {#each about.experience as e}
      <div>
        <div>{e.role}</div>
        <div class="small">{e.company}</div>
        <div class="small">{timestampToMonthYear(e.duration.from)} - {timestampToMonthYear(e.duration.to)}</div>
      </div>
    {/each}
  </div>
</div>
<div class="education">
  <div class="heading">Education</div>
  <div class="list">
    {#each about.education as e}
      <div>
        <div>{e.course}</div>
        <div class="small">{e.school}</div>
        <div class="small">{timestampToMonthYear(e.duration.from)} - {timestampToMonthYear(e.duration.to)}</div>
      </div>
    {/each}
  </div>
</div>
<div class="hobby">
  <div class="heading">Hobbies</div>
  <div class="list">
    {#each about.hobbies as h}
      <div>{h}</div>
    {/each}
  </div>
</div>
<div class="skills">
  <div class="medium-heading">What can I do?</div>
  {#each about.skills as s}
    <section>
      <div class="heading">{s.label}</div>
      <div class="list">
        {#each s.values as value}
          <div>{value}</div>
        {/each}
      </div>
    </section>
  {/each}
</div>
{#each about.music as m}
  <section class="music">
    <div class="large-heading">{m.label}</div>
    <div class="embed">{@html m.embed}</div>
  </section>
{/each}

<style>
  .heading {
    font-weight: bold;
    margin: 0.5rem 0;
  }

  .medium-heading {
    font-size: 2rem;
    font-weight: bold;
  }

  .large-heading {
    font-size: 6rem;
    font-weight: bold;
  }

  .list > * {
    display: flex;
    flex-direction: column;
  }

  .list > * .small {
    color: var(--neutral);
  }

  .location,
  .bio,
  .experience,
  .education,
  .hobby,
  .skills {
    margin-bottom: 2rem;
  }

  .skills .medium-heading {
    margin-bottom: 1rem;
  }

  .skills .heading {
    margin: 1rem 0 0.25rem 0;
  }

  .music .large-heading {
    line-height: 120%;
    margin: 4rem 0 2rem 0;
  }

  .embed {
    width: min(25rem, 100%);
  }

  @media (width <= 50rem) {
    .large-heading {
      font-size: 3rem;
    }
  }
</style>
