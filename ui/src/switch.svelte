<script lang="ts">
    let {
        label,
        checked,
        onChange,
    }: {
        label: string;
        checked: boolean;
        onChange?: (boolean) => void;
    } = $props();
</script>

<div class="switch">
    <div class="label">{@html label}</div>
    <div
        class="switch-container {checked ? 'active' : ''}"
        onclick={() => {
            if (onChange) {
                onChange(!checked);
            }
        }}
        role="none"
    >
        <div class="switch-track"></div>
        <div class="switch-thumb"></div>
        <div class="switch-thumb-shadow"></div>
    </div>
</div>

<style>
    .switch {
        display: flex;
        align-items: center;
        position: relative;
        gap: 10px;
    }

    .label {
        flex-shrink: 0;
        flex-grow: 0;
        font-size: 14px;
        color: var(--content-0);
        text-align: right;
    }

    .switch-container {
        flex-shrink: 0;
        flex-grow: 0;
        position: relative;
        width: 40px;
        height: 26px;
        cursor: pointer;
        user-select: none;
        display: inline-block;
    }

    .switch-track {
        position: absolute;
        width: 32px;
        height: 14px;
        top: 6px;
        left: 6px;
        border-radius: 15px;
        background-color: #757575;
        transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .switch-thumb {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 3px;
        left: 3px;
        border-radius: 50%;
        background-color: var(--content-2);
        transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .switch-thumb-shadow {
        position: absolute;
        width: 26px;
        height: 26px;
        top: 0;
        left: 0;
        border-radius: 50%;
        background-color: var(--content-2);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        opacity: 0;
        transition:
            transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
            opacity 0.2s;
    }

    .switch-container.active .switch-track {
        background-color: var(--blue-0);
    }

    .switch-container.active .switch-thumb {
        transform: translateX(18px);
        background-color: var(--blue-1);
    }

    .switch-container.active .switch-thumb-shadow {
        transform: translateX(18px);
        background-color: var(--blue-1);
    }

    .switch-container:hover .switch-thumb-shadow {
        opacity: 0.5;
    }
</style>
