<script lang="ts">
    let {
        title,
        choices,
        counts,
        choicesWidth,
        active = $bindable(),
        onChange,
    }: {
        title: string;
        choices: string[];
        counts: number[];
        choicesWidth: number;
        active: number;
        onChange?: (number) => void;
    } = $props();
</script>

<div style="width: {choicesWidth + 80}px;">
    <div class="title">{title}</div>
    <div class="choices">
        {#each ["Any", ...choices] as choice, index}
            <div
                class="choice {index === active ? 'active' : ''} {counts[
                    index
                ] === 0
                    ? 'empty'
                    : ''}"
                onclick={_ => {
                    if (onChange) {
                        onChange(index);
                    }
                    active = index;
                }}
                role="none"
            >
                <div class="tick">
                    {#if index === active}
                        &#10003;
                    {/if}
                </div>
                <div class="name" style="width: {choicesWidth}px">{choice}</div>
                <div class="count">{counts[index]}</div>
            </div>
        {/each}
    </div>
</div>

<style>
    .title {
        color: var(--content-2);
        padding-bottom: 5px;
        font-size: 14px;
    }

    .choices {
        overflow-y: auto;
        max-height: 247px;
        padding-right: 10px;
    }

    .choice {
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        justify-content: space-between;
        gap: 10px;
        cursor: pointer;
        align-items: center;
    }

    .choice:hover {
        background-color: var(--background-2);
    }

    .choice:not(:last-of-type) {
        border-bottom: 1px solid var(--border);
    }

    .choice.active {
        cursor: default;
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

    .choice.empty .tick {
        color: var(--content-2);
    }

    .name {
        flex-grow: 1;
        flex-shrink: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 14px;
        color: var(--content-0);
        font-size: 12px;
    }

    .choice.empty .name {
        color: var(--content-2);
    }

    .count {
        flex-grow: 0;
        flex-shrink: 0;
        width: 30px;
        padding-right: 10px;
        text-align: right;
        line-height: 14px;
        color: var(--content-0);
        font-size: 12px;
    }

    .choice.empty .count {
        color: var(--content-2);
    }
</style>
