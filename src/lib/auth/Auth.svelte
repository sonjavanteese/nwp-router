<script>
	import SignIn from './forms/signin1.svelte'
	import SignOut from './forms/signout1.svelte'
	import { user } from '../stores'
	import {addToast} from '../toast'
const handleLogin = (event) => {
	console.log(`Login: ${JSON.stringify(event.detail)}`)
	addToast('you are signed in!', 'ok', 8000)
};
const handleLogout = (event) => {
	console.log(`Logout: ${JSON.stringify(event.detail)}`)
	addToast('you are signed out!', 'warning', 8000)
};
const handleError = (event) => {
	console.log(`Error: ${JSON.stringify(event.detail)}`)
	addToast(`Error: ${JSON.stringify(event.detail)}`, 'danger', 8000)
};
</script>

{#if $user}
	<div {...$$restProps}>
		<SignOut on:error={handleError} on:logout={handleLogout} />
	</div>
	<slot />
{:else}
	<div {...$$restProps}>
		<SignIn on:error={handleError} on:login={handleLogin} />
	</div>
{/if}
