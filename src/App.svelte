<script>
  import { Router, Route, NotFound, redirect } from "./lib/pager";
  import {Toasts, addToast } from './lib/toast'
  import {activeRoute} from './lib/pager/Router.svelte';
  import Start from "./routes/Start.svelte";
  import Archiv from "./routes/Archiv.svelte";
  import Editor from "./routes/Editor.svelte";
  import Admin from "./routes/Admin.svelte";
  import Auth from "./routes/Auth.svelte";
  
  import Navbar from "./lib/components/Navbar.svelte";
  import {user, isOpen} from './lib/stores'
  import {supabase} from './lib/db'
import { onMount } from "svelte";
  $user = supabase.auth.user()
  supabase.auth.onAuthStateChange((event, session) => {
    if (!session) {
      $user = null
      console.log("StateChange:", event, session);
    } else {
      $user = session.user
      console.log("StateChange:", event, session)
    }
  })
  const guard = (ctx, next) => {
    // check for example if user is authenticated
    if (!$user) {
      addToast("you are not logged in! please sign in!", "danger", 4000)
      redirect("/login");
    } else {
      next();
    }

  };
  const pda = {
		titel: 'Page Name',
		index: 1,
		data: 'https://svelte.dev'
	};
  onMount(() => {
    addToast("Page Mounted! Give me more of this shit! Lorem ipsum dolor sit, amet consectetur adipisicing elit.", "info", 4000)
  })
  $: console.log("aR", $activeRoute);
</script>
<Toasts />
<Navbar />
<hr>
<main>
  <Router>
    <Route path="/" component={Start} {...pda}  />
    <Route path="/archiv" component={Archiv} middleware={[guard]} />
    <Route path="/editor" component={Editor} middleware={[guard]} />
    <Route path="/admin" component={Admin} middleware={[guard]} />
    <Route path="/login" component={Auth} />
    <Route path="/archiv/:id" let:params>
      <h2>Hello {params.id}!</h2>
      <p>Here is your profile</p>
    </Route>
    <NotFound>
      <h2>Sorry. Page not found.</h2>
    </NotFound>
  </Router>
</main>

<footer>

</footer>


<style>

</style>
