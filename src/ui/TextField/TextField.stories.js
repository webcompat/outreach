import TextField from "./TextField.svelte";

export default {
  title: "Example/TextField",
  component: TextField,
};

export const basic = () => ({
  Component: TextField,
  props: {
    label: "Please enter value",
    placeholder: "placeholder",
  },
});
