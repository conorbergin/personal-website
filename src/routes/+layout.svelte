<script lang="ts">
  import { page } from "$app/stores";
  import "../styles.scss";
  import "../prisma.css";
	import Eye from "$lib/3DEye.svelte"


  let delim = "|";
</script>

<nav>
  <a class={$page.url.pathname == "/" ? "accent" : ""} href="/">home</a>
  {delim}
  <a
    class={$page.url.pathname == "/posts" || $page.url.pathname == "/posts/"
      ? "accent"
      : ""}
    href="/posts/">posts</a
  >
  {delim}
  <a
    class={$page.url.pathname == "/about" || $page.url.pathname == "/about/"
      ? "accent"
      : ""}
    href="/about/">about</a
  >
  {delim}
  <a href="https://github.com/conorbergin">github</a>
</nav>
<!-- <hr class="gray" /> -->

<main style="position:relative;">
  <div style="position:absolute; right:50px; top:-10px">
    <Eye />
  </div>
  <div style="position:absolute; right:110px; top:-10px">
    <Eye />
  </div>
  <slot />
</main>

<footer>
  <!-- <hr /> -->
  copyright 2022-2024 Conor Bergin |
  <a href="https://github.com/conorbergin/personal-website/">source</a>
</footer>
