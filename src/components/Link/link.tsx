import React, { FC } from "react";

export type LinkProps = {
  link: string;
  children: React.ReactNode;
};

export const Link: FC<LinkProps> = ({ children, link }) => {
  return (
    <a
      className="text-xs font-[600] text-violet-600 underline decoration-inherit decoration-1 underline-offset-4 hover:decoration-violet-200"
      href={link}
    >
      {children}
    </a>
  );
};
