import email from "./Email.svelte";

export const russian = {
  templates: {
    email: {
      label: "Email",
      value: "email",
      template: email,
      isComponent: true,
    },
    linkedin: {
      label: "LinkedIn",
      value: "linkedin",
      template: "LinkedIn template",
    },
  },
  label: "Русский",
  value: "russian",
};
