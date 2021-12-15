<script>
    import Auth from "../lib/auth/Auth.svelte"
    import {user} from '../lib/stores'
    export let name = 'Auth Seite';
</script>

<section class="page-container">
    <header class="flex items-center py-4">
        <h2>{$user ? 'User Profil' : 'SignIn'}</h2>
    </header>
    <article>
       <Auth class="p-4 border rounded" /> 
    </article>
</section>

