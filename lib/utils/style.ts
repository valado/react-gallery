// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isString = (it: any) => typeof it === "string" || it instanceof String;

export const concatClasses = (
  ...classes: (string | [className: string, activated: boolean])[]
): string => {
  return classes
    .map((it) => {
      if (isString(it)) {
        return it;
      } else {
        const [className, activated] = it;
        return activated ? className : "";
      }
    })
    .join(" ");
};
