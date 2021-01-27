<script>
  export let label = "";
  export let disabled = false;
  export let id;
</script>

<style>
  button {
    background-color: var(--color-pure-yellow);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 16px;
    min-width: 140px;
    padding: 0.6em 24px;
  }

  button:hover {
    opacity: 0.85;
  }

  button:disabled {
    color: var(--color-black);
    cursor: not-allowed;
    opacity: 0.6;
  }
</style>

<button on:click {disabled} {id}> {label} </button>
