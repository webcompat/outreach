<script>
  /**
   * Current implementation is with if/else blocks
   * until https://github.com/sveltejs/svelte/issues/2324 is implemented
   * */

  export let level = 1;
  export let text = "";
</script>

<style>
  h1 {
    font-size: 1.8em;
    font-weight: 600;
  }

  h2 {
    font-size: 1.5em;
    font-weight: 500;
  }

  h3 {
    font-size: 1.3em;
    font-weight: 400;
  }

  h1,
  h2,
  h3 {
    margin: 0.5em 0;
  }
</style>

{#if level === 1}
  <h1>{text}</h1>
{:else if level === 2}
  <h2>{text}</h2>
{:else if level === 3}
  <h3>{text}</h3>
{/if}
