<script>
  import LanguageSelector from "./LanguageSelector.svelte";
  import TemplateSelector from "./TemplateSelector.svelte";
  import Previewer from "./Previewer.svelte";

  export let issue;

  let selectedLanguage = "english";
  let selectedTemplate = "email";

  const onLanguageSelect = (value) => {
    selectedLanguage = value;
  };

  const onTemplateSelect = (value) => {
    selectedTemplate = value;
  };
</script>

{#if issue}
  <LanguageSelector selected={selectedLanguage} {onLanguageSelect} />
  <TemplateSelector
    selected={selectedTemplate}
    {selectedLanguage}
    {onTemplateSelect} />
  <Previewer {selectedLanguage} {selectedTemplate} {issue} />
{/if}
