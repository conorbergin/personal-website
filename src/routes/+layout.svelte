<script>
  import { dev } from '$app/environment'
  import { inject } from '@vercel/analytics'

  inject({ mode: dev ? 'development' : 'production' })
  import '../styles.scss'
  import Goblin from '$lib/Goblin.svelte'

  export const prerender = true
</script>

<nav>
  <a href="/">[Home]</a>
  <a href="/about">[About]</a>
</nav>

<Goblin />

<main>
  <slot />
</main>

<footer />
