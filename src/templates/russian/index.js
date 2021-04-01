import email from "./Email.svelte";

export const russian = {
  templates: {
    email: {
      label: "Email",
      value: "email",
      template: email,
      isComponent: true,
    },
  },
  label: "Русский",
  value: "russian",
};
