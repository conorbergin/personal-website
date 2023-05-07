<script>
  export let data
</script>

<title>{ data.title }</title>

<article>
  <h1>{ data.title }</h1>
  <samp>{data.date}</samp>
  <svelte:component this={data.content} />
</article>
