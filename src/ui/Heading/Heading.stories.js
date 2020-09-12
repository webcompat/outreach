import Heading from "./Heading.svelte";

export default {
  title: "Example/Heading",
  component: Heading,
};

export const h1 = () => ({
  Component: Heading,
  props: {
    text: "This is h1 tag",
    level: 1,
  },
});

export const h2 = () => ({
  Component: Heading,
  props: {
    text: "This is h2 tag",
    level: 2,
  },
});

export const h3 = () => ({
  Component: Heading,
  props: {
    text: "This is h3 tag",
    level: 3,
  },
});
