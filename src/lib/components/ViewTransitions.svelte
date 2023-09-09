<script lang="ts">
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if ('startViewTransition' in document) {
			return new Promise((resolve) => {
				document.startViewTransition(async () => {
					resolve();

					await navigation.complete;
				});
			});
		}
	});
</script>
