<script>
	export let data;
</script>

<title>Conor Bergin's Blog</title>

# Conor Bergin's Blog

## Recent Posts

{#each data.posts.slice(0, 4) as post}
	<span class="gray">{post.meta.date} - </span>
	<a href={post.path}>
		{post.meta.title}
	</a>
	<br />
{/each}

## Projects
[Oalm](https://oalm.app) - A partially defunct recursive document editor built with SolidJS and Y.js.  
[SVG 2 XCursor](https://github.com/conorbergin/svg2xcursor) - A utility for building Linux Xcursor themes from SVG files.

