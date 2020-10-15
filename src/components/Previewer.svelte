<script>
  import { languages } from "../templates";
  import { buildBugUrl, buildSiteUrl } from "../helpers/utils";

  export let selectedLanguage;
  export let selectedTemplate;
  export let issue;

  const getTemplate = (languages, lng, tpl) => {
    if (lng && tpl) {
      return languages[lng].templates[tpl];
    }
  };

  $: tpl = getTemplate(languages, selectedLanguage, selectedTemplate) || {};
  $: bugUrl = buildBugUrl(issue);
  $: websiteUrl = buildSiteUrl(issue);
</script>

<style>
  .previewer {
    background-color: var(--color-light-blue);
    font-size: 0.8em;
    line-height: 1.8em;
    margin: 32px 0;
    padding: 16px 32px;
    word-break: break-word;
  }
</style>

<div class="previewer">
  {#if tpl.isComponent}
    <svelte:component this={tpl.template} url={websiteUrl} {bugUrl} />
  {:else}{tpl.template}{/if}
</div>
