<script lang="ts">
    import App from "./app.svelte";
    import { decompressDatasets } from "./state";
</script>

{#await decompressDatasets()}
    <span>Decompressing datasets...</span>
{:then datasets}
    <App {datasets}></App>
{:catch error}
    <span>{error}</span>
{/await}
