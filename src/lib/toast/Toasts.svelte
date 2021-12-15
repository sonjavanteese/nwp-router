<script>
    import { flip } from "svelte/animate";
    import Toast from "./Toast.svelte";
    import { toasts, removeToast } from "./toastStore";
</script>

  
{#if $toasts.length}
  <section class="">
    {#each $toasts as toast (toast.id)}
      <div animate:flip on:click={() => {removeToast(toast.id)}}>
        <Toast {toast} />
      </div>
    {/each}
  </section>
{/if}

<style>
  section {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    max-height: 100%;
    z-index: 42;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
  }
</style>