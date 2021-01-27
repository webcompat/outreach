<script>
  import Label from "../Label/Label.svelte";

  export let label;
  export let name;
  export let options = [];
  export let placeholder = "Select an option";
  export let selected;
</script>

<style>
  select {
    appearance: none;
    background-color: #fff;

    /* stylelint-disable-next-line declaration-colon-newline-after */
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23808080%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
      linear-gradient(to bottom, #fff 0%, #f2f2f2 100%);
    background-position: right 0.7em top 50%, 0 0;
    background-repeat: no-repeat, repeat;
    background-size: 0.65em auto, 100%;
    border: 1px solid var(--color-light-gray);
    border-radius: 2px;
    cursor: pointer;
    padding: 0.4em;
    width: 100%;
  }

  select::-ms-expand {
    display: none;
  }

  select:hover {
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04) inset;
  }
</style>

<!-- svelte-ignore a11y-no-onchange -->

<Label {name} {label}>
  <select {name} on:change>
    <option value="default" disabled selected={!selected}>{placeholder}</option>
    {#each options as option}
      <option value={option.value} selected={option.value === selected}>
        {option.label}
      </option>
    {/each}
  </select>
</Label>
