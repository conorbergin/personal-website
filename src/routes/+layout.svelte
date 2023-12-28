<script lang="ts">
  import { page } from "$app/stores";
  import "../styles.scss";
  import "../prisma.css"

  const split = (s: String) => {
    const names = s.split("/").slice(1, -1);

    return names.map((n, index) => ({
      name: n,
      path: names.slice(0, index + 1).join(" "),
    }));
  };
</script>

<nav>
  
  <a href='/'>Home</a> /
  <a href='/about'>About</a> /
  <a href='https://github.com/conorbergin'>GitHub</a>


  
</nav>
<hr style="border: 1px solid inherit">
<main>
  <slot />
</main>

<footer />
