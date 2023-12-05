<script>
  import { dev } from '$app/environment'
  import { inject } from '@vercel/analytics'

  inject({ mode: dev ? 'development' : 'production' })
  import '../styles.scss'

</script>

<nav>
  <a href="/">[Home]</a>
  <a href="/about">[About]</a>
</nav>

<main>
  <slot />
</main>

<footer />
