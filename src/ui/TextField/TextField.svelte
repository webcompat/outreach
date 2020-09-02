<script>
  export let val = "";
  export let name = "";
  export let type = "text";
  export let label = "";
  export let placeholder = "";
</script>

<style>
  .input-wrapper {
    margin-bottom: 16px;
  }

  .input-label {
    display: inline-block;
    margin-bottom: 2px;
    font-size: 0.8em;
  }

  input {
    border: 1px solid var(--color-input-border);
    border-radius: 2px;
    display: block;
    padding: 8px 24px 8px 8px;
    position: relative;
    transition: box-shadow 0.3s;
    width: 100%;
    z-index: 2;
  }

  input::placeholder {
    color: var(--color-input-placeholder);
  }

  input:focus {
    box-shadow: 0 0 0 2px var(--color-input-focus);
    outline: 1px solid transparent;
  }
</style>

<div class="input-wrapper">
  <label for={name}>
    <span class="input-label"> {label} </span>
    <input value={val} {name} {type} {placeholder} on:input />
  </label>
</div>
