<script>
  import Select from "../ui/Select/Select.svelte";
  import { languages } from "../templates";
  import { buildOptions } from "../helpers/utils";

  export let onLanguageSelect;
  export let selected;

  const options = buildOptions(languages);

  const onSelect = ({ target }) => {
    onLanguageSelect(target.value);
  };
</script>

<style>
  @media (min-width: 665px) {
    .language-wrapper {
      width: 50%;
    }
  }
</style>

<div class="language-wrapper">
  <Select
    {selected}
    {options}
    label="Select language"
    name="languages"
    on:change={onSelect} />
</div>
