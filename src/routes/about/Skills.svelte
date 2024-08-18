<script>
    import Separator from '$lib/components/Separator.svelte';
    import SkillList from './SkillList.svelte';
    
</script>

<Separator title="Skills" />

<section>

    <SkillList title="Front-End Web Development" type="fe" />
    <SkillList title="Back-End Web Development" type="be" />
    <SkillList title="Tools" type="tl" />

</section>
