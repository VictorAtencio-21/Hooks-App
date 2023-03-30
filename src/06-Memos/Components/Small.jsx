import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Re render :(");

  return <small>{value}</small>;
});
