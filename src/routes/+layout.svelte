<script>
  import '../styles.scss'
  import Goblin from '$lib/Goblin.svelte';
</script>

<nav>
  <a href="/">[Home]</a>
  <a href="/about">[About]</a>
</nav>

<Goblin/>

<main>
  <slot />
</main>

<footer />

