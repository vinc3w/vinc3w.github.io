<script>
    export let label;
    export let name;
    export let isTextarea = false;

    let isFocus = false;
    let value = '';
</script>

<div class="input-container" class:focus={isFocus || value.trim()}>
    <div class="label">{label}</div>
    {#if isTextarea}
        <textarea 
            type="text"
            {name}
            bind:value
            on:focus={() => isFocus = true}
            on:blur={() => isFocus = false} ></textarea>
    {:else}
        <input 
            type="text"
            {name}
            bind:value
            on:focus={() => isFocus = true}
            on:blur={() => isFocus = false} />
    {/if}
</div>

<style lang="scss">
    .input-container {
        display: flex;
        align-items: flex-start;
        margin-bottom: 10px;
        border: 2px solid $black;
        padding: 15px 15px;
        position: relative;

        .label {
            padding: 0 3px;
            position: absolute;
            font-size: 14px;
            transition: all 100ms ease;
        }

        &.focus .label {
            font-size: 12px;
            transform: translate(-3px, -25px);
            background-color: seashell;
            color: rgba($black, 0.7);
        }

        input, textarea {
            width: 100%;
        }

        textarea {
            resize: none;
            height: 200px;
            width: 100%;
        }
    }
</style>
