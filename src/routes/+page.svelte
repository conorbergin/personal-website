<script lang="ts">
	import type { PageData } from "./$types";
	import { onMount } from "svelte";
	import PostLink from "$lib/PostLink.svelte";

	export let data: PageData;
</script>

<title>Conor Bergin's Blog</title>

<h1>Conor Bergin's Blog</h1>

<h2>Recent Posts</h2>

{#each data.posts as post}
	<PostLink {post} />
{/each}

<h2>Projects</h2>
<a href="https://oalm.app">Oalm</a> - An experimental Org mode alternative.
<br />
<a href="https://github.com/conorbergin/svg2xcursor">SVG 2 XCursor</a> - A
utility for building Linux Xcursor themes from SVG files.
<br />
<br />
