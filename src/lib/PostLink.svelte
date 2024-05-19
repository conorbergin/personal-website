<script lang="ts">

    import type { PageData } from "./$types";
    
    export let post : App.BlogPost 
</script>

<div>
    <a href={"/posts/" + post.slug}>{post.title}</a>
    
    <span class="gray">{post.date}</span>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        padding: 0.1rem 0;
    }

    span {
        font-size: smaller;
    }
</style>