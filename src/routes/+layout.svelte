<script lang="ts">
  import { page } from "$app/stores";
  import "../styles.scss";
  import "../prisma.css"

</script>

<nav>
  
  <a href='/'>Home</a> /
  <a href="/posts">Posts</a> /
  <a href='https://github.com/conorbergin'>GitHub</a>
  
</nav>
<main>
  <slot />
</main>

<footer />
