import * as React from "react";
const SvgUpload = (props) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 9a1 1 0 0 0-1 1v2H2v-2a1 1 0 0 0-2 0v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2a1 1 0 0 0-1-1Z"
      fill="#475569"
    />
    <path
      d="M3.707 5.707 6 3.414V9a1 1 0 0 0 2 0V3.414l2.293 2.293a1 1 0 0 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414Z"
      fill="#475569"
    />
  </svg>
);
export default SvgUpload;
