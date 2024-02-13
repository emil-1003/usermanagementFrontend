<script>
    import "../app.css";
    import Header from '../lib/Header.svelte';
    import Footer from '../lib/Footer.svelte';
</script>

<svelte:head>
	<title>Usermanagement</title>
</svelte:head>
  
<Header />
<main>
    <slot />
</main>
<Footer year="2024" domain="Usermanagement.dk" name="Emil Storgaard" />