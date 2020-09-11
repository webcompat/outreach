<script>
  export let label = "";
  export let disabled = false;
</script>

<style>
  button {
    background-color: var(--color-first);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 16px;
    min-width: 140px;
    padding: .6em 24px;
  }

  button:hover {
    opacity: .85;
  }

  button:disabled {
    color: var(--color-button-disabled);
    cursor: not-allowed;
    opacity: .6;
  }
</style>

<button on:click {disabled}> {label} </button>
