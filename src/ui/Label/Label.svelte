<script>
  export let label;
  export let name;
</script>

<style>
  .input-label {
    display: inline-block;
    font-size: .7em;
  }
</style>

<label for={name}>
  <span class="input-label"> {label} </span>
  <slot></slot>
</label>
