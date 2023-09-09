# Svelte View Transitions

Apply basic [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) in your SvelteKit application. Inspired by [Astro's implementation of View Transitions](https://docs.astro.build/en/guides/view-transitions)

## Usage

Install

```shell
npm install svelte-view-transitions
```

Add `<ViewTransitions />` component in layout to make it available site-wide

```svelte
<!-- src/routes/+layout.svelte -->

<script>
  import ViewTransitions from 'svelte-view-transitions';
</script>

<ViewTransitions />

<slot />
```

### Transition name

Add `use:transition={name}` directive to HTML elements, the DOM elements with the same name will be paired.

```svelte
<!-- src/routes/+page.svelte -->
<script>
  import { transition } from 'svelte-view-transitions';
</script>

<ul>
  <li><a href="/foo" use:transition={'foo'}>Foo</a></li>
  <li><a href="/bar" use:transition={'bar'}>Bar</a></li>
</ul>

<!-- src/routes/foo/+page.svelte -->
<script>
  import { transition } from 'svelte-view-transitions';
</script>

<h1 use:transition={'foo'}>Foo</h1>

<a href="/">Home</a>
```
