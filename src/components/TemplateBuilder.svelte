<script>
  import LanguageSelector from "./LanguageSelector.svelte";
  import TemplateSelector from "./TemplateSelector.svelte";
  import Previewer from "./Previewer.svelte";

  export let issue;

  const LANG = "english";
  const TPL = "email";

  let selectedLanguage = LANG;
  let selectedTemplate = TPL;

  const onLanguageSelect = (value) => {
    selectedLanguage = value;
    selectedTemplate = TPL;
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
