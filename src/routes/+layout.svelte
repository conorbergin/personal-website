<script lang="ts">
  import { page } from "$app/stores";
  import "../styles.scss";
  import "../prisma.css";

  let delim = "|"
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

<main>
  <slot />
</main>

<footer>
  <!-- <hr /> -->
  copyright 2022-2024 Conor Bergin | <a
    href="https://github.com/conorbergin/personal-website/">source</a
  >
</footer>
