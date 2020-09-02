<script>
  import Button from "../ui/Button/Button.svelte";
  import TextField from "../ui/TextField/TextField.svelte";
  import Heading from "../ui/Heading/Heading.svelte";

  let issueId;

  function handleClick() {
    console.log("api request", issueId);
  }

  function onChange({ target }) {
    issueId = target.value;
  }
</script>

<Heading level="{2}" text="Outreach template generator" />

<TextField
  label="Webcompat issue id from GitHub repo:"
  placeholder="GitHub issue id"
  value={issueId}
  type="number"
  name="issueId"
  on:input={onChange} />
<Button on:click={handleClick} disabled={!issueId} label="Explore templates" />
