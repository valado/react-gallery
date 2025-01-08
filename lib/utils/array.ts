// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const idxAllowed = (idx: number, arr: any[]) => {
  return idx >= 0 && idx < arr.length;
};
