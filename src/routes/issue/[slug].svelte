<script context="module">
  import filterXSS from "xss";
  import { getIssueById } from "../../helpers/oktokit";

  const onError = function (response) {
    if (response.status === 404) {
      return this.error(404, "Not found");
    }

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

  export async function preload({ params }) {
    const sanitizedId = filterXSS(params.slug);

    if (!sanitizedId || !isFinite(sanitizedId)) {
      return this.error(404, "Not found");
    }

    const res = await getIssueById(sanitizedId).catch(onError.bind(this));

    if (res && res.status === 200) {
      return { issue: getIssueData(res) };
    }
  }
</script>

<script>
  import TemplateBuilder from "../../components/TemplateBuilder.svelte";
  import IssueDetails from "../../components/IssueDetails.svelte";
  export let issue;
</script>

<svelte:head>
  <title>Outreach template generator</title>
</svelte:head>

<IssueDetails {issue} />
<TemplateBuilder {issue} />
