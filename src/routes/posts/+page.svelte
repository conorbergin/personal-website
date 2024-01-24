<script>
	export let data;
</script>

<p>
	{#each data.posts as post}
		{post.meta.date} -
		<a href={post.path}>
			{post.meta.title}
		</a>
		{#if post.meta.tags}
			{#each post.meta.tags as tag}
				<span class="tag">#{tag}</span>
			{/each}
		{/if}
		<br />
	{/each}
</p>
