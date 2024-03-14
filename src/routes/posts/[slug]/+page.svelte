<script lang="ts">
	import type { PageData } from './$types';
	import type { SvelteComponentTyped } from 'svelte/internal';

	export let data: PageData;

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<title>{data.frontmatter.title}</title>

<h1>{data.frontmatter.title}</h1>

<p class="gray">{data.frontmatter.date}</p>

<svelte:component this={component} />

