import * as React from "react";
const SvgCalender = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 3h-1V1a1 1 0 0 0-2 0v2H5V1a1 1 0 0 0-2 0v2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM2 14V7h12v7H2Z"
      fill="#475569"
    />
  </svg>
);
export default SvgCalender;
