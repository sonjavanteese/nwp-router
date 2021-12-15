<script>
   import {activeRoute} from '../pager/Router.svelte';
   const navi = [
    {
      "path": "/",
      "name": "Start",
      "guard": false
    },
    {
      "path": "/archiv",
      "name": "Archiv",
      "guard": true
    },
    {
      "path": "/editor",
      "name": "Editor",
      "guard": true
    },
    {
      "path": "/admin",
      "name": "User",
      "guard": true
    },
    {
      "path": "/login",
      "name": "Login",
      "guard": false
    }
  ];
</script>

<header>
    <nav class="flex items-center px-4">
        {#each navi as {path, name, guard}}
            <a href={path} class="link" class:active={$activeRoute.path === path} class:disabled={guard}>{name}</a>
        {:else}
            <span>Appbar</span>
        {/each}
    </nav>
</header>


<style>
    .link {
        @apply inline-flex items-center justify-center text-blue-800 font-semibold px-2;
    }
    .link.active {
        @apply text-red-800;
    }
    .link.disabled {
        @apply text-gray-400;
    }
</style>

