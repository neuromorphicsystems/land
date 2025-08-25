<script lang="ts">
    import Detail from "./detail.svelte";

    // @ts-ignore
    export const dataset: Dataset = new Dataset(process.env.DATASET);
</script>

<main>
    <Detail
        {[]}
        dataset={datasets.inner[appState.datasetDetail.index]}
        width="calc(50vw - 56px / 2)"
        bind:datasetDetail={appState.datasetDetail}
    ></Detail>
</main>
