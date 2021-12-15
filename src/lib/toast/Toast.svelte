<script>
  import { fade, fly } from "svelte/transition";
  import { removeToast } from "./toastStore";
  export let toast;
  let dat = [
    {
      slug: "info",
      icon: "<svg class='w-10 h-10' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path></svg>",
      color: "#3b82f6",
    },
    {
      slug: "ok",
      icon: "<svg class='w-10 h-10' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'></path></svg>",
      color: "#059669",
    },
    {
      slug: "danger",
      icon: "<svg class='w-10 h-10' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'></path></svg>",
      color: "#ef4444",
    },
    {
      slug: "warning",
      icon: "<svg class='w-10 h-10' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01'></path></svg>",
      color: "#f59e0b",
    },
  ];
  let selected = {
      slug: "info",
      icon: "<svg class='w-10 h-10' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path></svg>",
      color: "#3b82f6",
  };
  $: if (toast && toast.type) {
    switch (toast.type) {
      case "ok":
      case "prim":
        selected = dat[1];
        break;
      case "danger":
      case "warn":
        selected = dat[2];
        break;
      case "warning":
        selected = dat[3];
        break;
      default:
        selected = dat[0];
        break;
    }
  }
</script>


<div
  in:fly={{ y: -100 }}
  out:fade={{ duration: 400 }}
  role="alert"
  on:click={() => {
    removeToast(toast.id);
  }}
>
{#if toast.type}
<div class='note {selected.slug}'>
  <span class='flex items-center h-full py-3 px-2'>
   {@html selected.icon}
  </span>
  <span class="flex-grow"></span>
  <div class='flex items-center px-4 py-2'>
    <div>
      <span class="text-lg font-medium">{@html toast.msg}</span>
    </div>
  </div>
</div>


{/if}

</div>







<style>

.note {
  @apply
    flex items-center max-w-sm w-full shadow-md rounded-lg overflow-hidden mx-auto;
}
.note.danger {
  color: #fff;
  background-color: #ef4444;
}
.note.ok {
  color: #fff;
  background-color: #059669;
}
.note.warning {
  background-color: #f59e0b;
  color: #fff;
}
.note.info {
  color: #fff;
  background-color: #3b82f6;
}
</style>
