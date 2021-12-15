<script>
    export let name = 'Startseite';
    export let titel;
    export let index;
    export let data;
    $: console.log(titel, index, data);
</script>

<section class="page-container">
    <header>
        <h2>{name}</h2>
    </header>
    <article>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Magnam minima amet harum itaque inventore incidunt! 
        Dolorum velit quisquam maxime amet cupiditate dicta delectus! 
        Distinctio, atque officiis. Expedita dolorem ipsa iusto. 
        </p>
        <p>
            <a href="/archiv" class="text-blue-800 font-medium">Archiv</a>
            <a href="/editor" class="text-blue-800 font-medium">Editor</a>
            <a href="/user/testname" class="text-blue-800 font-medium">Admin</a>
        </p>
    </article>
</section>


<style>
    header {
        padding: 4rem 0;
    }
</style>

