<script>
  import { languages } from "../templates";

  export let selectedLanguage;
  export let selectedTemplate;
  export let issue;

  const getTemplate = (languages, lng, tpl) => {
      if (lng && tpl) {
          return languages[lng].templates[tpl];
      }
  };

  $: tpl = getTemplate(languages, selectedLanguage, selectedTemplate) || {};
</script>

<style>
  .previewer {
    background-color: var(--color-light-blue);
    font-size: .8em;
    margin: 32px 0;
    padding: 16px 32px;
  }
</style>

<div class="previewer">
{#if tpl.isComponent}
  <svelte:component this={tpl.template} url="https://example.com" bugUrl="https://example.com"/>
{:else}
   {tpl.template}
{/if}
</div>

