import email from "./Email.svelte";

export const english = {
  templates: {
    email: {
      label: "Email",
      value: "email",
      template: email,
      isComponent: true,
    },
    twitter: {
      label: "Twitter",
      value: "twitter",
      template: "hi...",
    },
    linkedin: {
      label: "LinkedIn",
      value: "linkedin",
      template: "LinkedIn template",
    },
  },
  label: "English",
  value: "english",
};
