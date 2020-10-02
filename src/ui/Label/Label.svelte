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

{#if label}
  <label for={name}>
    <span class="input-label"> {label} </span>
    <slot />
  </label>
{:else}
  <slot />
{/if}
