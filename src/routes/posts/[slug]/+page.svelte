<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	export let data;

	const {
		title,
		excerpt,
		date,
		updated,
		coverImage,
		coverWidth,
		coverHeight,
		categories,
	} = data.meta;
	const { PostContent } = data;
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
</svelte:head>

<h1>{title}</h1>

<div class="gray">
	<em>Conor Bergin - {date}</em>
</div>

<svelte:component this={PostContent} />
