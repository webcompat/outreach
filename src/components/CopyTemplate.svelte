<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Button from "../ui/Button/Button.svelte";
  import Clipboard from "clipboard";

  let copied = false;

  export let targetElementId;

  const buttonId = "copy-button";

  onMount(() => {
    if (!targetElementId) return;

    const clipboard = new Clipboard(`#${buttonId}`, {
      target: () => document.getElementById(targetElementId),
    });

    clipboard.on("success", function (e) {
      e.clearSelection();
      copied = true;
      setTimeout(() => (copied = false), 1000);
    });
  });
</script>

<style>
  .wrapper {
    align-items: baseline;
    display: flex;
    flex-direction: row;
  }

  .success {
    margin-left: 24px;
  }
</style>

<div class="wrapper">
  <Button label="Copy to clipboard" id={buttonId} />
  {#if copied}
    <div class="success" transition:fade>Copied!</div>
  {/if}
</div>
