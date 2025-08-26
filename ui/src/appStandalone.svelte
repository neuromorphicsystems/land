<script lang="ts">
    import { Datasets } from "./dataset";
    import Detail from "./detail.svelte";

    // @ts-ignore
    const datasets = new Datasets(process.env.DATA);

    // @ts-ignore
    const baseUrl = process.env.BASE_URL;

    // @ts-ignore
    const githubUrl = process.env.GITHUB_URL;
</script>

<main>
    <div class="detail-wrapper">
        <Detail
            {baseUrl}
            baseUrlForTags={baseUrl}
            {githubUrl}
            {datasets}
            dataset={datasets.inner[0]}
            width="100vw"
            standalone={true}
        ></Detail>
    </div>
</main>

<style>
    :root {
        overscroll-behavior: none;
        --status-bar-height: 50px;
        --device-pane-width: 300px;
        --display-pane-width: 300px;
        --background-0: #090909;
        --background-1: #151515;
        --background-2: #303030;
        --background-3: #444444;
        --border: #272727;
        --content-0: #ffffff;
        --content-1: #cccccc;
        --content-2: #999999;
        --blue-0: #4e7ab0;
        --red-0: #a50e0e;
        --yellow-0: #e37400;
        --purple-0: #5b558d;
        --blue-1: #5fa6c7;
        --red-1: #ea4335;
        --yellow-1: #fbbc04;
        --purple-1: #7771aa;
    }

    main {
        display: flex;
        width: 100vw;
        height: 100vh;
    }

    .detail-wrapper {
        flex-grow: 0;
        flex-shrink: 0;
        overflow: hidden;
        background-color: var(--background-2);
        border-left: 1px solid var(--background-3);
    }
</style>
