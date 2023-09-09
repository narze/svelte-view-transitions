type ViewTransitionName = string;
type ViewTransitionType = 'astroFade' | undefined;

type TransitionOptions =
	| ViewTransitionName
	| {
			name: ViewTransitionName;
			type?: ViewTransitionType;
	  };

function isString(value: unknown): value is string {
	return typeof value === 'string';
}

export function transition(node: HTMLElement, options: TransitionOptions) {
	let name: ViewTransitionName;
	let type: ViewTransitionType;

	if (isString(options)) {
		name = options;
	} else {
		name = options.name;
		type = options.type;
	}

	if (!name) {
		throw new Error('Transition name is required');
	}

	// Normalize name
	name = name.replace(/[^a-z0-9]/gi, '-').toLowerCase();

	node.style.setProperty('view-transition-name', name);

	if (type === 'astroFade') {
		const duration = 180;

		const css = `
      :root {
        --svelte-view-transition-duration--${name}: ${duration}ms;
        --svelte-view-transition-timing-fn-astro: cubic-bezier(0.76, 0, 0.24, 1);
      }

      @keyframes svtFadeIn {
        from {
          opacity: 0;
        }
      }

      @keyframes svtFadeOut {
        to {
          opacity: 0;
        }
      }

      ::view-transition-old(${name}) {
        animation-duration: var(--svelte-view-transition-duration--${name});
        animation-timing-function: var(--svelte-view-transition-timing-fn-astro);
        animation-fill-mode: both;
        animation-name: svtFadeOut;
      }

      ::view-transition-new(${name}) {
        animation-duration: var(--svelte-view-transition-duration--${name});
        animation-timing-function: var(--svelte-view-transition-timing-fn-astro);
        animation-fill-mode: both;
        animation-name: svtFadeIn;
      }
    `;

		const styleTag = document.querySelector(`style[data-svelte-view-transition-name="${name}"]`);

		if (styleTag) {
			styleTag.innerHTML = css;
		} else {
			document.head.insertAdjacentHTML(
				'beforeend',
				`<style data-svelte-view-transition-name="${name}">${css}</style>`
			);
		}
	}

	return {
		destroy() {
			node.style.removeProperty('view-transition-name');

			const injectedStyle = document.querySelector(
				`style[data-svelte-view-transition-name="${name}"]`
			);

			if (injectedStyle) {
				injectedStyle.remove();
			}
		}
	};
}
