<style>
	main {
		margin: 0 auto;
		max-width: 80vw;
	}
	nav, footer {
		padding: 1em;
		background: #ccc;
	}
	footer {
		margin-top: 3em;
	}
</style>

<nav>
	<a href="/">home</a>
	<a href="/blog">blog</a>
</nav>

<main>
	<slot />
</main>

<footer>
	tohle je footer
</footer>