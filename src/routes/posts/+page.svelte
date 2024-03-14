<script lang="ts">
	import type { PageData } from './$types';

	export let data : PageData;
</script>


<h1>Posts</h1>

{#each data.posts as post}
	<a href={"/posts/" + post.slug}><span class="gray">{post.date} - </span>{post.title}</a>
	<br/>
{/each}
<br/>
