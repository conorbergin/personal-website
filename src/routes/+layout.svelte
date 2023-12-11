<script lang="ts">
  import { page } from "$app/stores";

  import "../styles.scss";

  const split = (s: String) => {
    const names = s.split("/").slice(1, -1);

    return names.map((n, index) => ({
      name: n,
      path: names.slice(0, index + 1).join(" "),
    }));
  };
</script>

<nav>
  {#if $page.url.pathname === "/"}
    home
  {:else}
    <a href="/">home</a> /
    {#each split($page.url.pathname) as link}
      <a href={link.path}>{link.name}</a>
    {/each}
    {$page.url.pathname.split("/").at(-1)}
  {/if}
</nav>

<main>
  <slot />
</main>

<footer />
