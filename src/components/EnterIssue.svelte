<script>
  import filterXSS from "xss";
  import { goto } from "@sapper/app";
  import Button from "../ui/Button/Button.svelte";
  import TextField from "../ui/TextField/TextField.svelte";
  import Heading from "../ui/Heading/Heading.svelte";

  let issueId;

  const handleClick = () => {
    const sanitizedId = filterXSS(issueId);

    if (!sanitizedId || !isFinite(sanitizedId)) return;

    goto(`/issue/${sanitizedId}`);
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
    type="number"
    name="issueId"
    on:input={onChange} />

  <Button
    on:click={handleClick}
    disabled={!issueId}
    label="Explore templates" />
</div>
