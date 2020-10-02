export const buildOptions = (obj = {}) => {
  return Object.keys(obj).map((key) => {
    return { value: obj[key].value, label: obj[key].label };
  });
};

export const buildBugUrl = (issue) => {
  if (!issue || !issue.html_url) return;
  const { html_url } = issue;
  return `<a href="${html_url}">${html_url}</a>`;
};

export const substringInBetween = (str, a, b) => {
  if (!str || !a || !b) return;

  const start = str.indexOf(a) + a.length;
  return str.substring(start, str.indexOf(b, start));
};

export const buildSiteUrl = (issue) => {
  if (!issue || !issue.body) return;
  const url = substringInBetween(issue.body, "**URL**:", "**Browser")
    .trim()
    .replace(/\n/g, "");
  return `<a href="${url}">${url}</a>`;
};
