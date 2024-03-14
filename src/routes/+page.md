<script lang="ts">
	import type { PageData } from './$types';

	import PageHead from '$lib/components/PageHead.svelte';
	import Article from '$lib/components/Article.svelte';
	import ArticleTitle from '$lib/components/ArticleTitle.svelte';
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';
	import ArticleDescription from '$lib/components/ArticleDescription.svelte';

	export let data: PageData;
</script>

<title>Conor Bergin's Blog</title>

# Conor Bergin's Blog

## Recent Posts

{#each data.posts as post}
	<a href={"posts/" + post.slug}><span class="gray">{post.date} - </span>{post.title}</a>
	<br/>
{/each}

## Projects
[Oalm](https://oalm.app) - A partially defunct recursive document editor built with SolidJS and Y.js.  
[SVG 2 XCursor](https://github.com/conorbergin/svg2xcursor) - A utility for building Linux Xcursor themes from SVG files.

