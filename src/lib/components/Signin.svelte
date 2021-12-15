<script>
  import { user } from "../stores";
  import { supabase } from "../db";
  let email;
  let password;
  let loading;
  const handleSubmit = async (e) => {
    loading = true;
    try {
      const { user, error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      alert("you are logged in!");
    } catch (error) {
      alert(error);
    } finally {
      loading = false;
      console.log("handleSubmit", e);
    }
  };
  const handleLogout = async () => {
    loading = true;
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      alert("your successfully logged out");
    } catch (error) {
      alert(error);
    } finally {
      loading = false;
    }
  };
  $: console.log("User: ", $user);
</script>

<section>
  {#if $user}
  <form on:submit|preventDefault={handleLogout}>
    <div class="frame">
      <div class="mb-2">
        <label class="label" for="email">User</label>
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
      <div class="pt-2">
        <button class="w-full btn btn-red">Sign Out</button>
      </div>
    </div>
  </form>
  {/if}
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
      <div class="pt-2">
        <button class="button">Sign In</button>
      </div>
    </div>
  </form>
</section>


