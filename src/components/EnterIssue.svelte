<script>
  import { getIssues } from "../helpers/oktokit";
  import Button from "../ui/Button/Button.svelte";
  import TextField from "../ui/TextField/TextField.svelte";
  import Heading from "../ui/Heading/Heading.svelte";

  let issueId;
  let promise = Promise.resolve("");

  async function fetchIssues() {
    const res = await getIssues(issueId);
    if (res && res.status === 200) {
      return res.data.title;
    } else {
      throw new Error(res);
    }
  }

  function handleClick() {
    if (!issueId) return;
    promise = fetchIssues();
  }

  function onChange({ target }) {
    issueId = target.value;
  }
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
    disabled={!issueId}
    label="Explore templates" />

  <div>
    {#await promise}
      Loading...
    {:then title}
      {title}
    {:catch error}
      {error.message}
    {/await}
  </div>
</div>
