<script>
  export let issue;
  const { number, title } = issue || {};
</script>

<style>
  .issue-title {
    font-weight: 600;
  }
</style>

{#if issue}
  <div>Your issue is <span class="issue-title">#{number} - {title}</span></div>
{/if}
