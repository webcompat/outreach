<script>
  export let issue;
  const { number, title } = issue || {};
</script>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .issue-title {
    font-weight: 600;
  }

  .new-issue {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 665px) {
    .wrapper {
      flex-direction: row;
    }

    .gap {
      margin: 0 16px;
    }

    .new-issue {
      flex-direction: row;
    }
  }
</style>

{#if issue}
  <div class="wrapper">
    <div>
      Your issue is
      <span class="issue-title">#{number} - {title}</span>
    </div>
    <div class="new-issue">
      <span class="gap">or</span>
      <a href="/">enter a new issue id</a>
    </div>
  </div>
{/if}
