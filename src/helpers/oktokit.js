import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  baseUrl: "https://api.github.com",
});

export const getIssueById = (issueId) =>
  octokit.issues.get({
    owner: "webcompat",
    repo: "web-bugs",
    issue_number: issueId,
  });
