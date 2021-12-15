<script>
  
	import { createEventDispatcher } from 'svelte';
  import { user } from "../../stores";
  import { supabase } from "../../db";
  const dispatch = createEventDispatcher();
  let email;
  let password;
  let loading;
  const handleSubmit = async (e) => {
    loading = true;
    try {
      const { user, error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      dispatch('login', user)
    } catch (error) {
      dispatch('error', error)
    } finally {
      loading = false;
    }
  };
  const handleLogout = async () => {
    loading = true;
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      dispatch('logout', 'logged out!')
    } catch (error) {
      dispatch('error', error)
    } finally {
      loading = false;
    }
  };
</script>

<section {...$$restProps}>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="frame">
      <div class="mb-2">
        <label class="label" for="email">E-mail</label>
        <input
          bind:value={email}
          class="input"
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          required
        />
      </div>
      <div class="mb-2">
        <label class="label" for="password">Password</label>
        <input
          bind:value={password}
          class="input"
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          required
        />
      </div>
      <div class="grid gap-2 py-2">
        <button class="btn btn-blue">Sign In</button>
      </div>
    </div>
  </form>
</section>


