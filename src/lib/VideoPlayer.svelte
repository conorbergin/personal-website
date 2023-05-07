<script>
    export let src
    let paused = true

</script>

<div on:click={() => paused = !paused} on:keydown={() => paused = !paused}>
    <p>Click to {paused ? "play" : "pause"}</p>
    <video bind:paused loop>
        <source src="{src}.webm"/>
        <source src="{src}.mp4"/>
        video not supported
    </video>
</div>

<style>
    div {
        position: relative;
        width: 100%;
        height: 100%;
    }

    p {
        user-select: none;
        position: absolute;
        bottom: 5px;
        left: 5px;
        margin: 0;
        text-shadow: 2px 2px 0px #999999;
        font-style: italic;
        /* background-color: white; */

    }

</style>