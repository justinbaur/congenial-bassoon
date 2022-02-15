<script lang="ts">
	import Navigation from "./components/Navigation.svelte";
	import Router from "svelte-spa-router";
	import routes from "./routes";
  </script>
  
  <body>
	<header>
	  <nav>
		<Navigation />
	  </nav>
	</header>
  
	<main>
	  <Router {routes} />
	</main>
  </body>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>