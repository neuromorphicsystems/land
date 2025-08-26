<script lang="ts">
    const {
        bounds,
        values = $bindable(),
        onChange,
    }: {
        bounds: [number, number];
        values: [number, number];
        onChange?: (values: [number, number]) => void;
    } = $props();

    const sliderWidth = 180;
    const handleShadowSize = 22;
    const handleSize = 16;
    const left = $derived((values[0] - bounds[0]) / (bounds[1] - bounds[0]));
    const right = $derived((values[1] - bounds[0]) / (bounds[1] - bounds[0]));

    let control: {
        isUpper: boolean | null;
        initialValue: number;
        initialPosition: number;
    } = $state({
        isUpper: null,
        initialValue: 0.0,
        initialPosition: 0.0,
    });

    function mouseDown(event: MouseEvent, isUpper: boolean) {
        control.initialValue = values[isUpper ? 1 : 0];
        control.initialPosition = event.clientX;
        control.isUpper = isUpper;
    }

    function mouseMove(event: MouseEvent) {
        if (control.isUpper != null) {
            const newValue =
                control.initialValue +
                Math.round(
                    ((event.clientX - control.initialPosition) / sliderWidth) *
                        (bounds[1] - bounds[0]),
                );
            if (control.isUpper) {
                if (
                    newValue !== values[1] &&
                    newValue >= values[0] &&
                    newValue <= bounds[1]
                ) {
                    if (onChange) {
                        onChange([values[0], newValue]);
                    }
                    values[1] = newValue;
                }
            } else {
                if (
                    newValue !== values[0] &&
                    newValue >= bounds[0] &&
                    newValue <= values[1]
                ) {
                    if (onChange) {
                        onChange([newValue, values[1]]);
                    }
                    values[0] = newValue;
                }
            }
        }
    }

    function mouseUp() {
        control.isUpper = null;
    }
</script>

<svelte:window onmouseup={mouseUp} onmousemove={mouseMove} />

<div class="range" style={control.isUpper == null ? "" : "cursor: pointer"}>
    <div class="lower">{values[0]}</div>
    <div
        class="slider"
        style="width: {sliderWidth}px; height: {handleShadowSize}px"
    >
        <div class="bar" style="top: {(handleShadowSize - 4) / 2}px"></div>
        <div
            class="active-bar"
            style="left: {left * sliderWidth}px; right: {(1.0 - right) *
                sliderWidth}px; top: {(handleShadowSize - 4) / 2}px"
        ></div>
        <div
            class="lower-handle"
            style="left: {left * sliderWidth -
                handleSize /
                    2}px; width: {handleSize}px; height: {handleSize}px; top: {(handleShadowSize -
                handleSize) /
                2}px; z-index: {values[0] == bounds[1] ? 4 : 3};"
            onmousedown={event => mouseDown(event, false)}
            role="none"
        >
            <div
                class="shadow {control.isUpper === false ? 'dragging' : ''}"
                style="width: {handleShadowSize}px; height: {handleShadowSize}px; top: {(handleSize -
                    handleShadowSize) /
                    2}px; left: {(handleSize - handleShadowSize) /
                    2}px; border-radius: {handleShadowSize / 2}px;"
            ></div>
            <div
                class="handle"
                style="width: {handleSize}px; height: {handleSize}px; border-radius: {handleSize /
                    2}px"
            ></div>
        </div>
        <div
            class="upper-handle"
            style="left: {right * sliderWidth -
                handleSize /
                    2}px; width: {handleSize}px; height: {handleSize}px; top: {(handleShadowSize -
                handleSize) /
                2}px; z-index: {values[0] == bounds[1] ? 3 : 4};"
            onmousedown={event => mouseDown(event, true)}
            role="none"
        >
            <div
                class="shadow {control.isUpper === true ? 'dragging' : ''}"
                style="width: {handleShadowSize}px; height: {handleShadowSize}px; top: {(handleSize -
                    handleShadowSize) /
                    2}px; left: {(handleSize - handleShadowSize) /
                    2}px; border-radius: {handleShadowSize / 2}px;"
            ></div>
            <div
                class="handle"
                style="width: {handleSize}px; height: {handleSize}px; border-radius: {handleSize /
                    2}px;"
            ></div>
        </div>
    </div>
    <div class="upper">{values[1]}</div>
</div>

<style>
    .range {
        background-color: var(--background-0);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        align-items: center;
        font-size: 14px;
        gap: 16px;
        user-select: none;
        -webkit-user-select: none;
    }

    .lower,
    .upper {
        flex-grow: 0;
        flex-shrink: 0;
        color: var(--content-1);
    }

    .slider {
        flex-grow: 0;
        flex-shrink: 0;
        position: relative;
    }

    .bar {
        height: 4px;
        border-radius: 2px;
        background-color: var(--background-1);
        position: absolute;
        left: 0;
        right: 0;
        z-index: 1;
    }

    .active-bar {
        height: 4px;
        border-radius: 2px;
        background-color: var(--content-0);
        position: absolute;
        z-index: 2;
    }

    .lower-handle,
    .upper-handle {
        position: absolute;
    }

    .shadow {
        position: absolute;
        background-color: var(--content-0);
        opacity: 0;
        transition: opacity 0.2s;
    }

    .lower-handle:hover .shadow,
    .upper-handle:hover .shadow {
        opacity: 0.5;
    }

    .shadow.dragging {
        opacity: 0.5;
    }

    .handle {
        position: absolute;
        background-color: var(--content-0);
        cursor: pointer;
    }
</style>
