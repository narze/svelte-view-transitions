<script lang="ts">
	import { transition } from '$lib/transition';
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<a href="/1" use:transition={{ name: 'title', type: 'astroFade' }}>Link to another page</a>
