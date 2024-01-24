<title>Conor Bergin's Blog</title>

<script>
	export let data;
</script>

<p>
    Welcome to my blog, I mostly write about software development and my small scale engineering projects.
</p>

<h3>Recent Posts</h3>

<p>
	{#each data.posts.slice(0,4) as post}
		{post.meta.date} -
		<a href={post.path}>
			{post.meta.title}
		</a>
		<br>
	{/each}
</p>

<h3>About Me</h3>
<p>
    I am a mechanical engineering graduate, I started this blog in the final year of my MEng degree (2022) as a way to document my many side projects and improve my writing.
</p>

<p>
    What I've found is that writing helps my understanding as much as my imagined reader, just as you can't really understand the architecture of a non-trivial piece of software until you start building it, you often find you don't understand something half as well as you thought you did until you try to explain it to an imaginary third party.
</p>