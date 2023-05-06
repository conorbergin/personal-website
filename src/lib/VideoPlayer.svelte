<script>
    export let src
    let paused = true

</script>

<div on:click={() => paused = !paused} on:keydown={() => paused = !paused}>
    <p>Click to {paused ? "play" : "pause"}</p>
    <video bind:paused loop>
        <source src={src}/>
    </video>
</div>

<style>
    div {
        position: relative;
        width: 100%;
        height: 100%;
    }

    p {
        font-family: 'Courier New', Courier, monospace;
        user-select: none;
        position: absolute;
        bottom: 5px;
        left: 5px;
        margin: 0;
        font-weight: 700;
        text-shadow: 2px 2px 0px #999999;
        /* background-color: white; */

    }

</style>