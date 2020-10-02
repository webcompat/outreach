<script>
  import EnterIssue from "./components/EnterIssue.svelte";
  import TemplateBuilder from "./components/TemplateBuilder.svelte";

  let issue;

  const onIssueReady = (issueData) => {
    issue = { ...issueData };
  };
</script>

<style>
  .main {
    margin: auto;
    max-width: 1140px;
    width: 100%;
  }
</style>

<div class="main">
  <EnterIssue {onIssueReady} />
  <TemplateBuilder {issue} />
</div>
