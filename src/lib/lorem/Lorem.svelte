<script>
    import { onMount } from "svelte";
    import { loremdata, randomNumb, _lorem, cogIco, codeIco, prevIco, loadIco, savIco, resetIco, genIco } from "./loremdata";
    let headings = [
        [null, "No"],
        ["h1", "H1"],
        ["h2", "H2"],
        ["h3", "H3"],
        ["h4", "H4"],
    ];
    let ptag = true;
    let itag = false;
    let count = 1;
    let head = null;
    let det1 = true;
    let det2 = false;
    let cofbar = false;
    let loading1 = false;
    let loading2 = false;
    let counts = [];
    let result = '';
    const loadTimer = async (id) => {
        if (id == 1) {
            loading1 = true   
        } else {
            loading2 = true 
        }
        setTimeout(() => {
            loading1 = false
            loading2 = false
        }, 1000)
    }
    const saveConf = () => {
        loadTimer(1)
        let sobj = {
            ptag: ptag,
            itag: itag,
            count: count,
            head: head,
            det1: det1,
            det2: det2,
         }
         _lorem.set(sobj)
    }
    const loadConf = () => {
        loadTimer(2)
        ptag = $_lorem.ptag;
        itag = $_lorem.itag;
        count = $_lorem.count;
        head = $_lorem.head;
        det1 = $_lorem.det1;
        det2 = $_lorem.det2;
    }
    const reset = () => {
        loadConf()
        result = ""
        counts = []
        cofbar = false
        loading1 = false
        loading2 = false
    }
    const rend = (i) => {
        loremdata()[i];
    };
    const rand = () => {
        result = "";
        counts = randomNumb(count);
    };
    
    onMount(() => {
        loadConf()
    })
    $: if (head) {
        ptag = true
    }

    $: if (counts) {
        counts.forEach((x, i) => {
            if (i !== 0) {
                result += `\n\n`;
            }
            if (head) {
                result += `<${head}>${loremdata()[x].slug}</${head}> \n`;
            }
            if (ptag) {
                result += `<p>${loremdata()[x].quote}<br><i class="text-xs italic">${loremdata()[x].ref}</i></p>\n`;
            } else {
                result += `${loremdata()[x].quote}\n`;
            }
            if (itag) {
                result += `<img class="w-full max-h-64 object-cover mb-4" src="${loremdata()[x].file}" alt="${head}"> \n`;
            }
        });
    }
</script>
<svelte:head>
    <title>Lorem Generator</title>
</svelte:head>

<section class="w-full max-w-4xl mx-auto px-4 lg:px-0 py-4 space-y-4">
    <article class="p-4 border rounded-xl">  
        <div class="flex items-center justify-between py-2">
            <span class="summary">Lorem Ipsum Generator</span>
            <span class:text-blue-800={cofbar} on:click={() => (cofbar = !cofbar)}>{@html cogIco}</span>
        </div>
        <label class="flex flex-wrap  mb-1 md:items-center">
            <span class="label">How Many Fucking Paragraphs?</span>
            <input class="input" type="number" bind:value="{count}" min="1" max="12" /> 
        </label>
        <label class="flex flex-wrap  mb-1 md:items-center">
            <span class="label">Want a Motherfucking <code class="text-red-700">Header</code> tag?</span>
            <select class="input" bind:value="{head}" on:change="{() => result = ''}">
                {#each headings as [k, v]}
                <option value="{k}">
                    {v}
                </option>
                {/each}
            </select>
        </label>
        <label class="flex items-center py-1 mb-1">
            <span class="w-full text-lg text-gray-500">Add Some Fucking Bitchass <code class="text-red-700">&lt;p&gt;</code> Tags</span>
            <input type="checkbox" class="h-8 w-8 mx-2" bind:checked="{ptag}" on:change={() => result = ''} />
        </label>
        <label class="flex items-center py-1 mb-1">
            <span class="w-full text-lg text-gray-500">Add a Fucking <code class="text-red-700">&lt;img&gt;</code> Tag</span>
            <input type="checkbox" class="h-8 w-8 mx-2" bind:checked="{itag}" on:change={() => result = ''} />
        </label>
        {#if cofbar}
             <section class="flex flex-wrap pt-4 pb-2 items-center">
                <button on:click={saveConf} class="py-2 px-4 mr-1 mb-1 bg-blue-800 text-white rounded {loading1 ? 'opacity-50' : ''}">
                    {loading1 ? '..... loading ' : 'Save Settings'} <span class="pl-2">{@html savIco}</span>
                </button>
                <button on:click={loadConf} class="py-2 px-4 mr-1 mb-1 bg-blue-800 text-white rounded {loading2 ? 'opacity-50' : ''}">
                    {loading2 ? '..... loading ' : 'Load Settings'} <span class="pl-2">{@html loadIco}</span>
                </button>
             </section>
        {:else}
            <section class="flex flex-wrap pt-4 pb-2 items-center">
                <button on:click="{rand}" class="py-2 px-4 mr-1 mb-1 bg-blue-600 text-white rounded hover:bg-blue-700 active:bg-blue-700 disabled:opacity-50">
                    <span>Generate</span> <span class="pl-2">{@html genIco}</span>
                </button>
                <button on:click="{reset}"class="py-2 px-4 mr-1 mb-1 bg-red-500 text-white rounded hover:bg-red-600 active:bg-red-700 disabled:opacity-50">
                    <span>Reset</span>  <span class="pl-2">{@html resetIco}</span>
                </button>
                <span class="flex-grow"></span>
                {#if result}
                <button on:click={() => (det1 = !det1)} class="py-2 px-4 mr-1 mb-1 {!det1 ? 'bg-gray-400' : 'bg-dark-200'} text-white rounded disabled:opacity-50">
                    <span class="px-1">{!det1 ? 'Show ' : 'Hide '} </span> <span class="px-1">{@html codeIco}</span>
                </button>
                <button on:click={() => (det2 = !det2)} class="py-2 px-4 mr-1 mb-1 {!det2 ? 'bg-gray-400' : 'bg-dark-200'} text-white rounded disabled:opacity-50">
                    <span class="px-1">{!det2 ? 'Show ' : 'Hide '} </span> <span class="px-1">{@html prevIco}</span>
                </button>
                {/if}
            </section>
        {/if}
    </article>
    <div>
        {#if result}
            <div class="bg-white">
                <details bind:open={det1}>
                    <summary class="summary">
                        Code Output
                    </summary>
                    <div class="py-4">
                        <pre>{result.trim()}</pre>
                    </div>
                </details>
            </div>
        {/if}
    
        {#if result}
        <div class="py-4 bg-white">
            <details bind:open={det2}>
                <summary class="summary">
                        Code Preview
                </summary>
                <div class="py-4">  {@html result} </div>
                <section>
                    <blockquote>
                        <p>Lorem Ipsum Generator by <q class="block italic mt-2 text-sm" cite="https://nwp-cgn.de/">nwp-cgn</q></p>
                    </blockquote>
                </section>
            </details>
        </div>
        {/if}
    </div>

</section>


<style>
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}
.bg-blue-800 {
  --tw-bg-opacity: 1;
  background-color: rgba(7, 89, 133, var(--tw-bg-opacity));
}
.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgba(2, 132, 199, var(--tw-bg-opacity));
}
.hover\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(3, 105, 161, var(--tw-bg-opacity));
}
.active\:bg-blue-700:active {
  --tw-bg-opacity: 1;
  background-color: rgba(3, 105, 161, var(--tw-bg-opacity));
}
.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgba(239, 68, 68, var(--tw-bg-opacity));
}
.hover\:bg-red-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(220, 38, 38, var(--tw-bg-opacity));
}
.active\:bg-red-700:active {
  --tw-bg-opacity: 1;
  background-color: rgba(185, 28, 28, var(--tw-bg-opacity));
}
.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgba(156, 163, 175, var(--tw-bg-opacity));
}
.bg-dark-200 {
  --tw-bg-opacity: 1;
  background-color: rgba(50, 50, 50, var(--tw-bg-opacity));
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}
.rounded-xl {
  border-radius: 0.75rem;
}
.rounded {
  border-radius: 0.25rem;
}
.border {
  border-width: 1px;
}
.block {
  display: block;
}
.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.hidden {
  display: none;
}
.flex-wrap {
  -ms-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
.items-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.justify-between {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
.flex-grow {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
}
.h-8 {
  height: 2rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.mr-1 {
  margin-right: 0.25rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.max-h-64 {
  max-height: 16rem;
}
.max-w-4xl {
  max-width: 56rem;
}
.object-cover {
  -o-object-fit: cover;
  object-fit: cover;
}
.opacity-50 {
  opacity: 0.5;
}
.disabled\:opacity-50:disabled {
  opacity: 0.5;
}
.p-4 {
  padding: 1rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.pt-4 {
  padding-top: 1rem;
}
.pb-2 {
  padding-bottom: 0.5rem;
}
.pl-2 {
  padding-left: 0.5rem;
}
.text-red-700 {
  --tw-text-opacity: 1;
  color: rgba(185, 28, 28, var(--tw-text-opacity));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgba(107, 114, 128, var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}
.text-blue-800 {
  --tw-text-opacity: 1;
  color: rgba(7, 89, 133, var(--tw-text-opacity));
}
.italic {
  font-style: italic;
}
.w-full {
  width: 100%;
}
.w-8 {
  width: 2rem;
}
@media (min-width: 768px) {
  .md\:items-center {
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
}
@media (min-width: 1024px) {
  .lg\:px-0 {
    padding-left: 0px;
    padding-right: 0px;
  }
}
h1, h2, h3, h4, h5, h6 {
  font-weight: 500;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0.5rem;
  --tw-text-opacity: 1;
  color: rgba(31, 41, 55, var(--tw-text-opacity));
}
h1 {
  font-size: 3.75rem;
  line-height: 1;
}
h2 {
  font-size: 3rem;
  line-height: 1;
}
h3 {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
h4 {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
p {
  font-family: Graphik,sans-serif;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0.5rem;
  --tw-text-opacity: 1;
  color: rgba(75, 85, 99, var(--tw-text-opacity));
}
.summary {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin: 0px;
  --tw-text-opacity: 1;
  color: rgba(17, 24, 39, var(--tw-text-opacity));
  font-style: normal;
}
.foonote {
  display: block;
  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  font-size: 0.75rem;
  line-height: 1rem;
  --tw-text-opacity: 1;
  color: rgba(156, 163, 175, var(--tw-text-opacity));
  font-style: italic;
}
.input {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgba(156, 163, 175, var(--tw-border-opacity));
  border-radius: 0.5rem;
  border-width: 1px;
  margin-bottom: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  width: 100%;
}
@media (min-width: 640px) {
  .input {
    width: 33.333333%;
  }
}
.label {
  font-size: 1.125rem;
  line-height: 1.75rem;
  --tw-text-opacity: 1;
  color: rgba(107, 114, 128, var(--tw-text-opacity));
  width: 100%;
}
@media (min-width: 640px) {
  .label {
    width: 66.666667%;
  }
}
blockquote {
  border-left: 0.3rem solid #d1d1d1;
  margin-left: 0;
  margin-right: 0;
  padding: 1rem 1.5rem;
}
blockquote *:last-child {
  margin-bottom: 0;
}
code {
  background: #f4f5f6;
  border-radius: 0.4rem;
  font-size: 86%;
  margin: 0 0.2rem;
  padding: 0.2rem 0.5rem;
  white-space: nowrap;
}
pre {
  background: #f4f5f6;
  border-left: 0.3rem solid #3b82f6;
  overflow-y: hidden;
  overflow-x: auto;
  padding: 1rem 0.5rem;
}
pre > code {
  border-radius: 0;
  display: block;
  padding: 1rem 1.5rem;
  white-space: pre;
}
button {
  border-width: 0px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
button:focus {
  border-width: 0px;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
summary {
  border-width: 0px;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
summary:focus {
  border-width: 0px;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
</style>