<script>
  import Label from "../Label/Label.svelte";

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

  input {
    border: 1px solid var(--color-black-40);
    border-radius: 2px;
    display: block;
    padding: 8px 24px 8px 8px;
    position: relative;
    transition: box-shadow .3s;
    width: 100%;
    z-index: 2;
  }

  input::placeholder {
    color: var(--color-dark-gray);
  }

  input:focus {
    box-shadow: 0 0 0 2px var(--color-desaturated-dark-blue);
    outline: 1px solid transparent;
  }
</style>

<div class="input-wrapper">
  <Label {name} {label}>
    <input value={val} {name} {type} {placeholder} on:input />
  </Label>
</div>
