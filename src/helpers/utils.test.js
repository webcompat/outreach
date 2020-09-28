import {
  buildBugUrl,
  substringInBetween,
  buildSiteUrl,
  buildOptions,
} from "./utils";

const SEARCH_STRING =
  "<!-- @browser: Firefox 68.0 -->\n<!-- @ua_header: Mozilla/5.0 (Windows NT 6.3; rv:68.0) Gecko/20100101 Firefox/68.0 -->\n<!-- @reported_with: desktop-reporter -->\n\n**URL**: https://example.com/example\n\n**Browser / Version**: Firefox 68.0\n";

describe("Utils", () => {
  it(" - buildOptions returns a list of options", () => {
    expect(buildOptions()).toStrictEqual([]);
    expect(
      buildOptions({
        key1: {
          value: "test1",
          label: "test1",
        },
        key2: {
          value: "test2",
          label: "test2",
        },
      })
    ).toStrictEqual([
      {
        value: "test1",
        label: "test1",
      },
      {
        value: "test2",
        label: "test2",
      },
    ]);
  });

  it(" - buildBugUrl returns a link to a bug", () => {
    expect(buildBugUrl()).toBe(undefined);
    expect(buildBugUrl({})).toBe(undefined);
    expect(
      buildBugUrl({
        html_url: "https://github.com/webcompat/web-bugs/issues/1",
      })
    ).toBe(
      '<a href="https://github.com/webcompat/web-bugs/issues/1">https://github.com/webcompat/web-bugs/issues/1</a>'
    );
  });

  it(" - substringInBetween returns substring in between 2 strings", () => {
    expect(substringInBetween()).toBe(undefined);
    expect(substringInBetween("a string")).toBe(undefined);
    expect(substringInBetween("a string")).toBe(undefined);
    expect(
      substringInBetween("test text 122345 example", "test", "example")
    ).toBe(" text 122345 ");
    expect(substringInBetween(SEARCH_STRING, "URL**:", "**Browser")).toBe(
      " https://example.com/example\n\n"
    );
  });

  it(" - buildSiteUrl returns site url from issue body", () => {
    expect(buildSiteUrl()).toBe(undefined);
    expect(buildSiteUrl({ body: "" })).toBe(undefined);
    expect(buildSiteUrl({ body: SEARCH_STRING })).toBe(
      '<a href="https://example.com/example">https://example.com/example</a>'
    );
  });
});
