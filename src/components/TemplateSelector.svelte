<script>
  import Select from "../ui/Select/Select.svelte";
  import { languages } from "../templates";
  import { buildOptions } from "../helpers/utils";

  export let selectedLanguage;
  export let selected;
  export let onTemplateSelect;

  $: templates = selectedLanguage ? languages[selectedLanguage].templates : {};
  $: options = buildOptions(templates);

  const onChange = ({ target }) => {
    onTemplateSelect(target.value);
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
    {options}
    {selected}
    label="Select template"
    name="templates"
    on:change={onChange} />
</div>
