<script lang="ts">
    const {
        title,
        choices,
        selection = $bindable(),
    }: {
        title: string;
        choices: string[];
        selection: boolean[];
        onChange?: (selection: boolean[]) => void;
    } = $props();

    let open: boolean = $state(false);
</script>

<div
    class="multiselect"
    onclick={() => {
        open = true;
    }}
    role="none"
>
    <div class="label">
        {title}
    </div>
    <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
            ><polyline
                fill="none"
                stroke="#FFFFFF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="12"
                points="25 20 25 70 75 70"
                transform="rotate(-45 50 39)"
            /></svg
        >
    </div>
    <div class="popover" style="display: {open ? 'block' : 'none'}">
        {#each choices as choice, index}
            <div class="choice" onclick={() => {
                selection[index] = !selection[index];
            }} role="none">
                <div class="tick">
                    {#if selection[index]}
                        &#10003;
                    {/if}
                </div>
                <div class="label">
                    {choice}
                </div>
            </div>
        {/each}
    </div>
</div>

<div
    class="mask"
    style="display: {open ? 'block' : 'none'}"
    onclick={event => {
        event.stopPropagation();
        open = false;
    }}
    role="none"
></div>

<style>
    .multiselect {
        background-color: var(--background-0);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        position: relative;
        user-select: none;
        -webkit-user-select: none;
    }

    .multiselect:hover {
        background-color: var(--background-1);
    }

    .icon svg {
        width: 13px;
        height: 13px;
    }

    .mask {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 10;
    }

    .popover {
        position: absolute;
        top: 46px;
        right: 0;
        z-index: 11;
        background-color: var(--background-1);
        border: 1px solid var(--border);
        border-radius: 8px;
        font-size: 12px;
        max-height: 300px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .choice {
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        gap: 10px;
        cursor: pointer;
        align-items: center;
        white-space: nowrap;
    }

    .choice:hover {
        background-color: var(--background-3);
    }

    .tick {
        flex-grow: 0;
        flex-shrink: 0;
        width: 20px;
        padding-left: 10px;
        line-height: 14px;
        color: var(--content-0);
        font-size: 12px;
    }

    .label {
        padding-right: 20px;
    }
</style>
