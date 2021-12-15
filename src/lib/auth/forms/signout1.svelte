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
  <form on:submit|preventDefault={handleLogout}>
    <div class="frame">
      <div class="mb-2">
        <label class="label" for="uemail">User Email</label>
        <input
          class="input"
          type="email"
          placeholder="Email"
          id="uemail"
          value={$user.email}
          disabled
        />
      </div>
      <div class="mb-2">
        <label class="label" for="uid">Id</label>
        <input
         class="input"
           type="text"
          placeholder="User-Id"
          id="uid"
          value={$user.id}
          disabled
        />
      </div>
      <div class="grid gap-2 py-2">
        <button class="btn btn-red">Sign Out</button>
      </div>
    </div>
  </form>
</section>


