<script lang="ts">
	import { transition } from '$lib/transition';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 use:transition={data.page}>Page {data.page}</h1>

<p>Back to <a href="/">home page</a></p>
