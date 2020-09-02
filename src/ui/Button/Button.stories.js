import Button from "./Button.svelte";

export default {
  title: "Example/Button",
  component: Button,
};

export const basic = () => ({
  Component: Button,
  props: {
    label: "Button",
  },
});
