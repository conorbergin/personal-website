<script>
	export let data;
</script>

<title>Posts</title>


<h1>Posts</h1>

<p>
	{#each data.posts as post}
		<span class="gray">{post.meta.date} - </span>
		<a href={post.path}>
			{post.meta.title}
		</a>
		<br />
	{/each}
</p>
