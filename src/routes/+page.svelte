<script lang="ts">
	import { transition } from '$lib/transition';
</script>

<h1>Svelte View Transitions</h1>

<ul>
	<li><a href="/1" use:transition={'one'}>Page One</a></li>
	<li><a href="/2" use:transition={{ name: 'two' }}>Page Two</a></li>
	<li><a href="/3" use:transition={{ name: 'three', type: 'astroFade' }}>Page Three</a></li>
</ul>
