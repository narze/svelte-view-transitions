export function load({ params }: { params: { id: '1' | '2' | '3' } }) {
	const pages = {
		'1': 'one',
		'2': 'two',
		'3': 'three'
	};

	return {
		page: pages[params.id]
	};
}
