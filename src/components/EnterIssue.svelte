<script>
  import filterXSS from "xss";
  import { goto } from "@sapper/app";
  import Button from "../ui/Button/Button.svelte";
  import TextField from "../ui/TextField/TextField.svelte";
  import Heading from "../ui/Heading/Heading.svelte";
  import { getIssueById } from "../helpers/oktokit";

  const NOT_FOUND_TEXT =
    "Can't find an issue with this id. It's either deleted or doesn't exist. Please try another id.";

  let issueId;
  let error;

  const onError = function (response) {
    if (response.status === 404) {
      error = NOT_FOUND_TEXT;
    } else {
      error = response.message;
    }
  };

  const handleClick = async () => {
    const sanitizedId = filterXSS(issueId);

    if (!sanitizedId || !isFinite(sanitizedId)) return;

    const res = await getIssueById(sanitizedId).catch(onError);

    if (res && res.status === 200) {
      goto(`/issue/${sanitizedId}`);
    }
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

  .enter-error {
    color: #c00;
  }
</style>

<div class="enter-wrapper">
  <Heading level={2} text="Outreach template generator" />

  <TextField
    label="Webcompat issue id from GitHub repo:"
    placeholder="GitHub issue id"
    type="number"
    name="issueId"
    on:input={onChange} />

  <Button
    on:click={handleClick}
    disabled={!issueId}
    label="Explore templates" />

  {#if error}
    <div class="enter-error">{error}</div>
  {/if}
</div>
