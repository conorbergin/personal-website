<script lang="ts">
    import PostLink from '$lib/PostLink.svelte';
	import type { PageData } from './$types';

	export let data : PageData;
</script>


<h1>Posts</h1>

{#each data.posts as post}
	<PostLink {post} />
{/each}
<br/>
