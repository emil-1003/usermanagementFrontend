<script>
    import { page } from '$app/stores'
</script>

{#if !$page.data.user}
    <h1>You are not looged in</h1>
{/if}

{#if $page.data.user}
    <h1>Welcome: {$page.data.user.email}</h1>
    <h2>Role id: {$page.data.user.role_id}</h2>
{/if}

