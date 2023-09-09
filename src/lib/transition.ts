import type { U } from 'vitest/dist/reporters-cb94c88b.js';

type ViewTransitionName = string;

type TransitionOptions = ViewTransitionName;

function isString(value: unknown): value is string {
	return typeof value === 'string';
}

export function transition(node: HTMLElement, options: TransitionOptions) {
	let name: string | undefined;

	if (isString(options)) {
		name = options;
	}

	if (name) {
		node.style.setProperty('view-transition-name', options);
	}

	return {
		destroy() {
			if (name) {
				node.style.removeProperty('view-transition-name');
			}
		}
	};
}
