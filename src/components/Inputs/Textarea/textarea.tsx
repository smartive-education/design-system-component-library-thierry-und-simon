import React, { FC } from "react";

export type InputProps = {
  children: React.ReactNode;
};

export const Textarea: FC<InputProps> = ({ children }) => {
  return <textarea />;
};
