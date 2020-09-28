<script>
  import filterXSS from "xss";
  import { getIssueById } from "../helpers/oktokit";
  import Button from "../ui/Button/Button.svelte";
  import TextField from "../ui/TextField/TextField.svelte";
  import Heading from "../ui/Heading/Heading.svelte";
  import IssueDetails from "./IssueDetails.svelte";

  export let onIssueReady;

  let promise;
  let loading = false;
  let issueId;

  const onError = (response) => {
    loading = false;
    throw new Error(
      `There has been an error with your request: ${response.message}`
    );
  };

  const getIssueData = (response) => {
    const { title, number, body, html_url } = response.data;
    return {
      title,
      number,
      body,
      html_url,
    };
  };

  const fetchIssue = async () => {
    const res = await getIssueById(issueId).catch(onError);

    loading = false;

    if (res && res.status === 200) {
      const issue = getIssueData(res);
      onIssueReady(issue);
      return issue;
    }
  };

  const handleClick = () => {
    const sanitizedId = filterXSS(issueId);

    if (!sanitizedId || !isFinite(sanitizedId)) return;

    loading = true;
    promise = fetchIssue();
  };

  const onChange = ({ target }) => {
    issueId = target.value;
  };
</script>

<style>
  @media (min-width: 665px) {
    .enter-wrapper {
      width: 50%;
    }
  }
</style>

<div class="enter-wrapper">
  <Heading level={2} text="Outreach template generator" />

  <TextField
    label="Webcompat issue id from GitHub repo:"
    placeholder="GitHub issue id"
    value={issueId}
    type="number"
    name="issueId"
    on:input={onChange} />

  <Button
    on:click={handleClick}
    disabled={!issueId || loading}
    label="Explore templates" />
</div>
<div>
  {#await promise}
    Loading...
  {:then issue}
    {#if issue}
      <IssueDetails {issue} />
    {/if}
  {:catch error}
    {error.message}
  {/await}
</div>
