import Select from "./Select.svelte";

export default {
  title: "Example/Select",
  component: Select,
};

export const basic = () => ({
  Component: Select,
  props: {
    options: [
      {label: "Option 1", value: 1},
      {label: "Option 2", value: 2},
      {label: "Option 3", value: 3},
    ],
    label: "Select element"
  },
});
