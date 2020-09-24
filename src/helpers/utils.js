export const buildOptions = (obj) => {
  return Object.keys(obj).map((key) => {
    return { value: obj[key].value, label: obj[key].label };
  });
};
